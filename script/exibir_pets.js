/* Arquivo de script: exibir_pets.js
   Responsável pela lógica e comportamento desta funcionalidade/página. */

/* Arquivo JS: exibir_pets.js
   Responsável por comportamentos e regras da página/fluxo correspondente. */

function obterListaPets() {
  const petsSession = JSON.parse(sessionStorage.getItem("pets")) || [];
  const petsOcorrencias =
    JSON.parse(localStorage.getItem("ocorrenciasPets")) || [];
  const origem = petsOcorrencias.length > 0 ? petsOcorrencias : petsSession;

  return origem.map((pet) => ({
    nome: pet.nome || pet.nomePet || "Sem nome",
    localiza: pet.localiza || pet.localizacao || "Não informada",
    raca: pet.raca || pet.tipo || pet.tipoPet || "Não informada",
    data: pet.data || "Não informada",
    contato: pet.contato || pet.whatsapp || "Não informado",
    whatsapp: pet.whatsapp || pet.contato || "",
    descricao: pet.descricao || pet.descricaoPet || "Não informada",
    imagem: pet.imagem || pet.fotoPet || "",
  }));
}

function exibirPets() {
  const galeria = document.querySelector(".container-cards");
  if (!galeria) return;

  galeria.innerHTML = "";

  const listaPets = obterListaPets();

  // Filtros
  const campoNome = document.getElementById("filtro-nome");
  const campoLocal = document.getElementById("filtro-localizacao");
  const campoEspecie = document.getElementById("filtro-especie");

  const filtroNome = (campoNome?.value || "").toLowerCase();
  const filtroLocal = (campoLocal?.value || "").toLowerCase();
  const filtroEspecie = campoEspecie?.value || "";

  const petsFiltrados = listaPets.filter((pet) => {
    const nomeMatch = pet.nome.toLowerCase().includes(filtroNome);
    const localMatch = pet.localiza.toLowerCase().includes(filtroLocal);
    const especieMatch =
      filtroEspecie === "" ||
      pet.raca.toLowerCase() === filtroEspecie.toLowerCase();
    return nomeMatch && localMatch && especieMatch;
  });

  if (petsFiltrados.length === 0) {
    if (listaPets.length === 0) {
      galeria.innerHTML = "<p>Nenhum pet cadastrado ainda.</p>";
    } else {
      galeria.innerHTML =
        "<p>Nenhum pet encontrado com os filtros aplicados.</p>";
    }
    return;
  }

  petsFiltrados.forEach((pet) => {
    const bloco = document.createElement("div");
    bloco.className = "pet-card";
    
    const whatsappNumero = pet.whatsapp ? pet.whatsapp.replace(/\D/g, "") : "";
    const whatsappLink = whatsappNumero && pet.contato !== "Não informado" ? `
      <p><strong>Contato:</strong> 
        <a href="https://wa.me/55${whatsappNumero}" target="_blank" class="whatsapp-link" style="text-decoration: none; color: #25D366; font-weight: bold; display: inline-flex; align-items: center; gap: 5px;">
          <img src="https://upload.wikimedia.org/wikipedia/commons/6/6b/WhatsApp.svg" alt="WhatsApp" style="width: 20px !important; height: 20px !important; border-radius: 0 !important; object-fit: contain !important; margin: 0 !important; display: inline-block;">
          ${pet.contato}
        </a>
      </p>
    ` : `<p><strong>Contato:</strong> ${pet.contato}</p>`;

    bloco.innerHTML = `
      <img src="${pet.imagem}" alt="${pet.nome}" class="pet-image" onerror="this.src='https://via.placeholder.com/150'">
      <h3>${pet.nome}</h3>
      <p><strong>Última localização:</strong> ${pet.localiza}</p>
      <p><strong>Espécie:</strong> ${pet.raca}</p>
      <p><strong>Data:</strong> ${pet.data}</p>
      ${whatsappLink}
      <p><strong>Descrição:</strong> ${pet.descricao || "Não informada"}</p>
    `;
    galeria.appendChild(bloco);
  });
}

function configurarBotaoCadastro() {
  const btnCadastrar = document.getElementById("action-btn");
  if (!btnCadastrar) return;

  btnCadastrar.addEventListener("click", () => {
    window.location.href = "publicar.html";
  });
}

document.addEventListener("DOMContentLoaded", () => {
  configurarBotaoCadastro();
  exibirPets();
});

window.addEventListener("storage", exibirPets);
