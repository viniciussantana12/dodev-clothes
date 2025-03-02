const roupa = document.querySelector("#roupa");
const valor = document.querySelector("#valor");
const imagens = document.querySelectorAll("img"); // Corrigido para selecionar todas as imagens
const imgGrande = document.querySelector("#img4"); // Certifique-se de que existe um elemento com id="img4"

window.addEventListener("load", () => {
  // Atualiza informações do produto
  roupa.innerHTML = window.localStorage.getItem("nome");
  const valorComCifrao = `$${window.localStorage.getItem("valor")}`;
  valor.innerHTML = valorComCifrao;

  // Atualiza as imagens das miniaturas
  imagens.forEach((element, i) => {
    const imag = document.getElementById("img" + (i + 1)); // Busca pelas miniaturas
    const url = window.localStorage.getItem("img" + (i + 1)); // Busca URL da imagem
    if (imag && url) {
      imag.src = url;
    }
  });
});

// Configuração de troca entre imagem grande e miniaturas
let grandona = window.localStorage.getItem("img4");
for (let i = 0; i < 3; i++) {
  const imagem = document.getElementById("img" + (i + 1));

  if (imagem) {
    imagem.addEventListener("click", () => {
      const tempSrc = imagem.src;
      imagem.src = grandona;
      grandona = tempSrc;
      imgGrande.src = grandona; // Atualiza a imagem grande
    });
  }
}

// Gerenciamento do carrinho
const botaoCarrinho = document.getElementById("btnCarrinho");
botaoCarrinho.addEventListener("click", () => {
  let arrayGet = JSON.parse(window.localStorage.getItem("array")) || [];
  const quantidade = Number(document.getElementById("iquantidade").value);
  const nomeProduto = window.localStorage.getItem("nome");
  const valorProduto = Number(window.localStorage.getItem("valor"));

  // Verifica se o produto já existe no carrinho
  let produtoExistente = arrayGet.find((item) => item.nome === nomeProduto);

  if (produtoExistente) {
    produtoExistente.quantidade += quantidade;
    produtoExistente.valor = valorProduto * produtoExistente.quantidade; // Atualiza valor total do produto
  } else {
    const novoProduto = {
      nome: nomeProduto,
      valor: valorProduto * quantidade, // Valor total do produto
      quantidade: quantidade,
    };
    arrayGet.push(novoProduto);
  }

  // Atualiza o carrinho no localStorage
  window.localStorage.setItem("array", JSON.stringify(arrayGet));

  console.log(arrayGet);
  alert("Produto adicionado ao carrinho.");
  setTimeout(() => {
    window.location.href = './carrinho.html';
  }, 1500);
});


/*const tamanho = document.getElementById("tamanho").value;
const novoProduto = {
  nome: nomeProduto,
  valor: valorProduto,
  quantidade: quantidade,
  tamanho: tamanho,
  img: window.localStorage.getItem("img1") // Armazenar imagem principal
};*/

// Modifique a criação do produto para:
const novoProduto = {
  nome: nomeProduto,
  valorUnitario: valorProduto, // Valor por unidade
  quantidade: quantidade,
  tamanho: document.getElementById("tamanho").value,
  img: window.localStorage.getItem("img1") // Caminho da imagem principal
};