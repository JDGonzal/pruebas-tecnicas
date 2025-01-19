import color from '../utils/color.js'; // Importo la función color
import drawBell from './06-bell.js'; // Importo la función drawBell
import drawBow from './05-bow.js'; // Importo la función drawBow

function drawBells(ctx, x, y, size, hue) {
  // const top = y - size / 2; // Defino la parte superior de las campanas
  // const left = x - size / 2; // Defino la parte superior de las campanas
  // const right = x + size / 2; // Defino la parte derecha de las campanas
  // const bottom = y + size / 2; // Defino la parte inferior de las campanas
  // ctx.strokeRect(left, top, size, size); // Dibujo un rectángulo

  const bell = {
    size: size * 0.5,
    y: y + size * 0.15,
    xOffset: size * 0.2,
    rotation: Math.PI / 6,
  };

  ctx.save(); // Guardo el contexto

  ctx.translate(x, bell.y); // Traslado el contexto
  ctx.rotate(bell.rotation); // Roto el contexto
  drawBell(ctx, -bell.xOffset, 0, bell.size, hue); // Dibujo la campana
  ctx.rotate(-2 * bell.rotation); // Roto el contexto
  drawBell(ctx, +bell.xOffset, 0, bell.size, hue); // Dibujo la campana(

  ctx.restore(); // Restauro el contexto

  const bow = {
    size: size * 0.7,
    y: y - size * 0.15,
  };
  drawBow(ctx, x, bow.y, bow.size, color.reverse(hue)); // Dibujo el lazo
}

export default drawBells;
