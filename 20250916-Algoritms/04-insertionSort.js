// Algoritmo de ordenamiento Insertion Sort
console.log('=== Algoritmo de Ordenamiento Insertion (Insertion Sort) ===');
const { crearArrayAleatorio } = require('./utils/randomArray.js');
const { verificarArrayOrdenado } = require('./utils/verifySorted.ts');

const CANTIDAD = 20;

// Implementación del algoritmo Insertion Sort
function insertionSort(arr) {
  // Crear una copia del array para no modificar el original
  const arrayOrdenado = [...arr];
  const n = arrayOrdenado.length;
  let comparaciones = 0;
  let desplazamientos = 0;

  console.log('\n--- Proceso de ordenamiento ---');

  // Comenzar desde el segundo elemento (índice 1)
  for (let i = 1; i < n; i++) {
    const elementoActual = arrayOrdenado[i];
    let j = i - 1; // Índice del elemento anterior

    console.log(
      `\nPasada ${i}: Insertando elemento ${elementoActual} en su posición correcta`
    );
    console.log(`  Estado actual: [${arrayOrdenado}]`);
    console.log(
      `  Parte ordenada: [${arrayOrdenado.slice(
        0,
        i
      )}] | Elemento a insertar: ${elementoActual}`
    );

    // Mover elementos mayores hacia la derecha
    while (j >= 0 && arrayOrdenado[j] > elementoActual) {
      comparaciones++; // Valor meramente estadísitico
      console.log(
        `    Comparando ${arrayOrdenado[j]} > ${elementoActual}: verdadero, desplazando ${arrayOrdenado[j]} hacia la derecha`
      );

      arrayOrdenado[j + 1] = arrayOrdenado[j];
      desplazamientos++;
      j--;
    }

    // Si j >= 0, significa que hicimos una comparación más
    if (j >= 0) {
      comparaciones++; // Valor meramente estadísitico
      console.log(
        `    Comparando ${arrayOrdenado[j]} > ${elementoActual}: falso, posición encontrada`
      );
    }

    // Insertar el elemento en su posición correcta
    arrayOrdenado[j + 1] = elementoActual;

    if (j + 1 !== i) {
      console.log(
        `  ✅ Elemento ${elementoActual} insertado en posición ${j + 1}`
      );
    } else {
      console.log(
        `  ℹ️  Elemento ${elementoActual} ya estaba en su posición correcta`
      );
    }

    console.log(`  Resultado: [${arrayOrdenado}]`);
  }

  console.log(`\n--- Estadísticas ---`);
  console.log(`Total de comparaciones: ${comparaciones}`);
  console.log(`Total de desplazamientos: ${desplazamientos}`);

  return arrayOrdenado;
}

// Programa principal
function main() {
  // Crear array de `CANTIDAD` números aleatorios
  console.log(`\nGenerando array de ${CANTIDAD} números aleatorios...`);
  const arrayOriginal = crearArrayAleatorio(CANTIDAD);

  // Mostrar array original
  console.log(`📊 Array Original: [${arrayOriginal}]`);

  // Aplicar insertion sort
  console.log('\n🔄 Iniciando ordenamiento con Insertion Sort...');
  const arrayOrdenado = insertionSort(arrayOriginal);

  // Mostrar array ordenado
  console.log(`✅ Array Ordenado: [${arrayOrdenado}]`);

  // Verificar que el ordenamiento es correcto
  verificarArrayOrdenado(arrayOrdenado);
}

// Ejecutar el programa
main();
