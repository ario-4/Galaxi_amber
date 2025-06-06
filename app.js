// --- Activar/desactivar menú hamburguesa ---
const menuToggle = document.getElementById("menu-toggle");
const menu = document.getElementById("menu");

menuToggle.addEventListener("click", () => {
  menu.classList.toggle("show");
});

// --- Lógica básica de búsqueda (placeholder) ---
const searchInput = document.getElementById("searchInput");
const searchResults = document.getElementById("searchResults");

searchInput.addEventListener("input", () => {
  const query = searchInput.value.trim().toLowerCase();

  if (query.length < 3) {
    searchResults.innerHTML = "<p>Introduce al menos 3 letras para buscar.</p>";
    return;
  }

  // 🔔 Aquí puedes integrar una búsqueda real en PDF o en datos si usas JSON
  searchResults.innerHTML = `<p>Buscando: <strong>${query}</strong> (función en desarrollo)</p>`;
});
