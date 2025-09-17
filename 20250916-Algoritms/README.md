# Simples ejercicios para recordar uso de algoritmos

## 01. Generar un arreglo de **n** elementos y guardar en un archivo. </br> **`01-createArray.js`**

1. Importo dos elementos:
```js
const readline = require('readline');
const fs = require('fs');
```
2. Pido por pantalla usando el `readline.createInterface`:
```js
// Crear interfaz para leer entrada del usuario
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});
```
3. Creo una función que hace uso del `rl` que cree como un _interface_ con el uso de una `question` y recibo una `respuesta`:
```js
// Solicitar la cantidad de elementos
rl.question('Ingresa la cantidad de números aleatorios a generar: ', (respuesta) => {
    const cantidad = parseInt(respuesta);
});
```
4. Valido que la cantidad sea un número válido, sino lo es pongo un mensaje, cierro el `rl` y salgo:
```js
    // Validar que sea un número válido
    if (isNaN(cantidad) || cantidad <= 0) {
        console.log('Error: Debes ingresar un número entero positivo.');
        rl.close();
        return;
    }
```
5. Creo la función `crearArrayAleatorio`, recibiendo de parámetro la `cantidad` que obtuve por pantalla:
```js
// Función para generar números aleatorios
function generarNumeroAleatorio(min = 1, max = 100) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

// Función para crear el array con números aleatorios
function crearArrayAleatorio(cantidad) {
    const array = [];
    for (let i = 0; i < cantidad; i++) {
        array.push(generarNumeroAleatorio());
    }
    return array;
}
```
6. Creo la función `guardarArray` que recibe de parámetro el `arreglo`:
```js
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
```
7. Ahora si, llamo las dos funciones dentro de `rl.question`, luego de la validación de `cantidad`:
```js
    // Crear el array con números aleatorios
    const arrayAleatorio = crearArrayAleatorio(cantidad);
    
    // Guardar el array en el archivo
    guardarArray(arrayAleatorio);
```

## 02. Ordenar un arreglo por tipo **Burbuja** o **Burbble**.</br> **`02-bubbleSort.js`**

>[!NOTE]
>
>**Características implementadas:**
>
>- Generación automática de un array de 20 números aleatorios (entre 1 y 100)
>- Implementación completa del algoritmo Bubble Sort con optimización (detección temprana si ya está ordenado)
>- Visualización detallada del proceso de ordenamiento paso a paso
>- Estadísticas de rendimiento (comparaciones e intercambios)
>- Verificación automática de que el array está correctamente ordenado
>
>**Funcionalidades del programa:**
>
>- Muestra el array original desordenado
>- Ejecuta el algoritmo Bubble Sort mostrando cada pasada
>- Indica cada intercambio realizado durante el proceso
>- Muestra el estado del array después de cada pasada
>- Proporciona estadísticas finales del algoritmo
>- Verifica que el resultado final esté correctamente ordenado
>
>**Resultado de la prueba:**
>
>- Array original: 20 números aleatorios desordenados
>- Proceso: 16 pasadas con optimización (se detuvo cuando no hubo más intercambios)
>- Estadísticas: 184 comparaciones y 74 intercambios
>- Resultado: Array correctamente ordenado de menor a mayor
>- Verificación: Confirmado que el ordenamiento es correcto
>
>El algoritmo Bubble Sort está completamente funcional y muestra de manera educativa cómo funciona el proceso de ordenamiento burbuja.
>


