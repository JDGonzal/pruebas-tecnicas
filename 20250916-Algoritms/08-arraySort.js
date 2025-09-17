// Ordenamiento de un arreglo con 20 números aleatorios usando funciones propias de JavaScript
console.log('=== Ordenamiento con funciones propias de JavaScript ===');
const { generarNumeroAleatorio } = require('./utils/randomArray.js');
const { verificarArrayOrdenado } = require('./utils/verifySorted.ts');

const CANTIDAD = 20;

// Crear un array con `CANTIDAD` números aleatorios
const arrayAleatorio = Array.from({ length: CANTIDAD }, () =>
  generarNumeroAleatorio()
);

// Mostrar el array original
console.log(`📊 Array Original: [${arrayAleatorio.join(', ')}]`);

// Ordenar el array usando la función sort()
const arrayOrdenado = arrayAleatorio.slice().sort((a, b) => a - b);

// Mostrar el array ordenado
console.log(`✅ Array Ordenado: [${arrayOrdenado.join(', ')}]`);

// Verificar que el ordenamiento es correcto
verificarArrayOrdenado(arrayOrdenado); // arrayOrdenado.every((val, i, arr) => i === 0 || arr[i - 1] <= val);
