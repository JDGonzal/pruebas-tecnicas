// Escribe las soluciones en el archivo `solutions/index.js` manteniendo el nombre de las funciones y sus `export`. Usa `ESModules` en tu proyecto de Node.js

// 1 - Arregla esta función para que el código posterior funcione como se espera:
//Ejercicio-1 (00:08:31)
import net from 'node:net'

// falta añadir un `callbak`
// export const ping = (ip) => {
export const ping = (ip, callbak) => {
  const startTime = process.hrtime()

  const client = net.connect({ port: 80, host: ip }, () => {
    client.end()
    //? Quitamos este `return` que no devuelve nada y se cambia por un callback
    // return { time: process.hrtime(startTime), ip }
    //! se pasa 1° `error` es el `null`y 2° la info a mostrar
    callbak(null, { time: process.hrtime(startTime), ip })
  })

  client.on('error', (err) => {
    //? Quitamos el `throw` que acá no sirve para nada
    // throw err
    client.end()
    //! Se añade un `callback` para pasar el error
    callbak(err)
  })
}

ping('midu.dev', (err, info) => {
  if (err) console.error(err)
  // Debería retornar el tiempo de respuesta a un `ping`
  // console.log(info) => Falta un `else` para mostar la info
  else console.log(info)
})

//* Para este primer ejercicio solo corrí en la Terminal este comando:
// node .\solutions\index.js
//* Y mi respuesta es similar a esta: { time: [ 0, 243854200 ], ip: 'midu.dev' }

// Ejercicio-2
// 2 - Transforma la siguiente función para que funcione con promesas en lugar de callbacks:
// 00:20:11
//? Primero: quitamos el `callback`
export function obtenerDatosPromise(/*callback*/) {
  //! Devolvemos una promesa con `new Promisse(()=>{})
  return new Promise((resolve, reject) => {
    //? Movemos el `SetTimeout` dentro de la promesa
    setTimeout(() => {
      //? Cambiamos el `callback` por el `resolve`
      //? el `null`q era el error el callback se quita
      /*callback*/resolve(/*null,*/ { data: 'datos importantes' });
    }, 2000);
  })
}

// Ejercicio-3
// 3 
// a- Explica qué hace la funcion. 
// b- Identifica y corrige los errores en el siguiente código. 
// c- Si ves algo innecesario, elimínalo. 
// d- Luego mejoralo para que siga funcionando con callback y luego haz lo que consideres para mejorar su legibilidad.
// 00:27:34
//!Añadimos el `import fs from 'fs'`
import fs from 'node:fs' //* fs -> file system
//! Falta pasarle el `callback`en los paréntesis al inicio de la función
// export function procesarArchivo() {
export function procesarArchivo(callback) {
  fs.readFile('input.txt', 'utf8', (error, contenido) => {
    if (error) {
      console.error('Error leyendo archivo:', error.message);
      //? Quitamos este `return false` y 
      // return false; //? ❌
      //! Ponemos un callback con el error
      callback(error)
    }

    //? Quitamos el `setTimeout`
    // setTimeout(() => {
    const textoProcesado = contenido.toUpperCase();

    fs.writeFile('output.txt', textoProcesado, error => {
      if (error) {
        console.error('Error guardando archivo:', error.message);
        //? Quitamos este `return false` y 
        // return false; //? ❌ Está dentro del ámbito de la función, desde fuera no vamos a ser capaces de llegar a este `return false`.
        //! Ponemos un callback con el error
        callback(error)
      }

      console.log('Archivo procesado y guardado con éxito');
      //? Quitamos este `return true` y 
      // return true
      //! Ponemos un callback sin error, con `null`
      callback(null)
    });
    //? Quitamos el `setTimeout`
    // }, 1000);
  });
}

