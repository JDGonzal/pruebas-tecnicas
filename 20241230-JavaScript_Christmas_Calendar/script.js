import drawStar from './items/01-star.js'; // Importo la función drawStar
import drawBall from './items/02-ball.js'; // Importo la función drawBall
import drawSock from './items/03-sock.js'; // Importo la función drawSock
import drawCane from './items/04-cane.js'; // Importo la función drawCane
import drawBow from './items/05-bow.js'; // Importo la función drawBow
import drawBell from './items/06-bell.js'; // Importo la función drawBell
import drawSnowBall from './items/07-snowBall.js'; // Importo la función drawSnowBall
import drawCandle from './items/08-candle.js'; // Importo la función drawCandle
import drawGlove from './items/09-glove.js'; // Importo la función drawGlove
import drawCandy from './items/10-candy.js'; // Importo la función drawCandy
import drawSnowFlake from './items/11-snowFlake.js'; // Importo la función drawSnowFlake
import drawSledge from './items/12-sledge.js'; // Importo la función drawSledge
import drawTree from './items/13-tree.js'; // Importo la función drawTree
import drawHat from './items/14-hat.js'; // Importo la función drawHat
import drawCalendar from './items/15-calendar.js'; // Importo la función drawCalendar
import drawPresent from './items/16-present.js'; // Importo la función drawPresent
import drawCookie from './items/17-cookie.js'; // Importo la función drawCookie
import drawGlobe from './items/18-globe.js'; // Importo la función drawGlobe
import drawBells from './items/19-bells.js'; // Importo la función drawBells
import drawSnowMan from './items/20-snowMan.js'; // Importo la función drawSnowMan

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
  drawItemFunctions[5] = drawBow; // Asigno la función drawBow al array
  drawItemFunctions[6] = drawBell; // Asigno la función drawBell al array
  drawItemFunctions[7] = drawSnowBall; // Asigno la función drawSnowBall al array
  drawItemFunctions[8] = drawCandle; // Asigno la función drawCandle al array
  drawItemFunctions[9] = drawGlove; // Asigno la función drawGlove al array  
  drawItemFunctions[10] = drawCandy; // Asigno la función drawCandy al array
  drawItemFunctions[11] = drawSnowFlake; // Asigno la función drawSnowFlake al array
  drawItemFunctions[12] = drawSledge; // Asigno la función drawSledge al array
  drawItemFunctions[13] = drawTree; // Asigno la función drawTree al array
  drawItemFunctions[14] = drawHat; // Asigno la función drawHat al array
  drawItemFunctions[15] = drawCalendar; // Asigno la función drawCalendar al array
  drawItemFunctions[16] = drawPresent; // Asigno la función drawPresent al array
  drawItemFunctions[17] = drawCookie; // Asigno la función drawCookie al array
  drawItemFunctions[18] = drawGlobe; // Asigno la función drawGlobe al array
  drawItemFunctions[19] = drawBells; // Asigno la función drawBells al array
  drawItemFunctions[20] = drawSnowMan; // Asigno la función drawSnowMan al array
  
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
