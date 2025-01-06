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

## 4. Dia segundo con **`02-ball.js`**

1. En la función `setInit()` del archivo **`script.js`**, 
adicionamos la función para la posición `[2]`:
```js
  drawItemFunctions[2] = drawBall; // Asigno la función drawBall al array
```
2. Creamos enla carpeta **"items"** el arhivo **`02-ball.js`**,
con al menos esta función:
```js
function drawBall(ctx, x, y, size) {}

export default drawBall;
```
3. Importamos en **`script.js`**, esta nueva función:
```js
import drawBall from './items/02-ball.js'; // Importo la función drawBall
```
4. Ahora si empiezo a poner el código en la función `drawBall()`
del archivo **`02-ball.js`**:
```js
  const top = y - size / 2;
  const left = x - size / 2;

  // Definimos el anillo de la bola
  const ring ={
    radius: size * 0.1,
    x,
    get y() {return top + this.radius},
    color: 'black'
  }

  //dibujamos el anillo
  ctx.beginPath();
  ctx.arc(ring.x, ring.y, ring.radius, 0, Math.PI * 2);
  ctx.strokeStyle = ring.color;
  ctx.stroke();
```
* Así se ve lo que llevamos de la segunda celda:  
![Anillo base](images/2024-12-31_181631.png "Anillo base")
5. Agrego en el objeto `ring` el valor de `lineWidth`:
```js
  const ring = {
    radius: size * 0.1,
    x,
    get y() {
      return top + this.radius;
    },
    lineWidth: size * 0.05,
    color: 'orange',
  };
```
6. Ajustamos en el dibujo del `arc()` con estos valores:
```js
  ctx.arc(ring.x, ring.y, ring.radius - ring.lineWidth / 2, 0, Math.PI * 2);
```
7. Mejoramos el código par dibuar el `ring` de esta manera:
```js
  draw.circle(ctx, ring.x, ring.y, ring.radius, {
    strokeStyle: ring.color,
    lineWidth: ring.lineWidth,
    outline: 'inside'
  });
```
8. Creamos una carpeta en la raíz de nombre **"utils"**.
9. En la carpeta **"utils"**, creamos el archivo **`draw.js`**,
con al menos la función `circle()`:
```js
const draw = {};

draw.circle = function(ctx, x, y, radius, { fillStyle, strokeStyle, lineWidth, outline }) {
  ctx.beginPath();
  if (outline === 'inside') { 
    radius -= lineWidth / 2;
  }
  ctx.arc(x, y, radius, 0, Math.PI * 2);
  if (fillStyle) {
    ctx.fillStyle = fillStyle;
    ctx.fill();
  }
  if (strokeStyle) {
    ctx.strokeStyle = strokeStyle;
    ctx.lineWidth = lineWidth;
    ctx.stroke();
  }

  ctx.closePath();
}

export default draw;
```
10. En el archivo **`02-ball.js`**, importamos este método
múltiple de nombre `draw`:
```js
import draw from '../utils/draw.js';
```
* Anillo dibujado con la utilidad `draw`:  
![Anillo dibujado con la utilidad `draw`](images/2024-12-31_184855.png "Anillo dibujado con la utilidad `draw`")
11. Definimos un nuevo objeto en el archivo **`02-ball.js`**:
```js
  const ball = {
    radius: size * 0.45,
    x,
    y() {
      return top + ring.radius + this.radius;
    },
    color: 'red',
  };
```
12. Usamos el `draw` para completar la bola:
```js
  draw.circle(ctx, ball.x, ball.y(), ball.radius, {
    fillStyle: ball.color,
  });
```
* Así se ve la bola y el anillo en la celda 2:  
![Minuto 25:12](images/2024-12-31_185905.png "Minuto 25:12")

## 5. Implementar manejo de colores