1. En dos funciones, creamos el arreglo aleatorio:
```js
// Función para generar números aleatorios
function generarNumeroAleatorio(min = 1, max = 100) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

// Función para crear un array con números aleatorios
function crearArrayAleatorio(cantidad) {
    const array = [];
    for (let i = 0; i < cantidad; i++) {
        array.push(generarNumeroAleatorio());
    }
    return array;
}
```
2. Ahora bien una función para el ordenamiento llamada `bubbleSort()` con el parámetro del arreglo, lo primero es clonar el arreglo en `arrayOrdenado` para trabajarlo:
```js
// Implementación del algoritmo Bubble Sort
function bubbleSort(arr) {
    // Crear una copia del array para no modificar el original
    const arrayOrdenado = [...arr];
}
```
3. Luego obtengo el total de elementos y creo dos variables para estadísticas:
```js
    const n = arrayOrdenado.length;
    let intercambios = 0;
    let comparaciones = 0;
```
4. Inicio un ciclo para recorrer todo el arreglo, el límite superior es `n - 1`:
```js
    // Bucle externo: controla el número de pasadas
    for (let i = 0; i < n - 1; i++) {
        let huboIntercambio = false;

    }
```
5. Dentro de este ciclo hacemos otro ciclo, desde el principio hasta este valor `n - i - 1` y aprovecho para incrementar las `comparaciones`:
```js
        // Bucle interno: compara elementos adyacentes
        for (let j = 0; j < n - i - 1; j++) {
            comparaciones++;

        }
```
6. Ahora hacemos el comparativo entre los elementos con el índice `j` vs `j + 1`, si el primero es mayor, procedemos al cambio entre esos dos:
```js
            // Comparar elementos adyacentes
            if (arrayOrdenado[j] > arrayOrdenado[j + 1]) {
                // Intercambiar elementos
                let temp = arrayOrdenado[j];
                arrayOrdenado[j] = arrayOrdenado[j + 1];
                arrayOrdenado[j + 1] = temp;
                
                // incremento intercambios y cambio estado
                intercambios++;
                huboIntercambio = true;
            }
```
7. Antes de cerrar el ciclo mayor, con el índice `i`, si `huboIntercambio` es falso, muestro que no fue necesario ordenar:
```js
        // Si no hubo intercambios, el array ya está ordenado
        if (!huboIntercambio) {
            console.log(`  No hubo intercambios. Array ya ordenado.`);
            break;
        }
```
8. Muestro después del ciclo las estadísticas y retorno el `arrayOrdenado`:
```js
    console.log(`\n--- Estadísticas ---`);
    console.log(`Total de comparaciones: ${comparaciones}`);
    console.log(`Total de intercambios: ${intercambios}`);
```
9. Ahora si creo la función `main()`, para llamar las funciones de `crearArrayAleatorio()` y `bubbleSort()`:
```js
// Programa principal
function main() {
  // Crear array de 20 números aleatorios
  console.log('\nGenerando array de 20 números aleatorios...');
  const arrayOriginal = crearArrayAleatorio(CANTIDAD);

  // Mostrar array original
  console.log(`📊 Array Original: [${arrayOriginal}]`);

  // Aplicar bubble sort
  console.log('\n🔄 Iniciando ordenamiento con Bubble Sort...');
  const arrayOrdenado = bubbleSort(arrayOriginal);

  // Mostrar array ordenado
  console.log(`✅ Array Ordenado: [${arrayOrdenado}]`);
}
```
10. Hago una validadación adicional con la función `every()` y valido que realmente si se hizo el ordenamiento:
```js
  // Verificar que el ordenamiento es correcto
  const estaOrdenado = arrayOrdenado.every(
    (val, i, arr) => i === 0 || arr[i - 1] <= val
  );
  console.log(
    `\n🔍 Verificación: El array ${
      estaOrdenado ? 'SÍ' : 'NO'
    } está correctamente ordenado.`
  );
```
11. Finalizo llamando la función `main()`:
```js
// Ejecutar el programa
main()
```

## 03. Ordenar un arreglo por tipo **Selección** o **Selection**.</br> **`03-selectionSort.js`**

>[!NOTE]
>
>**Funcionalidad implementada:**
>
>- Algoritmo completo de Selection Sort (ordenamiento por selección)
>- Generación automática de un array de 20 números aleatorios
>- Visualización detallada del proceso de ordenamiento paso a paso
>- Estadísticas de rendimiento (comparaciones e intercambios)
>- Verificación automática de que el array está correctamente ordenado
>
>**Características del algoritmo Selection Sort:**
>
>- En cada pasada, busca el elemento mínimo en la parte no ordenada del array
>- Intercambia el elemento mínimo encontrado con el primer elemento de la parte no ordenada
>- Muestra claramente cuándo encuentra un nuevo mínimo y cuándo realiza intercambios
>- Indica cuando un elemento ya está en su posición correcta
>
>**Resultado de la prueba:**
>
>- Array original: 20 números aleatorios desordenados
>- Proceso: 19 pasadas (n-1 para un array de 20 elementos)
>- Estadísticas: 190 comparaciones y 18 intercambios
>- Resultado: Array correctamente ordenado de menor a mayor
>- Verificación: Confirmado que el ordenamiento es correcto
>
>**Ventajas del Selection Sort mostradas:**
>
>- Número fijo de comparaciones: O(n²)
>- Número mínimo de intercambios: máximo n-1 intercambios
>- Algoritmo in-place (no requiere memoria adicional significativa)
>- Comportamiento predecible independiente del estado inicial del array
>
>La función `selectionSort()` está completamente implementada y funcional, mostrando de manera educativa cómo opera este algoritmo de ordenamiento.
>


