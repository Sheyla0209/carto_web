
document.addEventListener("DOMContentLoaded", () => {
  const secciones = document.querySelectorAll(".main-section, .header, .main-nav");

  secciones.forEach((elemento, i) => {
    setTimeout(() => {
      elemento.classList.add("aparecer");
    }, i * 200); // animación escalonada
  });
});

document.addEventListener("DOMContentLoaded", () => {
  const secciones = document.querySelectorAll(".main-section, .header, .main-nav");
  secciones.forEach((elemento, i) => {
    setTimeout(() => {
      elemento.classList.add("aparecer");
    }, i * 200);
  });

  // Efecto del botón
  const boton = document.getElementById("btn-info");
  const mensaje = document.getElementById("mensaje-oculto");

  boton.addEventListener("click", () => {
    mensaje.classList.toggle("mostrar");
    mensaje.classList.toggle("oculto");
  });
});



