const assert = require('assert');
const suma = require('./index');

// Prueba simple
assert.strictEqual(suma(2, 3), 5);
console.log("✅ Test pasado");