1. Empezamos con dos funciones que son las que crean el arreglo aleatorio y una constante del número de elementos:
```js
const CANTIDAD = 20;

// Función para generar números aleatorios
function generarNumeroAleatorio(min = 1, max = 100) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

// Función para crear un array con números aleatorios
function crearArrayAleatorio(cantidad) {
  const array = [];
  for (let i = 0; i < cantidad; i++) {
    array.push(generarNumeroAleatorio());
  }
  return array;
}
```
2. La función `selectionSort()` con el parámetro del arreglo, simplemente lo clono en `arrayOrdenado`:
```js
// Implementación del algoritmo Selection Sort
function selectionSort(arr) {
  // Crear una copia del array para no modificar el original
  const arrayOrdenado = [...arr];
}
```
3. Obtengo la cantidad de elementos y dos variables para estadísticas del proceso:
```js
  const n = arrayOrdenado.length;
  let comparaciones = 0;
  let intercambios = 0;
```
4. Empiezo con el ciclo mayor para recorrer todo el arreglo y defino el `indiceMinimo`:
```js
  // Bucle externo: recorre cada posición del array
  for (let i = 0; i < n - 1; i++) {
    // Encontrar el índice del elemento mínimo en la parte no ordenada
    let indiceMinimo = i;
  }
```
5. Hago otro ciclo que recorre desde `i + 1`, hasta el final del arreglo, para hallar un valor menor y asignar el nuevo valor a `indiceMinimo`:
```js
    // Buscar el elemento mínimo en la parte no ordenada
    for (let j = i + 1; j < n; j++) {
      comparaciones++;
      if (arrayOrdenado[j] < arrayOrdenado[indiceMinimo]) {
        indiceMinimo = j;
        console.log(`    Nuevo mínimo encontrado: ${arrayOrdenado[j]} en posición ${j}`);
      }
    }
```
6. Pregunto si `indiceMinimo` es diferente a `i`, hago el intercambio:
```js
    // Si se encontró un elemento menor, intercambiar
    if (indiceMinimo !== i) {
      // Intercambiar elementos
      let temp = arrayOrdenado[i];
      arrayOrdenado[i] = arrayOrdenado[indiceMinimo];
      arrayOrdenado[indiceMinimo] = temp;
      
      intercambios++; // Valor meramente estadísitico
      
    } 
```
7. Despues de cerrar el ciclo mayor , muestro estadísticas y retornamos el `arrayOrdenado`:
```js
  console.log(`\n--- Estadísticas ---`);
  console.log(`Total de comparaciones: ${comparaciones}`);
  console.log(`Total de intercambios: ${intercambios}`);
  
  return arrayOrdenado;
```
8. Hago el método `main()`, llamando las dos funciones `crearArrayAleatorio()` y `selectionSort()`:
```js
// Programa principal
function main() {
  // Crear array de `CANTIDAD` números aleatorios
  const arrayOriginal = crearArrayAleatorio(CANTIDAD);

  // Aplicar selection sort
  const arrayOrdenado = selectionSort(arrayOriginal);

  // Mostrar array ordenado
  console.log(`✅ Array Ordenado: [${arrayOrdenado}]`);
```
9. Dentro de `main()` hago la validación de que el arreglo si esté ordenado:
```js
  // Verificar que el ordenamiento es correcto
  const estaOrdenado = arrayOrdenado.every(
    (val, i, arr) => i === 0 || arr[i - 1] <= val
  );
  console.log(
    `\n🔍 Verificación: El array ${
      estaOrdenado ? 'SÍ' : 'NO'
    } está correctamente ordenado.`
  );
```
10. Llamo la función `main()`.


## 04. Ordenar un arreglo por tipo **Inserción** o **Insertion**. </br> **`04-insertionSort.js`**

