'use strict';

// Obtener los elementos del DOM
const boton = document.querySelector('#boton01');
const marcoFoto = document.querySelector('#marco_foto');

// Establecer el estado inicial del botón
let mostrarFoto = false;
actualizarBoton();

// Agregar el listener para el botón
boton.addEventListener('click', function() {
// Cambiar el estado del botón
mostrarFoto = !mostrarFoto;
// Actualizar el botón
actualizarBoton();
// Mostrar u ocultar la foto según el estado del botón
if (mostrarFoto) {
marcoFoto.classList.remove('oculto');
} else {
marcoFoto.classList.add('oculto');
}
});

// Función para actualizar el texto del botón según el estado
function actualizarBoton() {
if (mostrarFoto) {
boton.textContent = 'Ocultar miembros';
} else {
boton.textContent = 'Miembros';
}
}