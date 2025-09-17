const readline = require('readline');

// Crear interfaz para leer entrada del usuario
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

console.log('=== Generador del Triángulo de Pascal ===');

// Función para calcular el coeficiente binomial C(n, k) = n! / (k! * (n-k)!)
function coeficienteBinomial(n, k) {
    if (k === 0 || k === n) return 1;
    if (k > n) return 0;
    
    // Optimización: usar la propiedad C(n, k) = C(n, n-k)
    if (k > n - k) k = n - k;
    
    let resultado = 1;
    for (let i = 0; i < k; i++) {
        resultado = resultado * (n - i) / (i + 1);
    }
    
    return Math.round(resultado);
}

// Función para generar una fila del triángulo de Pascal
function generarFila(numeroFila) {
    const fila = [];
    for (let k = 0; k <= numeroFila; k++) {
        fila.push(coeficienteBinomial(numeroFila, k));
    }
    return fila;
}

// Función para generar el triángulo de Pascal completo
function generarTrianguloPascal(numFilas) {
    const triangulo = [];
    for (let i = 0; i < numFilas; i++) {
        triangulo.push(generarFila(i));
    }
    return triangulo;
}

// Función para calcular el ancho máximo necesario para formatear
function calcularAnchoMaximo(triangulo) {
    let maxNumero = 0;
    for (const fila of triangulo) {
        for (const numero of fila) {
            if (numero > maxNumero) {
                maxNumero = numero;
            }
        }
    }
    return maxNumero.toString().length;
}

// Función para mostrar el triángulo de Pascal con formato visual
function mostrarTrianguloVisual(triangulo) {
    const anchoMaximo = calcularAnchoMaximo(triangulo);
    const numFilas = triangulo.length;
    
    console.log('\n--- Triángulo de Pascal (Formato Visual) ---');
    
    for (let i = 0; i < numFilas; i++) {
        const fila = triangulo[i];
        
        // Calcular espacios para centrar la fila
        const espaciosIniciales = ' '.repeat((numFilas - i - 1) * (anchoMaximo + 1));
        
        // Formatear cada número en la fila
        const filaFormateada = fila.map(num => 
            num.toString().padStart(anchoMaximo, ' ')
        ).join(' '.repeat(anchoMaximo > 1 ? 1 : 2));
        
        console.log(`${espaciosIniciales}${filaFormateada}`);
    }
}

// Función para mostrar el triángulo en formato tabular
function mostrarTrianguloTabular(triangulo) {
    console.log('\n--- Triángulo de Pascal (Formato Tabular) ---');
    console.log('Fila | Elementos');
    console.log('-----|' + '-'.repeat(50));
    
    for (let i = 0; i < triangulo.length; i++) {
        const filaStr = `[${triangulo[i].join(', ')}]`;
        console.log(`${i.toString().padStart(3)} | ${filaStr}`);
    }
}

// Función para mostrar propiedades matemáticas del triángulo
function mostrarPropiedadesMatematicas(triangulo) {
    console.log('\n--- Propiedades Matemáticas ---');
    
    // Suma de cada fila (potencias de 2)
    console.log('Suma de cada fila (potencias de 2):');
    for (let i = 0; i < Math.min(triangulo.length, 10); i++) {
        const suma = triangulo[i].reduce((acc, num) => acc + num, 0);
        console.log(`  Fila ${i}: ${suma} = 2^${i}`);
    }
    
    if (triangulo.length > 10) {
        console.log(`  ... (mostrando solo las primeras 10 filas)`);
    }
    
    // Números triangulares (suma de elementos en las diagonales)
    if (triangulo.length >= 3) {
        console.log('\nNúmeros triangulares (diagonal izquierda):');
        for (let i = 0; i < Math.min(triangulo.length, 8); i++) {
            if (i < triangulo.length && triangulo[i].length > 1) {
                console.log(`  T${i} = ${triangulo[i][1] || 0}`);
            }
        }
    }
    
    // Simetría
    console.log('\nPropiedades:');
    console.log('• Cada fila es simétrica');
    console.log('• Cada elemento es la suma de los dos elementos superiores');
    console.log('• La suma de la fila n es 2^n');
    console.log('• Los elementos representan coeficientes binomiales C(n,k)');
    console.log('• Aparece en expansiones binomiales: (a+b)^n');
}