1. Empezamos con dos funciones que son las que crean el arreglo aleatorio y una constante del número de elementos:
```js
const CANTIDAD = 20;

// Función para generar números aleatorios
function generarNumeroAleatorio(min = 1, max = 100) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

// Función para crear un array con números aleatorios
function crearArrayAleatorio(cantidad) {
  const array = [];
  for (let i = 0; i < cantidad; i++) {
    array.push(generarNumeroAleatorio());
  }
  return array;
}
```
2. La función `insertionSort()` con el parámetro del arreglo, simplemente lo clono en `arrayOrdenado`:
```js
// Implementación del algoritmo Insertion Sort
function insertionSort(arr) {
  // Crear una copia del array para no modificar el original
  const arrayOrdenado = [...arr];
}
```
3. Obtengo la cantidad de elementos y dos variables para estadísticas del proceso:
```js
  const n = arrayOrdenado.length;
  let comparaciones = 0;
  let intercambios = 0;
```
4. Empiezo con el ciclo mayor para recorrer todo el arreglo empezando en la posición segunda, asigno a `elementoActual` lo que hay en `ì` e inicializo a `j`:
```js  // Comenzar desde el segundo elemento (índice 1)
  for (let i = 1; i < n; i++) {
    const elementoActual = arrayOrdenado[i];
    let j = i - 1; // Índice del elemento anterior
  }
```
5. Ciclo mientras `j >= 0` y `arrayOrdenado[j] > elementoActual`, y el ciclo es llendo hacia atrás o `j--`:
```js
    // Mover elementos mayores hacia la derecha
    while (j >= 0 && arrayOrdenado[j] > elementoActual) {
      comparaciones++;
      console.log(`    Comparando ${arrayOrdenado[j]} > ${elementoActual}: verdadero, desplazando ${arrayOrdenado[j]} hacia la derecha`);
      
      arrayOrdenado[j + 1] = arrayOrdenado[j];
      desplazamientos++; // Valor meramente estadísitico
      j--;
    }
```
6. Por estadísticas si `j >= 0`, es que hubo `comparaciones`:
```js
    // Si j >= 0, significa que hicimos una comparación más
    if (j >= 0) {
      comparaciones++; // Valor meramente estadísitico
    }
```
7. En la posición `j` ponemos el valor de `elementoActual`:
```js
    // Insertar el elemento en su posición correcta
    arrayOrdenado[j + 1] = elementoActual;
```
8. Mostramos las estadísticas y retornamos `arrayOrdenado`, luego de cerrar el ciclo mayor:
```js
  console.log(`\n--- Estadísticas ---`);
  console.log(`Total de comparaciones: ${comparaciones}`);
  console.log(`Total de desplazamientos: ${desplazamientos}`);
  
  return arrayOrdenado;
```
9. Hago el método `main()`, llamando las dos funciones `crearArrayAleatorio()` y `insertionSort()`:
```js
// Programa principal
function main() {
  // Crear array de `CANTIDAD` números aleatorios
  const arrayOriginal = crearArrayAleatorio(CANTIDAD);

  // Aplicar insertion sort
  const arrayOrdenado = insertionSort(arrayOriginal);

  // Mostrar array ordenado
  console.log(`✅ Array Ordenado: [${arrayOrdenado}]`);
```
10. Dentro de `main()` hago la validación de que el arreglo si esté ordenado:
```js
  // Verificar que el ordenamiento es correcto
  const estaOrdenado = arrayOrdenado.every(
    (val, i, arr) => i === 0 || arr[i - 1] <= val
  );
  console.log(
    `\n🔍 Verificación: El array ${
      estaOrdenado ? 'SÍ' : 'NO'
    } está correctamente ordenado.`
  );
```
11. Llamo la función `main()`.


## 05. Ordenar un arreglo por tipo **Mezcla** o **Merge**. </br> **`05-mergeSort.js`**

