import { lanzarDado } from './src/main.js';

// Rastrea fallas
let failed = false;

// Lanzamos el dado muchas veces para probar su rango
for (let i = 0; i < 100; i++) {
  const resultado = lanzarDado();
  if (resultado < 1 || resultado > 6) {
    console.error(`El dado devolvió un valor fuera de rango: ${resultado}`);
    failed = true;
  }
}

// Salida en caso de fallos
if (failed) {
  throw new Error('Uno o más tests fallaron: el dado devolvió valores fuera del rango 1-6');
}

console.log('✅ Todos los tests del dado pasaron correctamente');