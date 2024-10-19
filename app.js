// Selecciona los elementos del DOM.
const inputRojo = document.getElementById('rojo');
const inputVerde = document.getElementById('verde');
const inputAzul = document.getElementById('azul');
//const sliders = document.querySelectorAll("input[type='range']");
const textoRojo = document.getElementById('texto-rojo');
const textoVerde = document.getElementById('texto-verde');
const textoAzul = document.getElementById('texto-azul');

// Valores iniciales para definir el color RGB.
let rojo = inputRojo.value;
let verde = inputVerde.value;
let azul = inputAzul.value;

// Muestra los valores iniciales en los elementos <p>.
textoRojo.textContent = rojo;
textoVerde.textContent = verde;
textoAzul.textContent = azul;

// Función para actualizar el color de fondo de la página.
function actualizarColor(rojo, verde, azul) {
  const body = document.body;
  body.style.transition = 'background-color 0.1s ease-in-out';
  document.body.style.backgroundColor = `rgb(${rojo}, ${verde}, ${azul})`;
}

// Agrega un event listener para el input de Rojo.
inputRojo.addEventListener('change', (e) => {
  // Actualiza el valor de la variable y el texto.
  // Llama a la función para actualizar el color de fondo.
  rojo = e.target.value;
  textoRojo.textContent = rojo;
  actualizarColor(rojo, verde, azul);
});

// Agrega un event listener para el input de Verde.
inputVerde.addEventListener('change', (e) => {
  // Actualiza el valor de la variable y el texto.
  // Llama a la función para actualizar el color de fondo.
  verde = e.target.value;
  textoVerde.textContent = verde;
  actualizarColor(rojo, verde, azul);
});

// Agrega un event listener para el input de Azul.
inputAzul.addEventListener('change', (e) => {
  // Actualiza el valor de la variable y el texto.
  // Llama a la función para actualizar el color de fondo.
  azul = e.target.value;
  textoAzul.textContent = azul;
  actualizarColor(rojo, verde, azul);
});

/* sliders.forEach((inp) => {
  inp.addEventListener("input", actualizarColor);
});

window.addEventListener('load', () => {
  // Llama a la función para actualizar el color de fondo.
  actualizarColor(rojo, verde, azul);
}) */