# Elimina el Fondo de Cualquier Imagen con Node.js y Javascript

[![Elimina el Fondo de Cualquier Imagen con Node.js y Javascript](images/2025-04-25_%20184055.png "Elimina el Fondo de Cualquier Imagen con Node.js y Javascript")](https://www.youtube.com/watch?v=kNfozI7Mbbs)

## 0. Precondiciones
1. Instalar `NODEJS` y `npm` en su sistema, usando el `nvm`:
  [Instalar múltiples versiones de Node.js en Windows](https://rafaelneto.dev/blog/instalar-multiples-versiones-nodejs-windows/).
```bash
   nvm install [version]
   nvm use [version]
```
2. Verificar las versiones de `NODEJS` instaladas en una `TERMINAL`:
 ```bash
   nvm list
 ```
3. Instalar también el `pnpm` [pnpm installation](https://pnpm.io/installation), es mas rápido que el  `npm`.

>[!IMPORTANT]  
>### Infortunadamente en este proyecto el `pnpm` no funciona.

4. Instalar [Visual Studio Code](https://code.visualstudio.com/insiders/).

## 1. Creando el proyecto de Node.

1. Utilizando `Visual Studio Code` abrir el proyecto o la carpeta 
donde vamos a trabajar.
2. En una `TERMINAL` ejecutar el comando para inicializar el 
projecto de `nodejs`:
```bash
npm ini -y
```
3. Revisamos el archivo que acaba de crear el **`package.json`**, en 
este formato:
```json
{
  "name": "20250425-background-removal",
  "version": "1.0.0",
  "description": "[![Elimina el Fondo de Cualquier Imagen con Node.js y Javascript](images/2025-04-25_%20184055.png \"Elimina el Fondo de Cualquier Imagen con Node.js y Javascript\")](https://www.youtube.com/watch?v=kNfozI7Mbbs)",
  "main": "index.js",
  "scripts": {
    "test": "echo \"Error: no test specified\" && exit 1"
  },
  "keywords": [],
  "author": "",
  "license": "ISC"
}
```
4. Empezamos a cambiar, por ejemplo:
  * `"type"`
  * `"scripts"`
```json
{
  "name": "20250425-background-removal",
  "version": "1.0.0",
  "description": "[![Elimina el Fondo de Cualquier Imagen con Node.js y Javascript](images/2025-04-25_%20184055.png \"Elimina el Fondo de Cualquier Imagen con Node.js y Javascript\")](https://www.youtube.com/watch?v=kNfozI7Mbbs)",
  "main": "index.js",
  "scripts": {
    "start": "node index.js"
  },
  "keywords": [],
  "author": "",
  "license": "ISC",
  "type": "module"
}
```
5. Creamos el archivo de nombre **`index.js`**, por ahora vacío.


## 2. Uso de la librería `Background Removal`.

1. Vamos a este sitio [Background Removal in NodeJs](https://www.npmjs.com/package/@imgly/background-removal-node).
2. En una `TERMINAL` ejecutamos este comando:
```bash
npm i @imgly/background-removal-node -E
```
>[!CAUTION]  
>### La librería `Background Removal` solo funciona con `npm`.
>Traté de utilizar el `pnpm` y me arroja este error:
>```diff
>  throw new Error(help.join('\n'));
>        ^
>-Error:
>Something went wrong installing the "sharp" module
>Cannot find module '../build/Release/sharp-win32-x64.node'
>```
>En definitiva este proyecto solo funciona con `npm`.
>mas lento pero no hay de otra.

3. En el archivo **`index.js`**, empezamos con la importación de 
esta nueva librería:
```js
import {removeBackground} from '@imgly/background-removal-node';
```
4. Me voy a traer vaias imágenes y las copio en la raíz del proyecto.

5. Creo una constante con un arreglo de los nombres de las 
imágenes:
```js
const inuptPaths = ['./input-image1.png', './input-image2.png', './input-image3.png'];
```
6. Importo el módulo _File System_ que es `'fs'`:
```js
import fs from 'fs';
```
7. El _File System_ lo uso para validar que el archivo exista:
```js
//Validamos que los archivos de entrada existen
inuptPaths.forEach((inputPath) => {
    if (!fs.existsSync(inputPath)) {
        console.log(`Error: Input file ${inputPath} does not exist`);
        process.exit(1);
    }else{
        console.log(`Input file ${inputPath} exists`);
    }
});
```
8. Importamos el módulo `path`:
```js
import path from 'path'; // Importamos el módulo _Path_ para trabajar con rutas de archivos
```
9. Defino la constante `absolutePath` para llevar cada ruta, 
cambiando el contenido del `else`:
```js
    const absolutePath = path.resolve(inputPath);
```
10. Defino otra constante para la `imageUrl`:
```js
    const imageUrl = `file://${absolutePath}`;
```
11. Ahora que podemos leer el archivo le pudeo llamar la función
de la librería `removeBackground()`:
```js
    removeBackground(imageUrl)
      .then((blob) => {
        console.log('Background removed successfully');
      })
      .catch((error) => {
        console.error('Error removing background:', error);
      });
```
12. Ejecutamos en una terminal alguno de de estos comandos:
```bash
node index.js
```
o
```bash
npm start
```
* Después de un largo tiempo, sale varias veces el mensaje:   
`Background removed successfully`

## 3. Guardando la imagen en otro archivo 

1. usando el módulo _File System_ , vamos a guardar el archivo
y solo cambiamos el texto de `input` por `output`:
```js
    removeBackground(imageUrl)
      .then((blob) => {
        // Guardamos el resultado en un archivo
        const outputPath = inputPath.replace('input', 'output');
        fs.writeFileSync(outputPath, blob);
      })
      .catch((error) => {
        console.error('Error removing background:', error);
      });
```

>[!WARNING]  
>Tengo el siguiente error al ejecutar:
>```diff
>-Error removing background: TypeError [ERR_INVALID_ARG_TYPE]: The "data" argument must be of type string or an instance of Buffer, TypedArray, or DataView. Received an instance of Blob
>```
2. Debo de convertir el `blob` en un `Buffer`, `TypedArray`, o
`DataView`, lo hacemos en una función de nombre `blobToBuffer()`:
```js
async function blobToBuffer(blob) {
  const arrayBuffer = await blob.arrayBuffer();
  return Buffer.from(arrayBuffer);
}
```
3. Realizo el llamado de la función dentro del `.then` y como es
asíncrona tambien debo usar el `async` dentro de este:
```js
    removeBackground(imageUrl)
      .then(async (blob) => {
        // Guardamos el resultado en un archivo
        const outputPath = inputPath.replace('input', 'output');
        const buffer = await blobToBuffer(blob);
        fs.writeFileSync(outputPath, buffer);
        console.log(`Background removed successfully for ${inputPath}`);
      })
      .catch((error) => {
        console.error('Error removing background:', error);
      });
```

## 4. Refactorizar del Código

1. Creo una función asíncrona de nombre `main()`que envuelve 
todo el código principal y lo llamo luego abajo:
```js
async function main() {
  //Validamos que los archivos de entrada existen
  inuptPaths.forEach(async (inputPath) => {
    if (!fs.existsSync(inputPath)) {
      console.log(`Error: Input file ${inputPath} does not exist`);
      process.exit(1);
    } else {
      const absolutePath = path.resolve(inputPath);
      const imageUrl = `file://${absolutePath}`;
      removeBackground(imageUrl)
        .then(async (blob) => {
          // Guardamos el resultado en un archivo
          const outputPath = inputPath.replace('input', 'output');
          const buffer = await blobToBuffer(blob);
          fs.writeFileSync(outputPath, buffer);
          console.log(`Background removed successfully for ${inputPath}`);
        })
        .catch((error) => {
          console.error('Error removing background:', error);
        });
    }
  });
}

main();
```
2. Creo la función `removeBack()` que removerá el fondo:
```js
//Función para eliminar el fondo de la imagen
async function removeBack(inputPath) {
  const absolutePath = path.resolve(inputPath);
  const imageUrl = `file://${absolutePath}`;
  removeBackground(imageUrl)
    .then(async (blob) => {
      // Guardamos el resultado en un archivo
      const outputPath = inputPath.replace('input', 'output');
      const buffer = await blobToBuffer(blob);
      fs.writeFileSync(outputPath, buffer);
      console.log(`Background removed successfully for ${inputPath}`);
    })
    .catch((error) => {
      console.error('Error removing background:', error);
    });
}
```
3. De nuevo en `main()`, llamamos la nueva función dentro 
de un `try/catch`:
```js
//Función principal
async function main() {
  //Validamos que los archivos de entrada existen
  inuptPaths.forEach(async (inputPath) => {
    if (!fs.existsSync(inputPath)) {
      console.log(`Error: Input file ${inputPath} does not exist`);
      process.exit(1);
    } else {
      try {
        await removeBack(inputPath);
      } catch (error) {
        console.error('Error removing background:', error);
      }
    }
  });
}
```
4. Se ejecuta y sigue funcionando correctamente.

