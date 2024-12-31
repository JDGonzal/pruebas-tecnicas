# JavaScript Christmas Calendar Tutorial 🎄 de freeCodeCamp.org 
## 2 horas y 49 minutos

[![JavaScript Christmas Calendar Tutorial 🎄](images/2024-12-30_125841.png "How Math Can Make Your Code Better")](https://www.youtube.com/watch?v=07vQARYrJgw&t=155s)

## 1. Los tres archivos básicos
1. Empezamos con el archivo **`index.html`**, digitando en 
`Visual Studio Code` el _snippet_ de `html:5` y añadiendo el elemento
`<footer>` debajo de `<body>`:
```html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=html:5, initial-scale=1.0">
  <title>Document</title>
</head>
<body>
  
</body>
<footer></footer>
</html>
```
2. Cambiamos el título a `Diciembre`.
3. En el `<head>` debajo del `<title>` agregamos el `<script>`
llamando un archivo de nombre **`script.js`** de tipo `module`:
```html
  <script type="module" src="script.js"></script>
```
4. Se da `[ctrl]` + click en el nombre `"script.js"` para
crear y abrir el archivo **`script.js`**.
5. En el `<body>` creamos un `<div>` con el `id` de `calendar`:
```html
  <div id = "calendar"></div>
```
6. En el archivo **`script.js`**, agregamos estas líneas:
```js
// Cuando se muestra la pantalla
window.onload = () => {
  setInit(); // Llamo esta función
};

// Función para inicializar el ambiente
const setInit = () => {}
```
7. Añadimos este código dentro de **`script.js`**, justo en el inicio:
```js
const cellSize = 200; // Tamaño de la celda
const calendar = document.getElementById('calendar'); // Obtengo el div con id calendar
```
8. Dentro del método `setInit()` , añadimos un `for`:
```js
const setInit = () => {
  for (let day = 1; day <= 24; day++) {
    const canvas = document.createElement('canvas'); // Creo un canvas
    canvas.width = cellSize; // Asigno el ancho
    canvas.height = cellSize; // Asigno el alto
    calendar.appendChild(canvas); // Agrego el canvas al div  
  }
}
```
9. En el `<footer>`, agregamos un `link` invocando un arhivo
de nombre **`style.css`**:
```html
  <link rel="stylesheet" href="style.css">
```
10. Se da `[ctrl]` + click en el nombre `"style.css"` para
crear y abrir el archivo **`style.css`**.
11. Poner esto en el archivo **`style.css`**:
```css
canvas {
  background-color: #BBB;
  margin: 3px;
  border-radius: 10px;
}
```

>[!TIP]  
>Así se ve el browser hasta el momento:  
>![Minuto 4:23](images/2024-12-30_173858.png "Minuto 4:23")

## 2. Dibujando números en las celdas

1. Empezamos a llenar las celdas con algo. En el archivo 
**`script.js`**, en el `for` de `setInit()`, debajo del 
`appendChild`, agregamos esto:
```js
    fillCell(canvas, day); // Llamo la función fillCell
```
2. Creo la función `fillCell()` y empiezo esto en el código:
```js
// Función para llenar la celda
const fillCell = (canvas, index) => {
  const ctx = canvas.getContext('2d'); // Obtengo el contexto del canvas
  const x = canvas.width / 2; // Obtengo la mitad del ancho
  const y = canvas.height / 2; // Obtengo la mitad del alto 
}
```
3. Definimos el tamaño de los elementos en el canvas con esto dentro
de la función `fillCell()`:
```js
  const itemSize = canvas.width * 0.6; // Defino el tamaño del item
```
4. Por ahora vamos a dibujar un número en cada una de las celdas, 
en la función `fillCell()`:
```js
  drawNmber(ctx, index, x, y, itemSize); // Llamo la función drawNumber
```
5. Creo la función `drawNumber()`:
```js
// Función para dibujar el número
const drawNmber = (ctx, number, x, y, size) => {
  ctx.font = size + 'px Arial'; // Asigno la fuente
  ctx.fillText(number, x, y); // Dibujo el número
  ctx.fillStyle = 'black'; // Asigno el color 
}
``` 

>[!TIP]  
>En cada celda aparece un número:  
>![Minuto 6:40](images/2024-12-30_180513.png "Minuto 6:40")

6. Añadimos en la función `drawNmber()`, un `textAlign` y un
`textBaseline`:
```js
  ctx.textAlign = 'center'; // Asigno la alineación
  ctx.textBaseline = 'middle'; // Asigno la base del texto
```

>[!TIP]  
>Los números aparecen centrados en cada celda:  
>![Minuto 6:58](images/2024-12-30_185505.png "Minuto 6:58")

## 3. Día primero con **`01-start.js`**

1. Creamos en la parte superior de **`script.js`** la definicón
de un arreglo de nombre `drawImtemFunctions`:
```js
const drawItemFunctions = []; // Creo un array para guardar las funciones
```
2. En el método `setInit()`, antes del `for`, cargo el primer valor
como `drawStar`;
```js
  drawItemFunctions[1] = drawStar; // Asigno la función drawStar al array
```
3. En la función `fillCell` colocamos esto antes de llamar la función
`drawNumber()`:
```js
  const drawItem = drawItemFunctions[index]; // Obtengo la función a dibujar
  if (drawItem)
    drawItem(ctx, x, y, itemSize); // Llamo la función drawItem
  else drawNumber(ctx, index, x, y, itemSize); // Llamo la función drawNumber
``` 
4. Creamos la carpeta de nombre **"items"**.
5. La función la vamos a crear en un archivo nuevo de nombre
**`01-start.js`**, dentro de la carpeta **"items"**, con al menos
este código:
```js
function drawStar(ctx, x, y, size) {}

export default drawStar;
```
6. Regreso a **`script.js`** y en el principio añado la importación
de la función del archivo **`01-start.js`**:
```js
import drawStar from './items/01-start.js'; // Importo la función drawStar
```
7. En la función `drawStar()` de  **`01-start.js`**, coloco
este código:
```js
  const radius = size / 2; // Defino el radio
  const pointCount = 5; // Defino la cantidad de puntos
  ctx.beginPath(); // Comienzo el trazo
  for (let i = 0; i < pointCount; i++) {
    const angle = (i / pointCount) * Math.PI * 2; // Defino el ángulo
    const surfaceX = x + radius * Math.cos(angle); // Defino la superficie x
    const surfaceY = y + radius * Math.sin(angle); // Defino la superficie y
    ctx.lineTo(surfaceX, surfaceY); // Dibujo la línea
  }
  ctx.fillStyle = 'yellow'; // Asigno el color
  ctx.fill(); // Relleno
```

>[!TIP]  
>Tenemos un pentágono en la primer celda:  
>![Minuto 11:13](images/2024-12-31_161802.png "Minuto 11:13")

8. Cambiamos el número de puntos de `pointCount` a `10`, y el nombre de
la constante `radius` por otras dos nuevas:
```js
  const outerRadius = size / 2; // Defino el radio externo
  const innerRadius = size / 4; // Defino el radio interno
  const pointCount = 10; // Defino la cantidad de puntos
```
9. Justo después de obtener el `angle`, obtengo el `radius`:
```js
    const radius = (i % 2 === 0) ? outerRadius : innerRadius; // Defino el radio
```
* Así se ve la estrella como "rellenita":  
![Minuto 12:07](images/2024-12-31_163757.png "Minuto 12:07")

10. Cambio el valor de `innerRadius` de `size / 4` a 
`size / 5`, y se ve la estrella mejor:  
![Ajuste `innerRadius`](images/2024-12-31_164527.png "Ajuste `innerRadius`")
11. Finalmente encuentro una fórmula mejor para hacer la estrella
y cambio el código por esto:
```js
  ctx.fillStyle = 'yellow'; // Asigno el color
  ctx.beginPath(); // Comienzo el trazo
  ctx.moveTo(x, y - size / 2); // Muevo el trazo
  for (let i = 0; i < 10; i++) {
    const angle = (i * Math.PI) / 5; // Defino el ángulo
    const radius = i % 2 === 0 ? size * 0.5 : size * 0.2; // Defino el radio
    ctx.lineTo(x + radius * Math.sin(angle), y - radius * Math.cos(angle)); // Dibujo la línea
  }
  ctx.closePath(); // Cierro el trazo
  ctx.fill(); // Relleno
```
* Veo mejor la estrella de esta forma:  
![Cambio todo el código](images/2024-12-31_164932.png "Cambio todo el código")

12. El Instructor corrije el código para que se vea también la 
punta arriba, cambiando `surfaceX` y `surfaceY` de esta manera:
```js
    const surfaceX = x + radius * Math.sin(angle); // Defino la superficie x
    const surfaceY = y - radius * Math.cos(angle); // Defino la superficie y
```
13. El instructor también sugiere un cambio de colores de forma 
aleatoria, usando una constante `hue` y poniendo dicho color así:
```js
  const hue = Math.floor(Math.random() * 360); // Defino el color
  ctx.fillStyle = `hsl(${hue}, 50%, 50%)`; // Asigno el color
```
* Pero prefiero dejarlo en el color constante de `'yellow'`.
