import draw from '../utils/draw.js'; // Importo la función draw
import color from '../utils/color.js'; // Importo la función color
import drawBow from './05-bow.js'; // Importo la función drawBow

function drawWreath(ctx, x, y, size, hue) {
  const top = y - size / 2; // Defino la parte superior de la corona navideña
  // const left = x - size / 2; // Defino la parte superior de la corona navideña
  // const right = x + size / 2; // Defino la parte derecha de la corona navideña
  // const bottom = y + size / 2; // Defino la parte inferior de la corona navideña
  // ctx.strokeRect(left, top, size, size); // Dibujo un rectángulo

  const thickness = size * 0.2; // Defino el grosor de la corona
  const radius = size * 0.5; // Defino el radio de la corona

  draw.circle(ctx, x, y, radius, {
    strokeStyle: color.light(hue),
    lineWidth: thickness,
    outline: 'inside',
  }); // Dibujo un círculo

  const length = Math.PI * 2 * radius; // Defino la longitud de la guirnalda
  const dashLength = length / 40; // Defino la longitud de las líneas de la guirnalda
  ctx.setLineDash([dashLength, dashLength]); // Establezco el patrón de la línea
  draw.circle(ctx, x, y, radius, {
    strokeStyle: color.dark(hue),
    lineWidth: thickness,
    outline: 'inside',
  }); // Dibujo un círculo
  ctx.setLineDash([]); // Restauro el patrón de la línea

  const bow = {
    x: x,
    y: top + thickness,
    size: radius,
  };
  drawBow(ctx, bow.x, bow.y, bow.size, color.reverse(hue)); // Dibujo un lazo
}

export default drawWreath;
