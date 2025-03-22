// Obtener parámetros de la URL
const urlSearchParams = new URLSearchParams(window.location.search);
const messageCustom = urlSearchParams.get("message");

if (messageCustom) {
  const mainMessageElement = document.querySelector("#mainMessage");
  mainMessageElement.textContent = decodeURIComponent(messageCustom);
}

// Obtener referencias a los elementos
const btnOpenElement = document.querySelector("#open");
const btnCloseElement = document.querySelector("#close");
const coverElement = document.querySelector(".cover");
const paperElement = document.querySelector(".paper");
const heartElement = document.querySelector(".heart");

// Deshabilitar el botón de cerrar al inicio
btnCloseElement.disabled = true;

// Evento para abrir la carta
btnOpenElement.addEventListener("click", () => {
  btnOpenElement.disabled = true;
  btnCloseElement.disabled = false;

  coverElement.classList.add("open-cover");

  setTimeout(() => {
    coverElement.classList.add("hidden");
    paperElement.classList.remove("close-paper");
    paperElement.classList.add("open-paper");
    heartElement.classList.remove("hidden");
  }, 500);
});

// Evento para cerrar la carta
btnCloseElement.addEventListener("click", () => {
  btnOpenElement.disabled = false;
  btnCloseElement.disabled = true;

  paperElement.classList.remove("open-paper");
  paperElement.classList.add("close-paper");

  setTimeout(() => {
    coverElement.classList.remove("hidden");
    coverElement.classList.remove("open-cover");
    heartElement.classList.add("hidden");
  }, 500);
});
