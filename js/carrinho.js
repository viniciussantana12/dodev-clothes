window.addEventListener("load", () => {
    let total = 0;
    let vazio = true;
    const carrinhoDiv = document.getElementById("carrinho");
    const array = JSON.parse(window.localStorage.getItem("array")) || [];
  
    // Itera pelos produtos no carrinho
    array.forEach((produto) => {
      if (produto.quantidade > 0) {
        vazio = false;

                // Dentro do loop forEach
        const item = document.createElement('div');
        item.innerHTML = `
          <img src="${produto.img}" style="width: 100px">
          <p>${produto.nome} - Tamanho: ${produto.tamanho}</p>
          <p>Quantidade: ${produto.quantidade}</p>
          <p>Preço: R$${produto.valor * produto.quantidade}</p>
        `;
        carrinhoDiv.appendChild(item);
  
        // Cria elementos para exibição do produto
        const img = document.createElement("img");
        img.style.width = "250px";
        img.style.height = "150px";
        img.style.margin = "40px";
  
        switch (produto.nome) {
          case "Camisa slim preta":
            img.src = "../imagens/camiseta1.jfif";
            break;
          case "Moletom branco":
            img.src = "../imagens/camiseta2.jfif";
            break;
          case "calça jeans":
            img.src = "../imagens/camiseta3.jfif";
            break;
          case "moletom preto":
            img.src = "../imagens/moletom.jfif";
            break;
          default:
            img.src = "../imagens/default.jfif"; // Caso não tenha imagem correspondente
            break;
        }
  
        const text = document.createElement("p");
        text.style.borderBottom = "1px solid";
        text.style.display = "flex";
        text.style.justifyContent = "space-between";
        text.style.alignItems = "center";
        text.style.width = "100%";
        text.style.fontSize = "1.5em";
  
        const nomeSpan = document.createElement("span");
        nomeSpan.innerText = produto.nome;
        nomeSpan.style.width = "400px";
        nomeSpan.style.marginRight = "2vw";
  
        const qtdSpan = document.createElement("span");
        qtdSpan.innerText = `${produto.quantidade}x`;
        qtdSpan.style.marginRight = "12vw";
  
        const precoSpan = document.createElement("span");
        precoSpan.style.margin = "40px";
        precoSpan.style.marginRight = "6vw";
        precoSpan.innerText = `R$${produto.valor}`;
  
        // Adiciona elementos ao texto e ao carrinho
        text.appendChild(img);
        text.appendChild(nomeSpan);
        text.appendChild(qtdSpan);
        text.appendChild(precoSpan);
        carrinhoDiv.appendChild(text);
  
        total += Number(produto.valor);
      }
    });
  
    // Exibe o total no final do carrinho
    const totalDiv = document.getElementById("total");
    if (totalDiv) {
      totalDiv.innerHTML = `Total a Pagar: R$${total}`;
      totalDiv.style.marginTop = "5vh";
      totalDiv.style.marginBottom = "5vh";
      totalDiv.style.fontSize = "1.5em";
      window.localStorage.setItem("total", total);
    }
  
    // Verifica se o carrinho está vazio
    if (vazio) {
      carrinhoDiv.innerHTML = "Carrinho Vazio";
      carrinhoDiv.style.fontSize = "1.5em";
    } else {
      // Adiciona o botão "Limpar Carrinho"
      const apagarCarrinho = document.getElementById("divApagar");
      if (apagarCarrinho) {
        const apagar = document.createElement("button");
        apagar.innerHTML = "Limpar Carrinho";
        apagar.style.padding = "10px";
        apagar.style.background = "white";
        apagar.style.color = "red";
        apagar.style.border = "solid 1px red";
        apagarCarrinho.appendChild(apagar);
  
        // Estilização interativa do botão
        apagar.addEventListener("mouseover", () => {
          apagar.style.transitionDuration = "0.5s";
          apagar.style.borderRadius = "10px";
          apagar.style.cursor = "pointer";
        });
        apagar.addEventListener("mouseout", () => {
          apagar.style.transitionDuration = "0.5s";
          apagar.style.borderRadius = "0px";
          apagar.style.cursor = "default";
        });
  
        // Evento de clique para limpar o carrinho
        apagar.addEventListener("click", () => {
          carrinhoDiv.innerHTML = "Carrinho Vazio";
          if (totalDiv) totalDiv.innerHTML = "";
          window.localStorage.setItem("array", JSON.stringify([]));
        });
      }
    }
  });
  

  