>[!NOTE]
>
>**Funcionalidad implementada:**
>
>- Algoritmo completo de Insertion Sort (ordenamiento por inserción)
>- Generación automática de un array de 20 números aleatorios
>- Visualización detallada del proceso de ordenamiento paso a paso
>- Estadísticas de rendimiento (comparaciones y desplazamientos)
>- Verificación automática de que el array está correctamente ordenado
>
>**Características del algoritmo Insertion Sort:**
>
>- Comienza desde el segundo elemento (índice 1) y va insertando cada elemento en su posición correcta dentro de la parte ya ordenada
>- Muestra claramente la parte ordenada vs el elemento a insertar en cada pasada
>- Desplaza elementos mayores hacia la derecha para hacer espacio al elemento actual
>- Indica cuándo un elemento ya está en su posición correcta
>
>**Resultado de la prueba:**
>
>- Array original: 20 números aleatorios desordenados
>- Proceso: 19 pasadas (desde índice 1 hasta n-1)
>- Estadísticas: 124 comparaciones y 109 desplazamientos
>- Resultado: Array correctamente ordenado de menor a mayor
>- Verificación: Confirmado que el ordenamiento es correcto
>
>**Ventajas del Insertion Sort mostradas:**
>
>- Eficiente para arrays pequeños o parcialmente ordenados
>- Algoritmo estable (mantiene el orden relativo de elementos iguales)
>- Algoritmo in-place (requiere solo O(1) memoria adicional)
>- Adaptativo: mejor rendimiento en arrays ya parcialmente ordenados
>
>La función `insertionSort()` está completamente implementada y funcional, mostrando de manera educativa cómo opera este algoritmo de ordenamiento que simula la forma natural de ordenar cartas en la mano.
>


1. Empezamos con dos funciones que son las que crean el arreglo aleatorio y una constante del número de elementos:
```js
const CANTIDAD = 20;

// Función para generar números aleatorios
function generarNumeroAleatorio(min = 1, max = 100) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

// Función para crear un array con números aleatorios
function crearArrayAleatorio(cantidad) {
  const array = [];
  for (let i = 0; i < cantidad; i++) {
    array.push(generarNumeroAleatorio());
  }
  return array;
}
```
2. La función `insertionSort()` con el parámetro del arreglo, simplemente lo clono en `arrayOrdenado` y obtengo el largo de `arrayOrdenado`:
```js
// Implementación del algoritmo Insertion Sort
function insertionSort(arr) {
  // Crear una copia del array para no modificar el original
  const arrayOrdenado = [...arr];
  const n = arrayOrdenado.length;
}
```
3. Simplemente miro si el valor de `n` es menor o igual a `1`, devuelvo el `arrayOrdenado`:
```js
  if (n <= 1) {
    return arrayOrdenado;
  }
```
4. Llamo una función por crear de nombre `mergeSortRecursivo()`, con los parámetros de `arrayOrdenado`, `0`, y `n - 1`: </br> `const totalComparaciones = mergeSortRecursivo(arrayOrdenado, 0, n - 1);`
5. Creamos la función `mergeSortRecursivo()`, con los parámetros de un arreglo, el lado `ladoIzquierdo`, `ladoDerecho` y un `nivel` iniciado en `0`:
```js
// Función recursiva principal de Merge Sort
function mergeSortRecursivo(arr, ladoIzquierdo, ladoDerecho, nivel = 0) {
  let totalComparaciones = 0; // Valor meramente estadísitico
}
```
6. Hallamos el punto `medio`, con base la comparación del `ladoIzquierdo` sea menor al `ladoDerecho`:
```js
  if (ladoIzquierdo < ladoDerecho) {
    const medio = Math.floor((ladoIzquierdo + ladoDerecho) / 2);
  }
```
7. Dentro de esa misma condición llamo de forma recursiva esta misma función `mergeSortRecursivo()` dos veces:
```js
    // Ordenar recursivamente las dos mitades
    totalComparaciones += mergeSortRecursivo(arr, ladoIzquierdo, medio, nivel + 1);
    totalComparaciones += mergeSortRecursivo(arr, medio + 1, ladoDerecho, nivel + 1);
```
8. En la misma condición llamo la función por crear de nombre `merge()` enviando de parámetros lo siguiente: `arr`, `ladoIzquierdo`, `medio`, `ladoDerecho`, y `nivel`: </br> `merge(arr, ladoIzquierdo, medio, ladoDerecho, nivel);`
9. Creo la función `merge()`, con los siguiente parámetros, el arreglo, el `ladoIzquierdo`, el valor `medio`,  el `ladoDerecho`, y el `nivel`  iniciado en  `0`:
```js
function merge(arr, ladoIzquierdo, medio, ladoDerecho, nivel = 0) {
}
```
10. Declaramos dos arreglos temporales que son las mitades:
```js
  // Crear arrays temporales para las dos mitades
  const izqArray = arr.slice(ladoIzquierdo, medio + 1);
  const derArray = arr.slice(medio + 1, ladoDerecho + 1);
```
11. Creamos tres variables para hacer recorrido en ambos arreglos `izqArray` y `derArray`:
```js
  let i = 0, j = 0, k = ladoIzquierdo;
```
12. Ahora si empezamos con un ciclo mientras tanto la `i`, como `j`, sean menores de cada arreglo que se asocian:
```js
  // Mezclar los arrays temporales de vuelta al array original
  while (i < izqArray.length && j < derArray.length) {
  }
```
13. Un condicional si el lado `izqArray[i]` es menor o igual a `derArray[j]`  se carga el `arr` (que viene como parámetro y está enlazado al valor de `arrayOrdenado`) con el valor de `izqArray[i]`, en caso contrario se carga el `arr` con el valor de `derArray[j]`:
```js
  // Mezclar los arrays temporales de vuelta al array original
  while (i < izqArray.length && j < derArray.length) {
    comparaciones++; // Valor meramente estadísitico
    if (izqArray[i] <= derArray[j]) {
      arr[k] = izqArray[i];
      i++;
    } else {
      arr[k] = derArray[j];
      j++;
    }
    k++;
  }
```
14. Cargamos al `arr` con los valores restantes de `izqArray[i]`:
```js
  // Copiar elementos restantes del array izquierdo
  while (i < izqArray.length) {
    arr[k] = izqArray[i];
    console.log(`${indent}  Restante izquierdo: ${izqArray[i]}`);
    i++;
    k++;
  }
```
15. Cargamos al `arr` con los valores restantes de `derArray[j]`:
```js
  // Copiar elementos restantes del array derecho
  while (j < derArray.length) {
    arr[k] = derArray[j];
    console.log(`${indent}  Restante derecho: ${derArray[j]}`);
    j++;
    k++;
  }
```
16. Ahora si desde el método `main()`, llamamos las dos funciones `crearArrayAleatorio` y `mergeSort`:
```js
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
}
```
17. Hacemos la validación de que se esté ordenado:
```js
  // Verificar que el ordenamiento es correcto
  const estaOrdenado = arrayOrdenado.every(
    (val, i, arr) => i === 0 || arr[i - 1] <= val
  );
  console.log(
    `\n🔍 Verificación: El array ${
      estaOrdenado ? 'SÍ' : 'NO'
    } está correctamente ordenado.`
  );
```
18. Por último llamamos la función `main()`.