// Ejercicio-3
//* Mejorando la legibilidad, pasándolo a `async`, `await`.
//? Quitaría los `callbacks` y
//! Añadimos el `async`
export async function procesarArchivoPromise(/*callback*/) {
  //! Definimos `contenido` por fuera
  let contenido = '';
  //* Añadimos a cada `readFile` y `writeFile` un try-catch
  try {
    //! se lee el archivo por `promises`, llevándolo a `contenido` con un `await`
    contenido = await fs.promises.readFile('input.txt', 'utf8');
  } catch (error) {
    console.error('Error leyendo archivo:', error.message);
    throw (error)
  }

  //! Se hace lo del `textoProcesado`
  const textoProcesado = contenido.toUpperCase();
  try {
    //! Por último la grabación del archivo por `promises`, con un `await`
    await fs.promises.writeFile('output.txt', textoProcesado);
  } catch (error) {
    console.error('Error guardando archivo:', error.message);
    throw (error)
  }

  //? Lo demás no se requiere
  // fs.readFile('input.txt', 'utf8', (error, contenido) => {
  //   if (error) {
  //     console.error('Error leyendo archivo:', error.message);
  //     callback(error)
  //   }

  //   fs.writeFile('output.txt', textoProcesado, error => {
  //     if (error) {
  //       console.error('Error guardando archivo:', error.message);
  //       callback(error)
  //     }

  //     console.log('Archivo procesado y guardado con éxito');
  //     callback(null)
  //   });

  // });
}

// Ejercicio-4
// 4 - ¿Cómo mejorarías el siguiente código y por qué? Arregla los tests si es necesario:
// 00:45:27
//* Lo primero es q los `readFileSync` son lecturas sincrónicas y demoran mas
//! Están mal escritos es `readFileSync` en vez vez `readSync`
//? Quitamos esta linea ya q el `fs` esta importado mucho antes
// import fs from 'node:fs';
//! A la función se le añade el `async`
// export function leerArchivos() {
export async function leerArchivos() {
  //! Añadimos un await para cada archivo y `promises` al `fs` 
  const archivo1 = await fs.promises.readFile('archivo1.txt', 'utf8');
  const archivo2 = await fs.promises.readFile('archivo2.txt', 'utf8');
  const archivo3 = await fs.promises.readFile('archivo3.txt', 'utf8');

  return await `${archivo1} ${archivo2} ${archivo3}`
}
// el llamado de la función sobra ya q lo hace desde el archivo "index.test.js".
// leerArchivos();

// Ejercicio-4 
// 4 - Una mejora haciendo una lectura en paralelo
export async function leerArchivosParalelo() {
  //! Añadimos un `Promise.all` y lo llevamos a un arreglo de variables
  // const [archivo1, archivo2, archivo3] = await Promise.all([
  //! Hay una mejor opción con `Promise.allSettled`
  const [archivo1, archivo2, archivo3] = await Promise.allSettled([
    fs.promises.readFile('archivo1.txt', 'utf8'),
    fs.promises.readFile('archivo2.txt', 'utf8'),
    fs.promises.readFile('archivo3.txt', 'utf8'),
  ])
    //! añadimo una toma de errores usando `catch`
    .catch((err) => {
      console.log(err);
      return [];
    })
  //? este es cuando se usa el `Promise.all`
  // return `${archivo1} ${archivo2} ${archivo3}`
  //! Debe retornarse de cada uno el `.value`
  return `${archivo1.value} ${archivo2.value} ${archivo3.value}`
}

// Ejercicio-5
// 5 - Escribe una funcion `delay` que retorne una promesa que se resuelva después de `n` milisegundos. 
// 01:01:26
//! Adicionamos un parámetro para el tiempo lo llamaremos `time`
export async function delay(time) {
  //! Devolvemos una promesa
  return new Promise((resolve, reject) => {
    //! Ponemos el `setTimeout` y dentro se hace el `resolve`
    setTimeout(() => {
      resolve(`esperando:${time / 1000} segundos`);
    }, time);
  })
}
