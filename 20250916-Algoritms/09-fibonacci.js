const readline = require('readline');

// Crear interfaz para leer entrada del usuario
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

console.log('=== Generador de Secuencia de Fibonacci ===');

// Función para generar la secuencia de Fibonacci (método iterativo)
function fibonacciIterativo(n) {
  if (n <= 0) return [];
  if (n === 1) return [0];
  if (n === 2) return [0, 1];

  const secuencia = [0, 1];

  for (let i = 2; i < n; i++) {
    const siguiente = secuencia[i - 1] + secuencia[i - 2];
    secuencia.push(siguiente);
  }

  return secuencia;
}

// Función para generar Fibonacci recursivo (solo para comparación)
function fibonacciRecursivo(n) {
  if (n <= 0) return 0;
  if (n === 1) return 0;
  if (n === 2) return 1;

  return fibonacciRecursivo(n - 1) + fibonacciRecursivo(n - 2);
}

// Función para generar secuencia usando recursión
function secuenciaFibonacciRecursiva(cantidad) {
  const secuencia = [];
  for (let i = 1; i <= cantidad; i++) {
    secuencia.push(fibonacciRecursivo(i));
  }
  return secuencia;
}

// Función para mostrar información detallada de la secuencia
function mostrarInformacionFibonacci(secuencia, metodo, tiempoEjecucion) {
  console.log(`\n--- Secuencia de Fibonacci (${metodo}) ---`);
  console.log(`Secuencia: [${secuencia.join(', ')}]`);
  console.log(`Cantidad de números: ${secuencia.length}`);
  console.log(`Tiempo de ejecución: ${tiempoEjecucion.toFixed(4)} ms`);

  if (secuencia.length > 1) {
    console.log(`Primer número: ${secuencia[0]}`);
    console.log(`Último número: ${secuencia[secuencia.length - 1]}`);

    // Mostrar algunas propiedades interesantes
    if (secuencia.length >= 3) {
      console.log('\n--- Propiedades matemáticas ---');
      const ultimoIndice = secuencia.length - 1;
      const suma = secuencia.reduce((acc, num) => acc + num, 0);
      console.log(`Suma total: ${suma}`);

      // Razón áurea aproximada (para números grandes)
      if (secuencia.length >= 10) {
        const razonAurea =
          secuencia[ultimoIndice] / secuencia[ultimoIndice - 1];
        console.log(
          `Razón áurea aproximada: ${razonAurea.toFixed(6)} (φ ≈ 1.618034)`
        );
      }
    }
  }
}

// Función principal para procesar la entrada del usuario
function procesarFibonacci() {
  rl.question(
    'Ingresa la cantidad de números de Fibonacci a generar: ',
    (respuesta) => {
      const cantidad = parseInt(respuesta);

      // Validar entrada
      if (isNaN(cantidad) || cantidad < 0) {
        console.log('❌ Error: Debes ingresar un número entero no negativo.');
        rl.close();
        return;
      }

      if (cantidad === 0) {
        console.log('📊 Secuencia vacía para cantidad = 0');
        rl.close();
        return;
      }

      console.log(
        `\n🔢 Generando ${cantidad} números de la secuencia de Fibonacci...`
      );

      // Método iterativo (eficiente)
      console.log('\n🚀 Usando método iterativo...');
      const inicioIterativo = performance.now();
      const secuenciaIterativa = fibonacciIterativo(cantidad);
      const finIterativo = performance.now();
      const tiempoIterativo = finIterativo - inicioIterativo;

      // mostrar la secuencia
      console.log('Secuencia:', secuenciaIterativa);
      console.log(`Tiempo de ejecución: ${tiempoIterativo.toFixed(4)} ms`);

      mostrarInformacionFibonacci(
        secuenciaIterativa,
        'Iterativo',
        tiempoIterativo
      );

      // Método recursivo (solo para números pequeños debido a la complejidad exponencial)
      if (cantidad <= 35) {
        console.log('\n🔄 Usando método recursivo (para comparación)...');
        const inicioRecursivo = performance.now();
        const secuenciaRecursiva = secuenciaFibonacciRecursiva(cantidad);
        const finRecursivo = performance.now();
        const tiempoRecursivo = finRecursivo - inicioRecursivo;

        mostrarInformacionFibonacci(
          secuenciaRecursiva,
          'Recursivo',
          tiempoRecursivo
        );

        // Comparación de rendimiento
        console.log('\n⚡ Comparación de rendimiento:');
        console.log(`Método iterativo: ${tiempoIterativo.toFixed(4)} ms`);
        console.log(`Método recursivo: ${tiempoRecursivo.toFixed(4)} ms`);
        console.log(
          `Diferencia: ${(tiempoRecursivo / tiempoIterativo).toFixed(
            2
          )}x más lento el recursivo`
        );
      } else {
        console.log(
          '\n⚠️  Método recursivo omitido para n > 35 (demasiado lento)'
        );
        console.log(
          '   La complejidad recursiva es O(2^n), mientras que la iterativa es O(n)'
        );
      }

      // Información educativa
      console.log('\n📚 Información sobre Fibonacci:');
      console.log('• La secuencia de Fibonacci comienza con 0, 1');
      console.log('• Cada número siguiente es la suma de los dos anteriores');
      console.log('• Fórmula: F(n) = F(n-1) + F(n-2)');
      console.log(
        '• Aparece frecuentemente en la naturaleza (espirales, flores, etc.)'
      );
      console.log(
        '• La razón entre números consecutivos tiende a φ (phi) ≈ 1.618034'
      );

      rl.close();
    }
  );
}

// Ejecutar el programa
procesarFibonacci();