>[!TIP]
>
>### Crear una utilidad para tener un arreglo aleatorio
>
> 1. Creo la carpeta **"utils"**
> 2. Dentro creo el archivo **`randomArray.js`**.
> 3. Con este código:
> ```js
>// Función para generar números aleatorios
>const generarNumeroAleatorio = (min = 1, max = 100) => {
>  return Math.floor(Math.random() * (max - min + 1)) + min;
>};
>
>// Función para crear un array con números aleatorios
>export const crearArrayAleatorio = (cantidad = 20) => {
>  const array = [];
>  for (let i = 0; i < cantidad; i++) {
>    array.push(generarNumeroAleatorio());
>  }
>  return array;
>};
> ```
> 4. En los anteriores archivos hago la importación:
> ```js
>const { crearArrayAleatorio } = require('./utils/randomArray.js');
> ```
> 5. Borro las dos funciones `generarNumeroAleatorio()` y `crearArrayAleatorio()`
> 6. Listo, esto debe trabajar como siempre.

## 06. Repetir el ejercicio de **Mezcla** o **Merge**. </br> **`06-mergeSort.js`**


1. Obtengo un arreglo aleatorio, llamando la función de `utils` de nombre `crearArrayAleatorio()` , dentro de `arrayBase`: </br> `const arrayBase = crearArrayAleatorio(CANTIDAD);`
2. En la función `quickSort()` con el parámetro de un arreglo: </br> `function quickSort(arr) {`</br>`}`
3. Obtengo el valor del medio `pivot`: </br> `let pivot = arr[Math.floor(arr.length / 2)];`
4. Llevo la mitad del arreglo izquierdo a `left`: </br> `let left = arr.filter((x) => x < pivot);`
5. Llevo la mitad del arreglo derecho a `right`: </br> `let right = arr.filter((x) => x > pivot);`
6. Devuelvo valores haciendo recursividad a la función `quickSort()`: </br> `return [...quickSort(left), pivot, ...quickSort(right)];`
7. Llamo la función `quickSort()` con el parámetro `arrayBase`: </br> `const arrayOrdenado = quickSort(arrayBase);`
8. Muestro el arreglo ordenado (_aunque con errores_): </br> `console.log('✅ Array Ordenado: [' + arrayOrdenado + ']'); `


