function mostrarSeccion(id) {
  const secciones = document.querySelectorAll("section");
  secciones.forEach(sec => sec.classList.add("oculto"));

  const target = document.getElementById(id);
  if (target) {
    target.classList.remove("oculto");
    target.scrollIntoView({ behavior: "smooth" });
  }
}

const slider = document.getElementById("slider-bar");
const imgTop = document.querySelector(".img-top");

let isDragging = false;

slider.addEventListener("mousedown", () => isDragging = true);
window.addEventListener("mouseup", () => isDragging = false);
window.addEventListener("mousemove", e => {
  if (!isDragging) return;
  const container = slider.parentElement;
  const rect = container.getBoundingClientRect();
  let pos = e.clientX - rect.left;

  // Limita dentro del contenedor
  pos = Math.max(0, Math.min(pos, rect.width));

  const porcentaje = (pos / rect.width) * 100;
  slider.style.left = `${porcentaje}%`;
  imgTop.style.clipPath = `inset(0 ${100 - porcentaje}% 0 0)`;
});
