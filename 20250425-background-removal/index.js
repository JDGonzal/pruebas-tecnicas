import { removeBackground } from '@imgly/background-removal-node';
import fs from 'fs'; // Importamos el módulo _File System_ para trabajar con el sistema de archivos
import path from 'path'; // Importamos el módulo _Path_ para trabajar con rutas de archivos

//Creamos la constante con los archivos de entrada
const inuptPaths = [
  './input-image1.png',
  './input-image2.png',
  './input-image3.png',
];

//Función para convertir el blob a un buffer
async function blobToBuffer(blob) {
  const arrayBuffer = await blob.arrayBuffer();
  return Buffer.from(arrayBuffer);
}

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

main();
