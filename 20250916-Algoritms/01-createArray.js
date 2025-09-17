const readline = require('readline');
const fs = require('fs');
const { crearArrayAleatorio } = require('./utils/randomArray.js');


// Crear interfaz para leer entrada del usuario
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

console.log('=== Generador de Array con Números Aleatorios ===');

// // Función para generar números aleatorios
// function generarNumeroAleatorio(min = 1, max = 100) {
//     return Math.floor(Math.random() * (max - min + 1)) + min;
// }

// // Función para crear el array con números aleatorios
// function crearArrayAleatorio(cantidad) {
//     const array = [];
//     for (let i = 0; i < cantidad; i++) {
//         array.push(generarNumeroAleatorio());
//     }
//     return array;
// }

// Función para guardar el array en archivo
function guardarArray(arreglo) {
    const arrayTexto = JSON.stringify(arreglo, null, 0);
    
    fs.writeFile('array.txt', arrayTexto, 'utf8', (err) => {
        if (err) {
            console.error('Error al guardar el archivo:', err);
        } else {
            console.log('\n✅ Array guardado exitosamente en "array.txt"');
            console.log('Contenido del archivo:');
            console.log(arrayTexto);
        }
        rl.close();
    });
}

// Solicitar la cantidad de elementos
rl.question('Ingresa la cantidad de números aleatorios a generar: ', (respuesta) => {
    const cantidad = parseInt(respuesta);
    
    // Validar que sea un número válido
    if (isNaN(cantidad) || cantidad <= 0) {
        console.log('Error: Debes ingresar un número entero positivo.');
        rl.close();
        return;
    }
    
    console.log(`\nGenerando ${cantidad} números aleatorios...`);
    
    // Crear el array con números aleatorios
    const arrayAleatorio = crearArrayAleatorio(cantidad);
    
    console.log('\n=== Array generado ===');
    console.log('Números aleatorios:', arrayAleatorio);
    console.log('Total de elementos:', arrayAleatorio.length);
    
    // Guardar el array en el archivo
    guardarArray(arrayAleatorio);
});
