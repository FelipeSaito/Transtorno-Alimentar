// =============================
// Atualiza o ano do rodapé
// =============================
document.addEventListener("DOMContentLoaded", () => {
  const ano = document.getElementById("ano");
  if (ano) ano.textContent = new Date().getFullYear();
});

// =============================
// Tabs de “Transtornos Alimentares”
// =============================
document.addEventListener("DOMContentLoaded", () => {
  const container = document.getElementById("transtornos");
  if (!container) return;

  const buttons = container.querySelectorAll(".tab-btn");
  const panels = container.querySelectorAll(".tab-panel");

  function ativarAba(id) {
    buttons.forEach((btn) => {
      const ativo = btn.dataset.target === id;
      btn.classList.toggle("active", ativo);
      btn.setAttribute("aria-selected", ativo);
    });

    panels.forEach((panel) => {
      const ativo = panel.id === id;
      panel.classList.toggle("active", ativo);
      panel.hidden = !ativo;
    });
  }

  buttons.forEach((btn) => {
    btn.addEventListener("click", () => ativarAba(btn.dataset.target));
  });

  // Estado inicial
  const inicial = buttons[0];
  if (inicial) ativarAba(inicial.dataset.target);
});

// =============================
// Modal de demonstração
// =============================
document.addEventListener("DOMContentLoaded", () => {
  const modal = document.getElementById("modal");
  if (!modal) return;

  const fechar = document.getElementById("close-modal");
  const baixar = document.getElementById("download-pdf");

  function fecharModal() {
    modal.style.display = "none";
    modal.setAttribute("aria-hidden", "true");
  }

  if (fechar) fechar.addEventListener("click", fecharModal);
  if (baixar)
    baixar.addEventListener("click", (e) => {
      e.preventDefault();
      fecharModal();
    });
});
