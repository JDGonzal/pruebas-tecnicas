import draw from '../utils/draw.js'; // Importo la función draw
import color from '../utils/color.js'; // Importo la función color  

function drawSock(ctx, x, y, size, hue, angle = Math.PI / 4) {
  const top = y - size / 2; // Defino la parte superior del calcetín

  const ankleY = y + size * 0.1; // Defino la altura del tobillo
  const footWidth = size * 0.4; // Defino el ancho del pie
  const radius = footWidth / 2; // Defino el radio del tobillo
  const sleeveWidth = footWidth * 1.1; // Defino el ancho de la manga
  const footSize = size * 0.3; // Defino el tamaño del pie

  const tipX = x + Math.cos(angle) * footSize; // Defino la punta del pie en X
  const tipY = ankleY + Math.sin(angle) * footSize; // Defino la punta del pie en Y

  draw.line(ctx, x, top + radius, x, ankleY, {
    strokeStyle: color.normal(hue),
    lineWidth: footWidth,
    lineCap: 'round',
  }); // Dibujo la pierna

  draw.line(ctx, x, ankleY, tipX, tipY, {
    strokeStyle: color.normal(hue),
    lineWidth: footWidth,
    lineCap: 'round',
  }); // Dibujo el pie

  draw.line(ctx, x, top, x, top + radius, {
    strokeStyle: color.lightest(hue),
    lineWidth: sleeveWidth,
    lineCap: 'butt',
  }); // Dibujo la manga
}

export default drawSock;
