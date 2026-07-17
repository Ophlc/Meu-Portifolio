// Marca o link ativo do menu com base no arquivo atual
document.addEventListener("DOMContentLoaded", () => {
  const page = (location.pathname.split("/").pop() || "index.html").toLowerCase();
  document.querySelectorAll(".nav-links a").forEach((a) => {
    const href = a.getAttribute("href").toLowerCase();
    if (href === page || (page === "" && href === "index.html")) {
      a.classList.add("active");
    }
    // destacar "projetos" também na página de detalhe
    if (page === "projeto.html" && href === "projetos.html") {
      a.classList.add("active");
    }
  });

  // Ano no rodapé
  const y = document.getElementById("year");
  if (y) y.textContent = new Date().getFullYear();
});