import draw from '../utils/draw.js'; // Importo la función draw
import color from '../utils/color.js'; // Importo la función color

function drawGlove(ctx, x, y, size, hue) {
  const top = y - size / 2; // Defino la parte superior del guante
  const left = x - size / 2; // Defino la parte superior del guante
  const right = x + size / 2; // Defino la parte derecha del guante
  const bottom = y + size / 2; // Defino la parte inferior del guante

  const palmWidth = size / 2;
  const radius = palmWidth / 2;
  const thumbWidth = palmWidth / 2;
  const sleeveWidth = palmWidth * 1.1;

  draw.line(ctx, x, top + radius, x, bottom - radius, {
    lineWidth: palmWidth,
    lineCap: 'round',
    strokeStyle: color.normal(hue),
  }); // Dibujo los cuatro dedos

  draw.line(ctx, x, top + radius, x - radius, y, {
    lineWidth: thumbWidth,
    lineCap: 'round',
    strokeStyle: color.normal(hue),
  }); // Dibujo el pulgar

  draw.line(ctx, x, top, x, top + radius, {
    lineWidth: sleeveWidth,
    lineCap: 'butt',
    strokeStyle: color.lightest(hue),
  }); // Dibujo la manga
  
}

export default drawGlove;
