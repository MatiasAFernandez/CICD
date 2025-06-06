export function lanzarDado() {
  return Math.floor(Math.random() * 6) + 1; // Número entre 1 y 6
}

const boton = document.getElementById('lanzar');
const resultado = document.getElementById('resultado');

boton.addEventListener('click', () => {
  const valor = lanzarDado();
  resultado.textContent = `Resultado: ${valor}`;
});
