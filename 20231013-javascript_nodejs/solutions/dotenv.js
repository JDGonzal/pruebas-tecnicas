// Ejercicio-6
/*
Vamos a crear nuestra propia utilidad `dotenv` en el archivo `dotenv.js`.

- La utilidad debe devolver un método `config` que lee el archivo `.env` y añade las variables de entorno que haya en el archivo al objeto `process.env`.

- Por ejemplo si tu archivo `.env` contiene:

PORT=8080
TOKEN="123abc"

Entonces podríamos hacer esto:

const dotenv = require("./dotenv.js");
dotenv.config()

console.log(process.env.PORT) // "8008"
console.log(process.env.TOKEN) // "123abc"

También se le puede pasar el path del archivo `.env` como parámetro:

const dotenv = require("./dotenv.js");
dotenv.config("./config/.env.local")

Cosas a tener en cuenta:

- Sólo se permite usar el módulo `fs` para leer el archivo.
- Si el archivo no existe, no debe dar error, simplemente no hace nada.
- Si el archivo existe, pero no tiene ninguna variable de entorno, no debe hacer nada.
- Sólo debe soportar el archivo `.env` o el que se le pasa como parametro, no hace falta que soporte `.env.local`, `.env.development` y similares de forma automática.
- Las variables de entorno siempre son strings, por lo que si en el archivo `.env` hay un número, por ejemplo `PORT=8080`, al leerlo con `fs` y añadirlo a `process.env` debe ser un string, no un número.
- `process.env` es un objeto y, por lo tanto, es mutable. Esto significa que podemos añadir propiedades nuevas sin problemas.*/
// 01:05:45
//! importar el `fs` *SOLO*
import fs from 'fs';
//! Lo primero creat el método `config` y exportarlo de una vez y
//! Añadir como parametro la ruta del archivo "un por defecto"
export const config = ({ path = '.env' } = {}) => {
  //! Es bueno poner el try-catch para leer el archivo 
  try {
    // Leer el archivo y ojo tiene q ser Síncrono
    // const env = fs.readFile(path, 'utf8');
    //* ¿Por qué tiene q ser síncorono?
    //* Tiene q parar el flujo de ejecución, pues se podría crear un "race condition"
    //* Race Condition es una vulnerabilidad que ocurre cuando un sistema que maneja tareas en una secuencia específica es forzado a realizar dos o más operaciones simultáneamente.
    //* No hay problema q sea Síncrono, por que eso se ejecuta una sola vez en toda la aplicación.
    const env = fs.readFileSync(path, 'utf8');
    // Separar por salto de linea
    const lines = env.split('\n');
    // Recorremos lineas y separamos por el primer símbolo igual `=`
    lines.forEach(line => {
      // Como pueden haber varios síbolos igual, desplegamos el `value`
      const [key, ...value] = line.split('=');
      // Para volverlos a unir en un solo valor
      const joinedValue = value.join('=');
      // Verficar si tiene comillas dobles al principio y al final
      const hasQuotes = joinedValue.startsWith('"') && joinedValue.endsWith('"');
      // El valor a guardar es dependiendo si tiene o no comillas
      const valueToStore = hasQuotes ? joinedValue.slice(1, -1) : joinedValue;
      console.log(key, value);
      process.env[key] = valueToStore;
    })
  } catch (error) {
    //* Si el archivo no existe, no debe dar error, simplemente no hace nada.
    // console.log(error);
  }
}

//? Esto es para tener soporte `commonJS`
const dotenv = {
  config
}
export default dotenv;
//* NOTA: No se requiere crear el archivo ".env" porque el "dotenv.test.js" se encarga de crearlo.