1. Creamos el archivo **`color.js`** en la carpeta **"utils"**, 
añadimos el método `color`:
```js
const color = {}

color.darkest = (hue) => `hsl(${hue}, 100%, 10%)`;
color.dark = (hue) => `hsl(${hue}, 100%, 30%)`;
color.normal = (hue) => `hsl(${hue}, 100%, 50%)`;
color.light = (hue) => `hsl(${hue}, 100%, 70%)`;
color.lightest = (hue) => `hsl(${hue}, 100%, 90%)`;

export default color;
```
2. Agregamos el elemento `hue` en el archivo **`script.js`**,
en el método `fillCell()`:
```js
const fillCell = (canvas, index) => {
  ...
  const hue = Math.floor(Math.random() * 360); // Defino el color
  ...
  if (drawItem) drawItem(ctx, x, y, itemSize, hue); // Llamo la función drawItem
  else drawNumber(ctx, index, x, y, itemSize); // Llamo la función drawNumber
};
```
3. Ahora bien tanto para **`01-start.js`**, como para 
**`02-ball.js`**, agrego el parámetro `hue` y lo utilizo en
las definiciones del color:
* **`01-start.js`**
```js
import color from '../utils/color.js';

function drawStar(ctx, x, y, size, hue) {
  ...
  ctx.fillStyle = color.normal(hue); // Asigno el color
}
```
* **`02-ball.js`**
```js
import color from '../utils/color.js';
import draw from '../utils/draw.js';

function drawBall(ctx, x, y, size, hue) {
  ...
  const ring = {
    ...,
    color: color.darkest(hue),
  };
  ...
  const ball = {
    ...,
    color: color.normal(hue),
  };
}
```
4. Para darle volúmen a la `ball`, en el archivo **`ball.js`**
añadimos la constante `highlight`, antes de dibujar la `ball`:
```js
  const highlight = {
    x: ball.x - ball.radius * 0.3,
    y: ball.y - ball.radius * 0.3,
  };
```
5. Otra constante para el gradiente de nombre `grd`:
```js
  // Definimos el gradiente radial
  const grd = ctx.createRadialGradient(
    highlight.x, highlight.y, 0, 
    highlight.x, highlight.y, ball.radius
  );
```
6. Ajustamos el uso del gradiente en la bola
```js
  grd.addColorStop(0, color.light(hue));
  grd.addColorStop(1, color.dark(hue));

  //dibujamos la bola
  draw.circle(ctx, ball.x, ball.y(), ball.radius, {
    fillStyle: grd,
  });
```
* Así se ve la bola con el gradiente:  
![Minuto 28:38](images/2025-01-01_095647.png "Minuto 28:38")
7. Mejoramos la gradiente y la imagen se verá mejor:
```js
  // Definimos el gradiente radial
  const grd = ctx.createRadialGradient(
    highlight.x, highlight.y, 0,
    highlight.x, highlight.y, ball.radius * 2
  );
  grd.addColorStop(0, color.lightest(hue));
  grd.addColorStop(0.3, color.normal(hue));
  grd.addColorStop(0.8, color.dark(hue));
  grd.addColorStop(1, color.darkest(hue));
```
* Así se ve con mas opciones en el gradiente:  
![Minuto 29:18](images/2025-01-01_100722.png "Minuto 29:18")
8. Borramos de **`02-ball.js`**, la variable innecesaria
`const left = x - size / 2;`

## 6. Dia tercero con **`03-sock.js`**

1. En la función `setInit()` del archivo **`script.js`**, 
adicionamos la función para la posición `[3]`:
```js
  drawItemFunctions[3] = drawSock; // Asigno la función drawSock al array
```
2. Creamos en la carpeta **"items"** el arhivo **`03-sock.js`**,
con al menos esta función:
```js
function drawSock(ctx, x, y, size, hue) {}

export default drawSock;
```
3. Importamos en **`script.js`**, esta nueva función:
```js
import drawSock from './items/03-sock.js'; // Importo la función drawSock
```
4. Agrego en **`draw.js`**, el comportamiento para `line`:
```js
draw.line = function (ctx, fromX, fromY, toX, toY, options) {
  ctx.beginPath();
  ctx.moveTo(fromX, fromY);
  ctx.lineTo(toX, toY);
  Object.assign(ctx, options);
  ctx.stroke();

  ctx.closePath();
}
```
5.. Ahora si empiezo a poner el código en la función `drawSock()`
del archivo **`03-sock.js`**:
```js
function drawSock(ctx, x, y, size, hue) {
  const top = y - size / 2; // Defino la parte superior del calcetín
  const ankleY = y + size * 0.1; // Defino la altura del tobillo
  draw.line(ctx, x, top, x, ankleY, {
    strokeStyle: color.normal(hue), 
  }); // Dibujo la pierna
}
```
6. Verificar que se tenga ambas importaciones en **`03-sock.js`**:
```js
import draw from '../utils/draw.js'; // Importo la función draw
import color from '../utils/color.js'; // Importo la función color  
```
7. Definimos la constante `footWidth` y la asignamos al momento
de `draw.line()`:
```js
function drawSock(ctx, x, y, size, hue) {
  const top = y - size / 2; // Defino la parte superior del calcetín
  ...
  const footWidth = size * 0.4; // Defino el ancho del pie
  draw.line(ctx, x, top, x, ankleY, {
    strokeStyle: color.normal(hue),
    lineWidth: footWidth,
  }); // Dibujo la pierna
}
```
8. Agrego un parámetro al momento de dibujar la línea de
nombre `lineCap`, para redondear las puntas:
```js
  draw.line(ctx, x, top, x, ankleY, {
    strokeStyle: color.normal(hue),
    lineWidth: footWidth,
    lineCap: 'round',
  });
```
9. Defino la constante `radius` y muevo la parte superior mas
abajo:
```js
  const radius = footWidth / 2; // Defino el radio del tobillo

  draw.line(ctx, x, top + radius , x, ankleY, {
    strokeStyle: color.normal(hue),
    lineWidth: footWidth,
    lineCap: 'round',
  });
```
* Así se ve la recta con las puntas redondeadas y la distancia
del `radius`:  
![Minuto 34:48](images/2025-01-01_144729.png "Minuto 34:48")
10. Defino la constante `sleeveWidth` y la uso para dibujar
la manga en pantalla:
```js
  const sleeveWidth = footWidth * 1.1; // Defino el ancho de la manga
  ...
  draw.line(ctx, x, top, x, top + radius, {
    strokeStyle: color.lightest(hue),
    lineWidth: sleeveWidth,
    lineCap: 'butt',
  }); // Dibujo la manga
```
* Así se ve la dos rectas:  
![Minuto 35:43](images/2025-01-01_150428.png "Minuto 35:43")
11. En el archivo **`03-sock.js`**, agrego el parámetro de
nombre `angle` con un valor inicial de `0`:
```js
function drawSock(ctx, x, y, size, hue, angle = 0) {
  ...
}
```
12. Definimos en el método `drawSock()` la constante de nombre
`footSize`:
```js
  const footSize = size * 0.3; // Defino el tamaño del pie
```
13. Calculamos el inicio del la recta con dos constantes de 
nombre `tipX` y `tipY`:
```js
  const tipX = x + Math.cos(angle) * footSize; // Defino la punta del pie en X
  const tipY = ankleY + Math.sin(angle) * footSize; // Defino la punta del pie en Y
```
14. Dibujamos otra línea con los nuevos elementos, entre el 
`// Dibujo la pierna` y `// Dibujo la manga` :
```js
  draw.line(ctx, x, ankleY, tipX, tipY, {
    strokeStyle: color.normal(hue),
    lineWidth: footWidth,
    lineCap: 'round',
  }); // Dibujo el pie
```
* Así se ve la imagen de `sock` con todo completo:  
![Minuto 37:20](images/2025-01-02_071928.png "Minuto 37:20") 
15. Podemos cambiar el valor inicial de `angle`, por este valor:
```js
function drawSock(ctx, x, y, size, hue, angle = Math.PI / 4) {
  ...
}
```
* Así luce la `sock` o media o calcetín con un ángulo de `45°`:  
![Minuto 37:32](images/2025-01-02_072444.png "Minuto 37:32") 

