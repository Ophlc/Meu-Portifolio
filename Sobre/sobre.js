// ============================================================
// Sobre mim - Etec
// Marca o link ativo do menu com base na página atual
// ============================================================

document.addEventListener('DOMContentLoaded', () => {
    const paginaAtual = (location.pathname.split(/[\\/]/).pop() || 'index.html').toLowerCase();

    document.querySelectorAll('nav ul li a').forEach((link) => {
        const destino = link.getAttribute('href').split(/[\\/]/).pop().toLowerCase();
        if (destino === paginaAtual) {
            link.classList.add('active');
        }
    });
});