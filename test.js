const assert = require('assert');
const suma = require('./index');

// Prueba simple
assert.strictEqual(suma(2, 3), 6);
console.log("✅ Test pasado");