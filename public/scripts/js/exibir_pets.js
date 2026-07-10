document.getElementById("action-btn")?.addEventListener("click", () => {
  const usuarioLogado = localStorage.getItem("usuarioLogado");

  if (!usuarioLogado) {
    localStorage.setItem("destinoAposLogin", "publicar.html");
    window.location.href = "criar-conta.html";
  } else {
    window.location.href = "publicar.html";
  }
});

function normalizarTexto(valor) {
  return String(valor ?? "")
    .trim()
    .toLowerCase()
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "");
}

function normalizarTipo(tipo) {
  const valor = normalizarTexto(tipo);
  const mapa = {
    cao: "cachorro",
    cachorro: "cachorro",
    cachorros: "cachorro",
    dog: "cachorro",
    gato: "gato",
    cat: "gato",
  };

  return mapa[valor] || valor;
}

function normalizarSexo(sexo) {
  const valor = normalizarTexto(sexo);
  const mapa = {
    macho: "macho",
    male: "macho",
    femea: "femea",
    femea: "femea",
    female: "femea",
    indefinido: "indefinido",
    indefinida: "indefinido",
    nao: "indefinido",
  };

  return mapa[valor] || valor;
}

function normalizarPorte(porte) {
  const valor = normalizarTexto(porte);
  const mapa = {
    pequeno: "pequeno",
    pequena: "pequeno",
    medio: "medio",
    media: "medio",
    medio: "medio",
    grande: "grande",
  };

  return mapa[valor] || valor;
}

function obterPorte(pet) {
  return normalizarPorte(
    pet.porte || pet.portePet || pet.porte_do_pet || pet.porteDoPet || "",
  );
}

function filtrarPetsDesaparecidos(listaPets) {
  const tipoSelecionado = normalizarTipo(
    document.getElementById("filtroTipoDesaparecido")?.value,
  );
  const sexoSelecionado = normalizarSexo(
    document.getElementById("filtroSexoDesaparecido")?.value,
  );
  const porteSelecionado = normalizarPorte(
    document.getElementById("filtroPorteDesaparecido")?.value,
  );

  return listaPets.filter((pet) => {
    const status = normalizarTexto(pet.status);
    if (status && status !== "desaparecido") {
      return false;
    }

    const tipoPet = normalizarTipo(
      pet.tipo ||
        pet.raca ||
        pet.especie ||
        pet.tipoAnimal ||
        pet.especieAnimal,
    );
    const sexoPet = normalizarSexo(pet.sexo);
    const portePet = obterPorte(pet);

    const tipoOk = !tipoSelecionado || tipoPet === tipoSelecionado;
    const sexoOk = !sexoSelecionado || sexoPet === sexoSelecionado;
    const porteOk = !porteSelecionado || portePet === porteSelecionado;

    return tipoOk && sexoOk && porteOk;
  });
}

function criarCardPetDesaparecido(pet) {
  const card = document.createElement("div");
  card.className = "pet-card";
  card.style.maxWidth = "300px";
  card.style.border = "1px solid #ccc";
  card.style.borderRadius = "8px";
  card.style.padding = "10px";
  card.style.margin = "10px";
  card.style.overflow = "hidden";
  card.style.boxShadow = "0 2px 5px rgba(0,0,0,0.1)";

  const statusTexto = pet.status ? pet.status.toUpperCase() : "DESAPARECIDO";
  const statusColor = pet.status === "encontrado" ? "#4CAF50" : "#ff6600";

  card.innerHTML = `
    <img src="${pet.imagem}" alt="Imagem do pet" style="width:100%; height:auto; border-radius:5px;">
    <h3 style="margin: 5px 0;">${pet.nome || "Sem nome"}</h3>
    <div class="sumido">
      <strong>Status:</strong> <span style="color:${statusColor};"><strong>${statusTexto}</strong></span>
    </div>
    <p><strong>Tipo:</strong> ${pet.tipo || pet.raca || "Não informado"}</p>
    <p><strong>Sexo:</strong> ${pet.sexo || "Não informado"}</p>
    <p><strong>Última localização:</strong> ${pet.localiza || pet.localizacao || "Não informada"}</p>
    <p><strong>Data:</strong> ${pet.data || "Não informada"}</p>
    <p><strong>Contato:</strong> ${pet.contato || "Não informado"}</p>
    <a href="https://wa.me/55${pet.whatsapp?.replace(/\D/g, "")}" target="_blank" style="text-decoration: none; color: #25D366;">
      <img src="https://upload.wikimedia.org/wikipedia/commons/6/6b/WhatsApp.svg" alt="WhatsApp" style="width:20px; vertical-align:middle; margin-right:5px;">
      Falar no WhatsApp
    </a>
    ${pet.recompensa ? `<p style="color: green;"><strong>🎁 Recompensa:</strong> ${pet.recompensa}</p>` : ""}
    <p><strong>Descrição:</strong> ${pet.descricao || "Sem descrição"}</p>
    <div class="actions" style="display: flex; gap: 5px; margin-top: 10px;"></div>
  `;

  const actionsDiv = card.querySelector(".actions");
  const saibaMaisBtn = document.createElement("button");
  saibaMaisBtn.textContent = "Saiba Mais";
  saibaMaisBtn.className = "btn-saiba-mais";
  saibaMaisBtn.style.flex = "1";
  saibaMaisBtn.addEventListener("click", () => {
    window.location.href = `detalhes.html?id=${pet.id}`;
  });
  actionsDiv.appendChild(saibaMaisBtn);

  return card;
}

function exibirPets() {
  const listaPets = JSON.parse(localStorage.getItem("ocorrenciasPets")) || [];
  const container = document.querySelector(".container-cards");

  if (!container) {
    return;
  }

  container.innerHTML = "";

  const petsFiltrados = filtrarPetsDesaparecidos(listaPets);

  if (petsFiltrados.length === 0) {
    container.innerHTML =
      "<p>Nenhum pet desaparecido encontrado com os filtros selecionados.</p>";
    return;
  }

  petsFiltrados.forEach((pet) => {
    container.appendChild(criarCardPetDesaparecido(pet));
  });
}

function configurarFiltroDesaparecidos() {
  const btnFiltrar = document.getElementById("btnFiltrarDesaparecido");
  const btnLimpar = document.getElementById("btnLimparDesaparecido");

  if (btnFiltrar) {
    btnFiltrar.addEventListener("click", exibirPets);
  }

  if (btnLimpar) {
    btnLimpar.addEventListener("click", () => {
      document.getElementById("filtroTipoDesaparecido").value = "";
      document.getElementById("filtroSexoDesaparecido").value = "";
      document.getElementById("filtroPorteDesaparecido").value = "";
      exibirPets();
    });
  }
}

window.addEventListener("DOMContentLoaded", () => {
  configurarFiltroDesaparecidos();
  exibirPets();
});
