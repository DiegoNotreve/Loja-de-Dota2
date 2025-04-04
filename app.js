

  // BUSCA
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

    container.style.justifyContent = visibleCards === 1 ? "center" : "flex-start";
  });

  // CARRINHO
  document.getElementById("btnCarrinho").addEventListener("click", function () {
    const carrinho = document.getElementById("comprasid");
    carrinho.style.display = (carrinho.style.display === "block") ? "none" : "block";
  });

  const carrinho = document.querySelector(".produtos");

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

  carrinho.addEventListener("click", function (event) {
    if (event.target.classList.contains("btn-mais")) {
      atualizarQuantidade(event.target, "mais");
    }

    if (event.target.classList.contains("btn-menos")) {
      atualizarQuantidade(event.target, "menos");
    }

    if (event.target.classList.contains("remover_carrinho")) {
      const produto = event.target.closest(".produto");
      produto.remove();
    }
  });

  document.querySelectorAll(".adicionar_carrinho").forEach((botao) => {
    botao.addEventListener("click", function () {
      const card = botao.closest(".card");
      const nome = card.querySelector("h3").textContent;
      const preco = card.querySelector("p").textContent;
      const imagem = card.querySelector("img").src;

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

      carrinho.insertAdjacentHTML("beforeend", produtoHTML);
    });
  });