## 7. Dia cuarto con **`04-cane.js`**

1. En la función `setInit()` del archivo **`script.js`**, 
adicionamos la función para la posición `[4]`:
```js
  drawItemFunctions[4] = drawCane; // Asigno la función drawCane al array
```
2. Creamos en la carpeta **"items"** el arhivo **`04-cane.js`**,
con al menos esta función:
```js
function drawCane(ctx, x, y, size, hue) {}

export default drawCane;
```
3. Importamos en **`script.js`**, esta nueva función:
```js
import drawCane from './items/04-cane.js'; // Importo la función drawCane
```
4. Definimos las constantes para el `top`, `width` y `thickness`,
en **`04-cane.js`**:
```js
function drawCane(ctx, x, y, size, hue) {
  const top = y - size / 2; // Defino la parte superior del bastón

  const width = size * 0.5; // Defino el ancho del bastón
  const thickness = size * 0.1; // Defino el grosor del bastón
}
```
5. Creamos una constante para manejar el arco de nombre `arc`,
en el método `drawCane()`:
```js
  const arc = {
    radius: (width - thickness) / 2, // Defino el radio del arco
    x,
    y() { return top + this.radius + thickness / 2; }, // Defino la altura del arco
  }
```
6. Hacemos el dibujo correspondiente en el archivo 
**`04-cane.js`**, dentro del método `drawCane()`:
```js
  ctx.beginPath(); // Comienzo el trazo
  ctx.strokeStyle = color.normal(hue); // Asigno el color
  ctx.lineWidth = thickness; // Asigno el grosor
  ctx.arc(arc.x, arc.y(), arc.radius, Math.PI, 0); // Dibujo el arco
  ctx.stroke(); // Hago el trazo
```
* Así se ve la primera parte del bastón o `cane`:  
![Minuto 41:15](images/2025-01-03_075750.png "Minuto 41:15")
7. Añadimos en el mérodo `drawCane()`, antes de `ctx.stroke()`
lo siguiente:
```js
  ctx.lineTo(arc.x + arc.radius, bottom); // Dibujo la línea
```
8. Defino la constante `bottom` al principio de **`04-cane.js`**:
```js
  const bottom = y + size / 2; // Defino la parte inferior
```
* Así se ve hasta el momento el cuarto día:  
![Minuto 41:59](images/2025-01-03_100544.png "Minuto 41:59")
9. Vamos a dibujar los adornos del bastón debajo de
`ctx.stroke()`, en el método `drawCane()`:
```js
  ctx.strokeStyle = color.dark(hue); // Asigno el color
  ctx.setLineDash([thickness, thickness]); // Asigno el trazo
  ctx.stroke(); // Hago el trazo
```
* Así luce el bastón con los adornos:  
![Minuto 42:57](images/2025-01-03_101322.png "Minuto 42:57")
10. Cambiamos la definición de colores para los dos
`strokeStyle`:
```js
  ctx.beginPath(); // Comienzo el trazo
  ctx.strokeStyle = color.lightest(hue); // Asigno el color
  ...

  // Dibujamos los adornos del bastón 
  ctx.strokeStyle = color.normal(hue); // Asigno el color
  ...
```
* Así vemos el bastón del dia 4, con el cambio de definición de
colores:  
![Minuto 43:23](images/2025-01-03_102942.png "Minuto 43:23")
