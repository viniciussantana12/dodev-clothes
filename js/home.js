class Roupas {
    Produto
    Preco
    Img
    Quantidade
    Id 
    constructor(produto, preco, img, id){
        this.Produto = produto
        this.Preco = preco
        this.Img = img
        this.Quantidade = 0
        this.Id = id
    }
}

const roupas1 = new Roupas ('camisa slim preta', 100,['./imagens/camiseta3.jfif', './imagens/camiseta3.jfif', './imagens/camiseta3.jfif', './imagens/camiseta3.jfif'] , 1)
const roupas2 = new Roupas ('Calça Jeans', 90 ,['./imagens/camiseta2.jfif', './imagens/camiseta2.jfif' , './imagens/camiseta2.jfif', './imagens/camiseta2.jfif'], 2)
const roupas3 = new Roupas ('Moletom Branco', 110 ,['./imagens/camisa-manga-longa.jfif', './imagens/camisa-manga-longa.jfif', './imagens/camisa-manga-longa.jfif' , './imagens/camisa-manga-longa.jfif'], 3)
const roupas4 = new Roupas ('Moletom Preto', 110 ,['./imagens/moletom.jfif', './imagens/moletom.jfif' , './imagens/moletom.jfif' , './imagens/moletom.jfif'], 4)

//====================================

const btn1 = document.getElementById('imgbtn')

btn1.addEventListener('click' , e => {

    window.location.replace('./produto.html')

    window.localStorage.setItem('nome', roupas1.Produto)
    window.localStorage.setItem('valor', roupas1.Preco)
    window.localStorage.setItem('id', roupas1.Id)
    for(let i = 0; i < 4; i++) {
        window.localStorage.setItem('img' + (i + 1), roupas1.Img[i])
    }
})

const btn2 = document.getElementById('btn2')

btn2.addEventListener('click', e => {
    
    window.location.replace('./produto.html')

window.localStorage.setItem('nome', roupas2.Produto)
window.localStorage.setItem('valor', roupas2.Preco)
window.localStorage.setItem('id', roupas2.Id)
for(let i = 0; i < 4; i++) {
    window.localStorage.setItem(('img' + (i + 1)) , roupas2.Img[i])
}

})
const btn3 = document.getElementById('btn3')

btn3.addEventListener('click', e => {
    window.location.replace('./produto.html')

window.localStorage.setItem('nome', roupas3.Produto)
window.localStorage.setItem('valor', roupas3.Preco)
window.localStorage.setItem('id', roupas3.Id)
for(let i = 0; i < 4; i++){
    window.localStorage.setItem(('img' + (i + 1)) , roupas3.Img[i])
}

})

const btn4 = document.getElementById('btn4')

btn4.addEventListener('click' , e => {

    window.location.replace('./produto.html')

window.localStorage.setItem('nome', roupas4.Produto)
window.localStorage.setItem('valor', roupas4.Preco)
window.localStorage.setItem('id', roupas4.Id)
for(let i = 0; i < 4; i++) {
    window.localStorage.setItem(('img' +(i + 1)) , roupas4.Img[i])
}

})


document.querySelectorAll('form').forEach(form => {
    form.addEventListener('submit', (e) => {
      e.preventDefault();
      
      const formData = {
        nome: form.querySelector('#inome').value,
        email: form.querySelector('#iemail').value,
        telefone: form.querySelector('#itelefone').value
      };
  
      // Salvar no localStorage
      localStorage.setItem('formData', JSON.stringify(formData));
  
      // Enviar para a API (substitua URL pela sua do DronaHQ)
      fetch('https://apigenerator.dronahq.com/api/kfhoTqlm/lojaAPI', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData)
      })
      .then(response => response.json())
      .then(data => {
        console.log('Success:', data);
      })
      .catch((error) => {
        console.error('Error:', error);
      });
    });
  });

  