document.addEventListener('DOMContentLoaded', () => {
  // Elementos
  const botaoDeAcessibilidade = document.getElementById('botao-acessibilidade');
  const opcoesDeAcessibilidade = document.getElementById('opcoes-acessibilidade');
  const aumentaFonteBotao = document.getElementById('aumentar-fonte');
  const diminuiFonteBotao = document.getElementById('diminuir-fonte');
  const alternaContraste = document.getElementById('alterna-contraste');

  // Estado inicial
  let tamanhoAtualFonte = 1;

  // === Acessibilidade ===
  botaoDeAcessibilidade.addEventListener('click', () => {
    botaoDeAcessibilidade.classList.toggle('rotacao-botao');
    opcoesDeAcessibilidade.classList.toggle('apresenta-lista');

    // Atualiza aria-expanded
    const expandido = botaoDeAcessibilidade.getAttribute('aria-expanded') === 'true';
    botaoDeAcessibilidade.setAttribute('aria-expanded', String(!expandido));
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
  const sr = ScrollReveal({ delay: 500, distance: '50px', duration: 800, easing: 'ease-in-out' });

  sr.reveal('#inicio');
  sr.reveal('#tropicalia');
  sr.reveal('#galeria');
  sr.reveal('#contato');
});
