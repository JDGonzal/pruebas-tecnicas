// Algoritmo de ordenamiento Selection Sort
console.log('=== Algoritmo de Ordenamiento Selección (Selection Sort) ===');
const { crearArrayAleatorio } = require('./utils/randomArray.js');
const { verificarArrayOrdenado } = require('./utils/verifySorted.ts');

const CANTIDAD = 20;

// Implementación del algoritmo Selection Sort
function selectionSort(arr) {
  // Crear una copia del array para no modificar el original
  const arrayOrdenado = [...arr];
  const n = arrayOrdenado.length;
  let comparaciones = 0;
  let intercambios = 0;

  console.log('\n--- Proceso de ordenamiento ---');

  // Bucle externo: recorre cada posición del array
  for (let i = 0; i < n - 1; i++) {
    // Encontrar el índice del elemento mínimo en la parte no ordenada
    let indiceMinimo = i;

    console.log(`\nPasada ${i + 1}: Buscando el mínimo desde posición ${i}`);
    console.log(`  Estado actual: [${arrayOrdenado}]`);
    console.log(`  Elemento actual en posición ${i}: ${arrayOrdenado[i]}`);

    // Buscar el elemento mínimo en la parte no ordenada
    for (let j = i + 1; j < n; j++) {
      comparaciones++; // Valor meramente estadísitico
      if (arrayOrdenado[j] < arrayOrdenado[indiceMinimo]) {
        indiceMinimo = j;
        console.log(
          `    Nuevo mínimo encontrado: ${arrayOrdenado[j]} en posición ${j}`
        );
      }
    }

    // Si se encontró un elemento menor, intercambiar
    if (indiceMinimo !== i) {
      // Intercambiar elementos
      let temp = arrayOrdenado[i];
      arrayOrdenado[i] = arrayOrdenado[indiceMinimo];
      arrayOrdenado[indiceMinimo] = temp;

      intercambios++; // Valor meramente estadísitico
      console.log(
        `  ✅ Intercambio: ${arrayOrdenado[indiceMinimo]} (pos ${indiceMinimo}) ↔ ${arrayOrdenado[i]} (pos ${i})`
      );
    } else {
      console.log(
        `  ℹ️  El elemento ${arrayOrdenado[i]} ya está en su posición correcta`
      );
    }

    console.log(`  Resultado: [${arrayOrdenado}]`);
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

  // Aplicar selection sort
  console.log('\n🔄 Iniciando ordenamiento con Selection Sort...');
  const arrayOrdenado = selectionSort(arrayOriginal);

  // Mostrar array ordenado
  console.log(`✅ Array Ordenado: [${arrayOrdenado}]`);

  // Verificar que el ordenamiento es correcto
  verificarArrayOrdenado(arrayOrdenado);
}

// Ejecutar el programa
main();
