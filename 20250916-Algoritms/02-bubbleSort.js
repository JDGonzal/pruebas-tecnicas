// Algoritmo de ordenamiento Bubble Sort
console.log('=== Algoritmo de Ordenamiento Burbuja (Bubble Sort) ===');
const { crearArrayAleatorio } = require('./utils/randomArray.js');
const { verificarArrayOrdenado } = require('./utils/verifySorted.ts');

const CANTIDAD = 20;

// Implementación del algoritmo Bubble Sort
function bubbleSort(arr) {
  // Crear una copia del array para no modificar el original
  const arrayOrdenado = [...arr];
  const n = arrayOrdenado.length;
  let intercambios = 0;
  let comparaciones = 0;

  console.log('\n--- Proceso de ordenamiento ---');

  // Bucle externo: controla el número de pasadas
  for (let i = 0; i < n - 1; i++) {
    let huboIntercambio = false;

    console.log(`\nPasada ${i + 1}:`);

    // Bucle interno: compara elementos adyacentes
    for (let j = 0; j < n - i - 1; j++) {
      comparaciones++; // Valor meramente estadísitico

      // Comparar elementos adyacentes
      if (arrayOrdenado[j] > arrayOrdenado[j + 1]) {
        // Intercambiar elementos
        let temp = arrayOrdenado[j];
        arrayOrdenado[j] = arrayOrdenado[j + 1];
        arrayOrdenado[j + 1] = temp;

        intercambios++; // Valor meramente estadísitico
        huboIntercambio = true;

        console.log(
          `  Intercambio: ${arrayOrdenado[j + 1]} ↔ ${arrayOrdenado[j]}`
        );
      }
    }

    // Si no hubo intercambios, el array ya está ordenado
    if (!huboIntercambio) {
      console.log(`  No hubo intercambios. Array ya ordenado.`);
      break;
    }

    console.log(`  Estado actual: [${arrayOrdenado}]`);
  }

  console.log(`\n--- Estadísticas ---`);
  console.log(`Total de comparaciones: ${comparaciones}`);
  console.log(`Total de intercambios: ${intercambios}`);

  return arrayOrdenado;
}

// Programa principal
function main() {
  // Crear array de `CANTIDAD` números aleatorios
  console.log(`\nGenerando array de ${CANTIDAD} números aleatorios...`);
  const arrayOriginal = crearArrayAleatorio(CANTIDAD);

  // Mostrar array original
  console.log(`📊 Array Original: [${arrayOriginal}]`);

  // Aplicar bubble sort
  console.log('\n🔄 Iniciando ordenamiento con Bubble Sort...');
  const arrayOrdenado = bubbleSort(arrayOriginal);

  // Mostrar array ordenado
  console.log(`✅ Array Ordenado: [${arrayOrdenado}]`);
  // console.log(`✅ Array Ordenado: [${arrayOrdenado}]`);

  // Verificar que el ordenamiento es correcto
  verificarArrayOrdenado(arrayOrdenado);
}

// Ejecutar el programa
main();
