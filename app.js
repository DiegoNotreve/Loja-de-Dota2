document.addEventListener('DOMContentLoaded', function () {
  const modal = document.getElementById("modal");
  const modalImg = document.getElementById("modalImg");
  const fecharBtn = document.getElementById("fecharBtn");

  document.querySelectorAll(".imgAbrir").forEach((img) => {
      img.addEventListener("click", function () {
          modalImg.src = "img/antimage gif.GIF"; // Troque para a imagem desejada
          modal.classList.remove("hide"); // Remove classe de fade-out
          modal.classList.add("show"); // Adiciona fade-in
      });
  });

  function fecharModal() {
      modal.classList.remove("show");
      modal.classList.add("hide"); // Adiciona fade-out
  }

  fecharBtn.addEventListener("click", fecharModal);

  modal.addEventListener("click", (e) => {
      if (e.target === modal) {
          fecharModal();
      }
  });
});


/* INPUT DE BUSCA */

document.addEventListener("DOMContentLoaded", function () {
  const searchInput = document.getElementById("searchInput");
  const cards = document.querySelectorAll(".card");
  const container = document.querySelector(".container_card");

  searchInput.addEventListener("input", function () {
      const searchTerm = searchInput.value.toLowerCase();
      let visibleCards = 0;

      cards.forEach((card) => {
          const title = card.querySelector("h3").textContent.toLowerCase();

          if (title.includes(searchTerm)) {
              card.classList.remove("hide");
              visibleCards++;
          } else {
              card.classList.add("hide");
          }
      });

      // Se só um card estiver visível, centraliza ele
      if (visibleCards === 1) {
          container.style.justifyContent = "center";
      } else {
          container.style.justifyContent = "flex-start"; // Volta ao layout normal
      }
  });
});






  



  /* carrinho */

  document.getElementById("btnCarrinho").addEventListener("click", function() {
    const carrinho = document.getElementById("comprasid");
    carrinho.style.display = (carrinho.style.display === "block") ? "none" : "block";
  });

  document.addEventListener("DOMContentLoaded", function () {
    const carrinho = document.querySelector(".produtos");
  
    // Função para atualizar a quantidade
    function atualizarQuantidade(botao, operacao) {
      const contador = botao.parentElement;
      let quantidadeSpan = contador.querySelector(".quantidade");
      let quantidade = parseInt(quantidadeSpan.textContent);
  
      if (operacao === "mais") {
        quantidade++;
      } else if (operacao === "menos" && quantidade > 1) {
        quantidade--;
      }
  
      quantidadeSpan.textContent = quantidade;
    }
  
    // Evento para aumentar/diminuir a quantidade e remover item
    carrinho.addEventListener("click", function (event) {
      if (event.target.classList.contains("btn-mais")) {
        atualizarQuantidade(event.target, "mais");
      }
  
      if (event.target.classList.contains("btn-menos")) {
        atualizarQuantidade(event.target, "menos");
      }
  
      // Remover produto do carrinho
      if (event.target.classList.contains("remover_carrinho")) {
        const produto = event.target.closest(".produto");
        produto.remove();
      }
    });
  
    // Evento para adicionar produto ao carrinho
    document.querySelectorAll(".adicionar_carrinho").forEach((botao) => {
      botao.addEventListener("click", function () {
        const card = botao.closest(".card");
        const nome = card.querySelector("h3").textContent;
        const preco = card.querySelector("p").textContent;
        const imagem = card.querySelector("img").src;
  
        // Criar o HTML do produto no carrinho
        const produtoHTML = `
          <div class="produto">
            <img src="${imagem}" alt="${nome}" />
            <h4>${nome}</h4>
            <p>${preco}</p>
            <div class="contador">
              <button class="btn-menos">−</button>
              <span class="quantidade">1</span>
              <button class="btn-mais">+</button>
            </div>
            <button class="remover_carrinho">Remover</button>
          </div>
        `;
  
        // Adicionar ao carrinho
        carrinho.insertAdjacentHTML("beforeend", produtoHTML);
      });
    });
  });
  
  