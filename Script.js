document.addEventListener('DOMContentLoaded', () => {
  // ===============================
  // Acessibilidade - Elementos DOM
  // ===============================
  const btnAcessibilidade = document.getElementById('botao-acessibilidade');
  const menuAcessibilidade = document.getElementById('opcoes-acessibilidade');
  const botoesAcessibilidade = menuAcessibilidade?.querySelectorAll('button') || [];

  const btnAumentarFonte = document.getElementById('aumentar-fonte');
  const btnDiminuirFonte = document.getElementById('diminuir-fonte');
  const btnAltoContraste = document.getElementById('alterna-contraste');

  let tamanhoFonteAtual = 1; // valor inicial em rem

  // ===============================
  // Função: Alterar Tamanho da Fonte
  // ===============================
  const alterarTamanhoFonte = (delta) => {
    tamanhoFonteAtual = Math.max(0.5, Math.min(2, tamanhoFonteAtual + delta));
    document.body.style.fontSize = `${tamanhoFonteAtual}rem`;
  };

  // ===============================
  // Menu de Acessibilidade (Toggle)
  // ===============================
  if (btnAcessibilidade && menuAcessibilidade) {
    btnAcessibilidade.addEventListener('click', () => {
      const menuAtivo = menuAcessibilidade.classList.toggle('apresenta-lista');
      btnAcessibilidade.classList.toggle('rotacao-botao');

      // Atributos ARIA para acessibilidade
      btnAcessibilidade.setAttribute('aria-expanded', String(menuAtivo));
      menuAcessibilidade.setAttribute('aria-hidden', String(!menuAtivo));

      // Controle do foco via tab
      botoesAcessibilidade.forEach(btn => {
        btn.tabIndex = menuAtivo ? 0 : -1;
      });
    });
  }

  // ===============================
  // Botões de Controle de Fonte
  // ===============================
  if (btnAumentarFonte) {
    btnAumentarFonte.addEventListener('click', () => alterarTamanhoFonte(0.1));
  }

  if (btnDiminuirFonte) {
    btnDiminuirFonte.addEventListener('click', () => alterarTamanhoFonte(-0.1));
  }

  // ===============================
  // Alternância de Contraste Alto
  // ===============================
  if (btnAltoContraste) {
    btnAltoContraste.addEventListener('click', () => {
      document.body.classList.toggle('alto-contraste');
    });
  }

  // ===============================
  // Animações com ScrollReveal
  // ===============================
  if (typeof ScrollReveal !== 'undefined') {
    const sr = ScrollReveal({
      delay: 300,
      distance: '60px',
      duration: 900,
      easing: 'ease-in-out',
      origin: 'bottom',
      reset: false // Se true, repete animação ao rolar novamente
    });

    // Seletor dos elementos a animar
    sr.reveal('#inicio');
    sr.reveal('#tropicalia');
    sr.reveal('#galeria');
    sr.reveal('#contato');
  }
});

