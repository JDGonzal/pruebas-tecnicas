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
