import drawStar from './items/01-star.js'; // Importo la función drawStar
import drawBall from './items/02-ball.js'; // Importo la función drawBall
import drawSock from './items/03-sock.js'; // Importo la función drawSock
import drawCane from './items/04-cane.js'; // Importo la función drawCane

const cellSize = 200; // Tamaño de la celda
const calendar = document.getElementById('calendar'); // Obtengo el div con id calendar
const drawItemFunctions = []; // Creo un array para guardar las funciones

// Cuando se muestra la pantalla
window.onload = () => {
  setInit(); // Llamo esta función
};

// Función para inicializar el ambiente
const setInit = () => {
  drawItemFunctions[1] = drawStar; // Asigno la función drawStar al array
  drawItemFunctions[2] = drawBall; // Asigno la función drawBall al array
  drawItemFunctions[3] = drawSock; // Asigno la función drawSock al array
  drawItemFunctions[4] = drawCane; // Asigno la función drawCane al array
  for (let day = 1; day <= 24; day++) {
    const canvas = document.createElement('canvas'); // Creo un canvas
    canvas.width = cellSize; // Asigno el ancho
    canvas.height = cellSize; // Asigno el alto
    calendar.appendChild(canvas); // Agrego el canvas al div

    fillCell(canvas, day); // Llamo la función fillCell
  }
};

// Función para llenar la celda
const fillCell = (canvas, index) => {
  const ctx = canvas.getContext('2d'); // Obtengo el contexto del canvas
  const x = canvas.width / 2; // Obtengo la mitad del ancho
  const y = canvas.height / 2; // Obtengo la mitad del alto
  const itemSize = canvas.width * 0.6; // Defino el tamaño del item
  const hue = Math.floor(Math.random() * 360); // Defino el color

  const drawItem = drawItemFunctions[index]; // Obtengo la función a dibujar
  if (drawItem) drawItem(ctx, x, y, itemSize, hue); // Llamo la función drawItem
  else drawNumber(ctx, index, x, y, itemSize); // Llamo la función drawNumber
};

// Función para dibujar el número
const drawNumber = (ctx, number, x, y, size) => {
  ctx.font = size + 'px Arial'; // Asigno la fuente
  ctx.textAlign = 'center'; // Asigno la alineación
  ctx.textBaseline = 'middle'; // Asigno la base del texto
  ctx.fillText(number, x, y); // Dibujo el número
  ctx.fillStyle = 'black'; // Asigno el color
};
