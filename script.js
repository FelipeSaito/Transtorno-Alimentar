document.addEventListener('DOMContentLoaded', () => {
  // Para cada grupo de abas
  document.querySelectorAll('article .tabs').forEach(tablist => {
    // O container "pai" das panels é o article onde o tablist está
    const container = tablist.closest('article');
    const buttons = Array.from(tablist.querySelectorAll('.tab-btn'));
    const panels = Array.from(container.querySelectorAll('.tab-panel'));

    // Função que ativa uma aba pelo id alvo
    const activate = (targetId) => {
      // atualiza botões
      buttons.forEach(btn => {
        const isActive = btn.dataset.target === targetId;
        btn.classList.toggle('active', isActive);
        btn.setAttribute('aria-selected', isActive ? 'true' : 'false');
      });

      // atualiza painéis (somente os deste article)
      panels.forEach(panel => {
        const isTarget = panel.id === targetId;
        if (isTarget) {
          panel.removeAttribute('hidden');
        } else {
          panel.setAttribute('hidden', '');
        }
      });
    };

    // Estado inicial: se existir botão .active, ativa; senão ativa o primeiro
    const initialBtn = buttons.find(b => b.classList.contains('active')) || buttons[0];
    if (initialBtn) activate(initialBtn.dataset.target);

    // Eventos de clique
    buttons.forEach(btn => {
      btn.addEventListener('click', (e) => {
        e.preventDefault();
        const targetId = btn.dataset.target;
        if (!targetId) return;

        // Garante que o target existe dentro do mesmo article
        const targetPanel = container.querySelector(`#${CSS.escape(targetId)}`);
        if (!targetPanel) return;

        activate(targetId);
      });
    });
  });
});
