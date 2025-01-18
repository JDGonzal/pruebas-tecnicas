import draw from '../utils/draw.js'; // Importo la función draw
import color from '../utils/color.js'; // Importo la función color
import drawSnowFlake from './11-snowflake.js'; // Importo la función drawSnowflake

function drawCookie(ctx, x, y, size, hue) {
  // const top = y - size / 2; // Defino la parte superior del galleta
  // const left = x - size / 2; // Defino la parte superior del galleta
  // const right = x + size / 2; // Defino la parte derecha del galleta
  // const bottom = y + size / 2; // Defino la parte inferior del galleta
  // ctx.strokeRect(left, top, size, size); // Dibujo un rectángulo

  const radius = size / 4; // Defino el radio

  const length = 2 * Math.PI * radius; // Defino la longitud
  const dashLength = length / 6; // Defino la longitud del guión
  
  ctx.setLineDash([0, dashLength]); // Establezco la longitud del guión

  draw.circle(ctx, x, y, radius, {
    lineWidth: radius * 2,
    strokeStyle: color.dark(hue),
    lineCap: 'round',
  });

  ctx.setLineDash([]); // Establezco la longitud del guión

  // ctx.filter = 'blur(1px)'; // Aplico un filtro de desenfoque
  // ctx.filter = 'brightness(1)'; // Aplico un filtro de brillo
  // ctx.filter = 'contrast(1)'; // Aplico un filtro de contraste
  ctx.filter = 'grayscale(1)'; // Aplico un filtro de escala de grises
  drawSnowFlake(ctx, x, y, size * 0.8, hue); // Dibujo un copo de nieve
}

export default drawCookie;
