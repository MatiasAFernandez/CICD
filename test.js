import { lanzarDado } from './src/main.js';

// Lanzamos el dado muchas veces para probar su rango
for (let i = 0; i < 100; i++) {
  const resultado = lanzarDado();
  console.assert(resultado >= 1 && resultado <= 6, `El dado devolvió un valor fuera de rango: ${resultado}`);
}

console.log('✅ Todos los tests del dado pasaron correctamente');
