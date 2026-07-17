// Marca o link ativo do menu com base no arquivo atual
document.addEventListener("DOMContentLoaded", () => {
  const page = (location.pathname.split("/").pop() || "index.html").toLowerCase();
  document.querySelectorAll("nav a").forEach((a) => {
    const href = a.getAttribute("href").split(/[\\/]/).pop().toLowerCase();
    if (href === page) {
      a.classList.add("active");
    }
  });

  // Ano no rodapé
  const y = document.getElementById("year");
  if (y) y.textContent = new Date().getFullYear();
});