## 07. Listas enlazadas conla _class_ `Node`. </br> **`07-linkedList.js`**

1. creo una _class_ para estructurar de nombre `Node`, este con un `constructor` que recibe un `value` y dos atributos, el valor `actual` y el `nextTo`:
```js
class Node {
  constructor(value) {
    this.actual = value;
    this.nextTo = null;
  }
}
```
2. Creo otra clase que va a llevar los métodos de `add()`, `remove()`, `print()` e inicia con un `constructor` con la atributo `header`:
```js
class LinkedList {
  constructor() {
    this.header = null;
  }

  add(value) {
  }

  remove(value) {
  }

  print() {
  }
}
```
3. **El método `add(value)`**: </br> Creo la constante `node` e instanciamos la _class_ `Node`:
```js
    const node = new Node(value);
```
4. Preguntamos si el `header` está vacío, entonces asignamos de una vez el `value`:
```js
    if (!this.header) {
      this.header = node;
    }
```
5. El sino de esta condicional cremos la variable `current` y le asignamos el valor del `header`:
```js
    else {
      let current = this.header;
    }
```
6. Hacemos un ciclo mientras `current.nextTo` exista o no sea vacío:
```js
    else {
      let current = this.header;
      while (current.nextTo) {
        current = current.nextTo;
      }
    }
```
7. Al finalizar el ciclo asigno el valor de `node` (que proviene del `value`) a `current.nextTo`:
```js
    else {
      let current = this.header;
      while (current.nextTo) {
        current = current.nextTo;
      }
      current.nextTo = node;
    }
```
8. **El método `remove(value)`**: </br> Si de entrada el valor de `header` es vacío o no existe, se sale:
```js
    if (!this.header) {
      return;
    }
```
9. Si el `header.actual` es igual al `value`, entonces al `header` le asigno el valor de `header.nextTo`:
```js
    if (this.header.actual === value) {
      this.header = this.header.nextTo;
      return;
    }
```
10. Asigno el `header` a la variable `current`:
```js
    let current = this.header;
```
11. Hacemos un ciclo mientras `current.nextTo` exista o no sea vacío:
```js
    while (current.nextTo) {
    }
```
12. Hago similar condicional del paso 9, cambiando `header.actual` por `current.nextTo.actual`: </br> Si el ~~header.actual~~ `current.nextTo.actual` es igual al `value`, entonces al ~~header~~ `current.nextTo` le asigno el valor de ~~header.nextTo~~ `current.nextTo.nextTo`:
```js
      if (current.nextTo.actual === value) {
        current.nextTo = current.nextTo.nextTo;
        return;
      }
```
13. Para que avance el ciclo a `current`, le asigno el valor siguiente que es `current.nextTo`:
```js
      current = current.nextTo;
```
14. **El método `print()`**: </br> Empiezo asignando a la variable `current`, lo que tiene `header`:
```js
    let current = this.header;
```
15. Hacemos un ciclo mientras exista el valor en `current`, que muestre el valor de `current.actual` y para que avence como en el paso 13 a `current`, le asigno el valor siguiente que es `current.nextTo`:
```js
  print() {
    let current = this.header;
    while (current) {
      console.log(current.actual);
      current = current.nextTo;
    }
  }
```
16. Ahora simplemente instanciamos la _class_ `LinkedList()` en la constante `list` y hago algunos procesos e imprimo el resultado:
```js
const list = new LinkedList();
list.add(1);
list.add(5);
list.add(2);
list.add(3);
list.add(6);
list.remove(2);
list.print();
```
17. Este es el resultado esperado:
```dos
1
5
3
6
```


