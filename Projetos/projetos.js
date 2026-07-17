// ============================================================
// Meus Projetos - Etec
// Zoom de imagens ao clicar (lightbox), igual ao scriptpedroh.js
// ============================================================

document.addEventListener('DOMContentLoaded', () => {
  // calcula a altura do menu principal para o mini-nav grudar certinho embaixo dele
  function ajustarOffsetMiniNav() {
    const navPrincipal = document.querySelector('body > nav');
    if (navPrincipal) {
      document.documentElement.style.setProperty('--nav-height', `${navPrincipal.offsetHeight}px`);
    }
  }
  ajustarOffsetMiniNav();
  window.addEventListener('resize', ajustarOffsetMiniNav);

  // cria o overlay uma única vez
  const overlay = document.createElement('div');
  overlay.className = 'lightbox-overlay';
  const overlayImg = document.createElement('img');
  overlay.appendChild(overlayImg);
  document.body.appendChild(overlay);

  function abrirZoom(src, alt) {
    overlayImg.src = src;
    overlayImg.alt = alt || '';
    overlay.classList.add('active');
  }

  function fecharZoom() {
    overlay.classList.remove('active');
  }

  // seleciona todas as imagens das galerias de projetos
  const seletor = '.Diversidade img, .Doemais img, .Interdiciplinar img, .Gincana img, ' +
                   '.informativo img, .Quizcbjr img, .Cbjrsite img, .formulario img, .fator5 img';

  document.querySelectorAll(seletor).forEach((img) => {
    img.addEventListener('click', () => abrirZoom(img.src, img.alt));
  });

  // clicar no overlay (ou na imagem ampliada) fecha o zoom
  overlay.addEventListener('click', fecharZoom);

  // fechar com a tecla Esc
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') fecharZoom();
  });

  // ---------- Mini navegação interna (Etec / Leopoldo / Pessoais) ----------
  const linksMiniNav = document.querySelectorAll('.mini-nav a');
  const secoes = ['etec', 'leopoldo', 'pessoais']
    .map((id) => document.getElementById(id))
    .filter(Boolean);

  if (linksMiniNav.length && secoes.length) {
    function secaoAtiva() {
      const alturaNav = parseInt(
        getComputedStyle(document.documentElement).getPropertyValue('--nav-height')
      ) || 60;
      const linhaDeReferencia = alturaNav + 60; // um pouco abaixo do mini-nav

      // pega a ultima secao cujo topo ja passou da linha de referencia
      let atual = secoes[0];
      secoes.forEach((secao) => {
        if (secao.getBoundingClientRect().top - linhaDeReferencia <= 0) {
          atual = secao;
        }
      });
      return atual;
    }

    function atualizarMiniNav() {
      const atual = secaoAtiva();
      linksMiniNav.forEach((link) => {
        link.classList.toggle('active', link.getAttribute('href') === `#${atual.id}`);
      });
    }

    let ticking = false;
    window.addEventListener('scroll', () => {
      if (!ticking) {
        window.requestAnimationFrame(() => {
          atualizarMiniNav();
          ticking = false;
        });
        ticking = true;
      }
    }, { passive: true });

    // marca o destaque imediatamente ao clicar, sem esperar o scroll terminar
    linksMiniNav.forEach((link) => {
      link.addEventListener('click', () => {
        linksMiniNav.forEach((l) => l.classList.remove('active'));
        link.classList.add('active');
      });
    });

    atualizarMiniNav();
  }
});

//Musica de fundo

const musica = document.getElementById("musica");
const botao = document.getElementById("btnMusica");

botao.addEventListener("click", function () {

    if (musica.paused) {

        musica.play();

        botao.innerHTML = "Parar Música🔇";

    } else {

        musica.pause();

        botao.innerHTML = "Volte a apreciar🎵";

    }

});