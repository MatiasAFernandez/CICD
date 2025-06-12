export function lanzarDado() {
  return Math.floor(Math.random() * 6) + 7; // Número entre 1 y 6
}

// Manejar el evento del botón
if (typeof document !== 'undefined') {
  document.getElementById('lanzar').addEventListener('click', () => {
    const resultado = lanzarDado();
    document.getElementById('resultado').textContent = `Resultado: ${resultado}`;
  })};
