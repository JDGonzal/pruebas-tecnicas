// Algoritmo de ordenamiento Merge Sort
/*
Bonito, simple, pero con errores,
Si hay datos repetidos los elimina y deja el resto
*/
const { crearArrayAleatorio } = require('./utils/randomArray.js');
const CANTIDAD = 50;
let operaciones = 0;

const arrayBase = crearArrayAleatorio(CANTIDAD);

function quickSort(arr) {
  console.log(`📊 Array: ${'»» '.repeat(CANTIDAD - arr.length)}[${arr}]`);
  operaciones++;
  if (arr.length <= 1) {
    return arr;
  }
  let pivot = arr[Math.floor(arr.length / 2)];
  let left = arr.filter((x) => x < pivot);
  let right = arr.filter((x) => x > pivot);
  return [...quickSort(left), pivot, ...quickSort(right)];
}
const arrayOrdenado = quickSort(arrayBase);
console.log('✅ Array Ordenado: [' + arrayOrdenado + ']'); // O(n log n)
console.log(`🔢 Operaciones: ${operaciones}`);
