// ---------------------------
// JS: abas, newsletter, modal, data
// ---------------------------
(function(){
  // Tabs
  const tabBtns = document.querySelectorAll('.tab-btn');
  const panels = document.querySelectorAll('.tab-panel');

  tabBtns.forEach(btn=>{
    btn.addEventListener('click', ()=>{
      tabBtns.forEach(b=>{ b.classList.remove('active'); b.setAttribute('aria-selected','false') });
      panels.forEach(p=>{ p.classList.remove('active'); p.setAttribute('hidden',''); });

      btn.classList.add('active');
      btn.setAttribute('aria-selected','true');
      const target = document.getElementById(btn.dataset.target);
      if(target){
        target.classList.add('active');
        target.removeAttribute('hidden');
      }
    });
  });

  // Newsletter form (simulação)
  const form = document.getElementById('newsletter-form');
  const msg = document.getElementById('newsletter-msg');
  form.addEventListener('submit', (e)=>{
    e.preventDefault();
    const nome = document.getElementById('nome').value.trim();
    const email = document.getElementById('email').value.trim();

    if(!nome || !email){
      msg.textContent = 'Preencha nome e e-mail.';
      return;
    }
    // Simula envio
    msg.textContent = 'Enviando...';
    setTimeout(()=>{
      msg.textContent = 'Inscrição confirmada! Em breve você receberá o jornal no seu e-mail.';
      form.reset();
    }, 900);
  });

  // Modal de PDF (teste)
  const modal = document.getElementById('modal');
  const openNews = document.getElementById('open-news');
  const closeModal = document.getElementById('close-modal');
  const sampleBtn = document.getElementById('sample-download');

  function showModal(){ modal.style.display='flex'; modal.setAttribute('aria-hidden','false') }
  function hideModal(){ modal.style.display='none'; modal.setAttribute('aria-hidden','true') }

  openNews.addEventListener('click', showModal);
  closeModal.addEventListener('click', hideModal);
  sampleBtn.addEventListener('click', showModal);

  // ano atual
  document.getElementById('ano').textContent = new Date().getFullYear();

  // acessibilidade rápida: fechar modal com ESC
  document.addEventListener('keydown', (e)=>{
    if(e.key === 'Escape' && modal.style.display === 'flex') hideModal();
  });
})();
