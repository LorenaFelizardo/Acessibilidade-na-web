document.addEventListener('DOMContentLoaded', () => {
  // Elementos
  const botaoDeAcessibilidade = document.getElementById('botao-acessibilidade');
  const opcoesDeAcessibilidade = document.getElementById('opcoes-acessibilidade');
  const aumentaFonteBotao = document.getElementById('aumentar-fonte');
  const diminuiFonteBotao = document.getElementById('diminuir-fonte');
  const alternaContraste = document.getElementById('alterna-contraste');
  const opcoesBotao = opcoesDeAcessibilidade.querySelectorAll('button');

  // Estado inicial
  let tamanhoAtualFonte = 1;

  // === Acessibilidade ===
  botaoDeAcessibilidade.addEventListener('click', () => {
    const menuAberto = !opcoesDeAcessibilidade.classList.toggle('apresenta-lista');
    botaoDeAcessibilidade.classList.toggle('rotacao-botao');

    // Atualiza aria-expanded e aria-hidden
    botaoDeAcessibilidade.setAttribute('aria-expanded', String(!menuAberto));
    opcoesDeAcessibilidade.setAttribute('aria-hidden', String(menuAberto));

    // Controla tabIndex dos botões internos
    opcoesBotao.forEach(btn => {
      btn.tabIndex = menuAberto ? -1 : 0;
    });
  });

  // === Controle de fonte ===
  const alterarFonte = (incremento) => {
    tamanhoAtualFonte = Math.max(0.5, Math.min(2, tamanhoAtualFonte + incremento)); 
    document.body.style.fontSize = `${tamanhoAtualFonte}rem`;
  };

  aumentaFonteBotao.addEventListener('click', () => alterarFonte(0.1));
  diminuiFonteBotao.addEventListener('click', () => alterarFonte(-0.1));

  // === Contraste ===
  alternaContraste.addEventListener('click', () => {
    document.body.classList.toggle('alto-contraste');
  });

  // === Animações com ScrollReveal ===
  const sr = ScrollReveal({
    delay: 500,
    distance: '50px',
    duration: 800,
    easing: 'ease-in-out'
  });

  sr.reveal('#inicio');
  sr.reveal('#tropicalia');
  sr.reveal('#galeria');
  sr.reveal('#contato');
});
