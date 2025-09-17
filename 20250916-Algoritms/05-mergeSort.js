// Algoritmo de ordenamiento Merge Sort
console.log('=== Algoritmo de Ordenamiento Merge (Merge Sort) ===');
const { crearArrayAleatorio } = require('./utils/randomArray.js');

const CANTIDAD = 1000;

// Función auxiliar para mezclar dos subarrays ordenados
function merge(arr, ladoIzquierdo, medio, ladoDerecho, nivel = 0) {
  const indent = '  '.repeat(nivel);

  // Crear arrays temporales para las dos mitades
  const izqArray = arr.slice(ladoIzquierdo, medio + 1);
  const derArray = arr.slice(medio + 1, ladoDerecho + 1);

  console.log(`${indent}🔀 Mezclando: [${izqArray}] + [${derArray}]`);

  let i = 0,
    j = 0,
    k = ladoIzquierdo;
  let comparaciones = 0; // Valor meramente estadísitico

  // Mezclar los arrays temporales de vuelta al array original
  while (i < izqArray.length && j < derArray.length) {
    comparaciones++; // Valor meramente estadísitico
    if (izqArray[i] <= derArray[j]) {
      arr[k] = izqArray[i];
      console.log(
        `${indent}  ${izqArray[i]} ≤ ${derArray[j]} → Tomar ${izqArray[i]}`
      );
      i++;
    } else {
      arr[k] = derArray[j];
      console.log(
        `${indent}  ${izqArray[i]} > ${derArray[j]} → Tomar ${derArray[j]}`
      );
      j++;
    }
    k++;
  }

  // Copiar elementos restantes del array izquierdo
  while (i < izqArray.length) {
    arr[k] = izqArray[i];
    console.log(`${indent}  Restante izquierdo: ${izqArray[i]}`);
    i++;
    k++;
  }

  // Copiar elementos restantes del array derecho
  while (j < derArray.length) {
    arr[k] = derArray[j];
    console.log(`${indent}  Restante derecho: ${derArray[j]}`);
    j++;
    k++;
  }

  console.log(
    `${indent}✅ Resultado mezcla: [${arr.slice(
      ladoIzquierdo,
      ladoDerecho + 1
    )}]`
  );
  return comparaciones; // Valor meramente estadísitico
}

// Función recursiva principal de Merge Sort
function mergeSortRecursivo(arr, ladoIzquierdo, ladoDerecho, nivel = 0) {
  const indent = '  '.repeat(nivel);
  let totalComparaciones = 0; // Valor meramente estadísitico

  if (ladoIzquierdo < ladoDerecho) {
    const medio = Math.floor((ladoIzquierdo + ladoDerecho) / 2);

    console.log(
      `${indent}📊 Dividiendo: [${arr.slice(
        ladoIzquierdo,
        ladoDerecho + 1
      )}] en posiciones ${ladoIzquierdo}-${ladoDerecho}`
    );
    console.log(
      `${indent}   ladoIzquierdo: [${arr.slice(
        ladoIzquierdo,
        medio + 1
      )}] (${ladoIzquierdo}-${medio})`
    );
    console.log(
      `${indent}   ladoDerecho: [${arr.slice(medio + 1, ladoDerecho + 1)}] (${
        medio + 1
      }-${ladoDerecho})`
    );

    // Ordenar recursivamente las dos mitades
    totalComparaciones += mergeSortRecursivo(
      arr,
      ladoIzquierdo,
      medio,
      nivel + 1
    );
    totalComparaciones += mergeSortRecursivo(
      arr,
      medio + 1,
      ladoDerecho,
      nivel + 1
    );

    // Mezclar las mitades ordenadas
    totalComparaciones += merge(arr, ladoIzquierdo, medio, ladoDerecho, nivel);
  }

  return totalComparaciones; // Valor meramente estadísitico
}

// Implementación del algoritmo Merge Sort
function mergeSort(arr) {
  // Crear una copia del array para no modificar el original
  const arrayOrdenado = [...arr];
  const n = arrayOrdenado.length;

  console.log('\n--- Proceso de ordenamiento ---');
  console.log('🚀 Iniciando Merge Sort (Divide y Vencerás)');

  if (n <= 1) {
    console.log('Array de tamaño 1 o vacío, ya está ordenado');
    return arrayOrdenado;
  }

  const totalComparaciones = mergeSortRecursivo(arrayOrdenado, 0, n - 1);

  console.log(`\n--- Estadísticas ---`);
  console.log(`Total de comparaciones: ${totalComparaciones}`);
  console.log(
    `Complejidad teórica: O(n log n) = O(${n} * log₂(${n})) ≈ ${Math.ceil(
      n * Math.log2(n)
    )} operaciones`
  );

  return arrayOrdenado;
}

// Programa principal
function main() {
  // Crear array de `CANTIDAD` números aleatorios
  console.log(`\nGenerando array de ${CANTIDAD} números aleatorios...`);
  const arrayOriginal = crearArrayAleatorio(CANTIDAD);

  // Mostrar array original
  console.log(`📊 Array Original: [${arrayOriginal}]`);

  // Aplicar Merge sort
  console.log('\n🔄 Iniciando ordenamiento con Merge Sort...');
  const arrayOrdenado = mergeSort(arrayOriginal);

  // Mostrar array ordenado
  console.log(`✅ Array Ordenado: [${arrayOrdenado}]`);

  // Verificar que el ordenamiento es correcto
  const estaOrdenado = arrayOrdenado.every(
    (val, i, arr) => i === 0 || arr[i - 1] <= val
  );
  console.log(
    `\n🔍 Verificación: El array ${
      estaOrdenado ? 'SÍ' : 'NO'
    } está correctamente ordenado.`
  );
}

// Ejecutar el programa
main();