// Función para validar si el triángulo es correcto
function validarTriangulo(triangulo) {
    console.log('\n--- Validación ---');
    
    let esValido = true;
    
    // Verificar que cada fila tenga el número correcto de elementos
    for (let i = 0; i < triangulo.length; i++) {
        if (triangulo[i].length !== i + 1) {
            console.log(`❌ Error: La fila ${i} debería tener ${i + 1} elementos, pero tiene ${triangulo[i].length}`);
            esValido = false;
        }
    }
    
    // Verificar simetría
    for (let i = 0; i < triangulo.length; i++) {
        const fila = triangulo[i];
        for (let j = 0; j < fila.length; j++) {
            if (fila[j] !== fila[fila.length - 1 - j]) {
                console.log(`❌ Error: La fila ${i} no es simétrica`);
                esValido = false;
                break;
            }
        }
    }
    
    // Verificar suma de filas (potencias de 2)
    for (let i = 0; i < Math.min(triangulo.length, 10); i++) {
        const suma = triangulo[i].reduce((acc, num) => acc + num, 0);
        const esperado = Math.pow(2, i);
        if (suma !== esperado) {
            console.log(`❌ Error: La suma de la fila ${i} es ${suma}, debería ser ${esperado}`);
            esValido = false;
        }
    }
    
    if (esValido) {
        console.log('✅ El triángulo de Pascal es válido y correcto');
    }
    
    return esValido;
}

// Función principal para procesar la entrada del usuario
function procesarTrianguloPascal() {
    rl.question('Ingresa el número de filas del triángulo de Pascal a generar: ', (respuesta) => {
        const numFilas = parseInt(respuesta);
        
        // Validar entrada
        if (isNaN(numFilas) || numFilas < 0) {
            console.log('❌ Error: Debes ingresar un número entero no negativo.');
            rl.close();
            return;
        }
        
        if (numFilas === 0) {
            console.log('📊 Triángulo vacío para 0 filas');
            rl.close();
            return;
        }
        
        if (numFilas > 20) {
            console.log('⚠️  Advertencia: Números grandes pueden ser difíciles de visualizar');
        }
        
        console.log(`\n🔺 Generando triángulo de Pascal con ${numFilas} filas...`);
        
        // Generar el triángulo
        const inicio = performance.now();
        const triangulo = generarTrianguloPascal(numFilas);
        const fin = performance.now();
        const tiempoEjecucion = fin - inicio;
        
        // Mostrar resultados
        if (numFilas <= 15) {
            mostrarTrianguloVisual(triangulo);
        }
        
        mostrarTrianguloTabular(triangulo);
        mostrarPropiedadesMatematicas(triangulo);
        validarTriangulo(triangulo);
        
        console.log(`\n⏱️  Tiempo de generación: ${tiempoEjecucion.toFixed(4)} ms`);
        console.log(`📊 Total de elementos generados: ${triangulo.reduce((acc, fila) => acc + fila.length, 0)}`);
        
        // Información educativa
        console.log('\n📚 Información sobre el Triángulo de Pascal:');
        console.log('• Nombrado por Blaise Pascal (siglo XVII)');
        console.log('• Cada número es la suma de los dos números superiores');
        console.log('• Los elementos son coeficientes binomiales C(n,k)');
        console.log('• Útil en combinatoria, probabilidad y álgebra');
        console.log('• Aparece en la expansión de (a+b)^n');
        console.log('• Contiene secuencias famosas: números triangulares, Fibonacci, etc.');
        
        rl.close();
    });
}

// Ejecutar el programa
procesarTrianguloPascal();
