function exibirPetsDesaparecidos() {
  // 1. Captura o container de cards dos Desaparecidos
  const galeria = document.querySelector('.desaparecidos .container-cards');
  if (!galeria) return;

  // Limpa o container antes de renderizar
  galeria.innerHTML = '';

  // 2. Pega a lista do localStorage (a mesma que alimenta o seu mapa)
  const listaPets = JSON.parse(localStorage.getItem('ocorrenciasPets')) || [];

  // 3. Captura os valores selecionados nos filtros de Desaparecidos
  const filtroTipo = document.getElementById('filtroTipoDesaparecido')?.value || '';
  const filtroSexo = document.getElementById('filtroSexoDesaparecido')?.value || '';
  const filtroPorte = document.getElementById('filtroPorteDesaparecido')?.value || '';

  // 4. Aplica as regras de filtragem
  const petsFiltrados = listaPets.filter(pet => {
    // Garante que só vai exibir quem tem o status "desaparecido"
    const ehDesaparecido = pet.status === 'desaparecido';

    // Compara os valores selecionados (ignora o filtro se a opção estiver vazia "")
    const tipoMatch = filtroTipo === '' || (pet.tipo && pet.tipo.toLowerCase() === filtroTipo.toLowerCase());
    const sexoMatch = filtroSexo === '' || (pet.sexo && pet.sexo.toLowerCase() === filtroSexo.toLowerCase());
    const porteMatch = filtroPorte === '' || (pet.porte && pet.porte.toLowerCase() === filtroPorte.toLowerCase());

    return ehDesaparecido && tipoMatch && sexoMatch && porteMatch;
  });

  // 5. Se não encontrar nenhum pet com esses filtros
  if (petsFiltrados.length === 0) {
    galeria.innerHTML = '<p style="grid-column: 1/-1; text-align: center; color: #777; font-weight: bold; padding: 20px;">Nenhum pet desaparecido encontrado com os filtros aplicados.</p>';
    return;
  }

  // 6. Cria e adiciona os cards na tela
  petsFiltrados.forEach(pet => {
    const card = document.createElement('div');
    card.className = 'pet-card'; // Altere para a classe de estilo do seu CSS (ex: 'card') se necessário
    card.innerHTML = `
      <img src="${pet.imagem}" alt="${pet.nome}" onerror="this.src='https://via.placeholder.com/150'">
      <div class="card-info" style="padding: 15px;">
        <p><strong>🐾 Nome:</strong> ${pet.nome || 'Sem nome'}</p>
        <p><strong>📌 Tipo:</strong> ${pet.tipo || 'Não informado'}</p>
        <p><strong>⚥ Sexo:</strong> ${pet.sexo || 'Não informado'}</p>
        <p><strong>📏 Porte:</strong> ${pet.porte || 'Não informado'}</p>
        <p><strong>📝 Descrição:</strong> ${pet.descricao || 'Sem detalhes informados.'}</p>
      </div>
    `;
    galeria.appendChild(card);
  });
}

// Vincula a execução das funções quando a página terminar de carregar
document.addEventListener("DOMContentLoaded", () => {
  // Executa a primeira listagem automática ao abrir a página
  exibirPetsDesaparecidos();

  // Mapeia o botão FILTRAR de Desaparecidos
  const btnFiltrarDesaparecido = document.getElementById('btnFiltrarDesaparecido');
  if (btnFiltrarDesaparecido) {
    btnFiltrarDesaparecido.addEventListener('click', exibirPetsDesaparecidos);
  }

  // Mapeia o botão LIMPAR de Desaparecidos
  const btnLimparDesaparecido = document.getElementById('btnLimparDesaparecido');
  if (btnLimparDesaparecido) {
    btnLimparDesaparecido.addEventListener('click', () => {
      if (document.getElementById('filtroTipoDesaparecido')) document.getElementById('filtroTipoDesaparecido').value = '';
      if (document.getElementById('filtroSexoDesaparecido')) document.getElementById('filtroSexoDesaparecido').value = '';
      if (document.getElementById('filtroPorteDesaparecido')) document.getElementById('filtroPorteDesaparecido').value = '';
      
      // Recarrega a lista sem filtros ativos
      exibirPetsDesaparecidos();
    });
  }
});