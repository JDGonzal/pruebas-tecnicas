import draw from '../utils/draw.js'; // Importo la función draw
import color from '../utils/color.js'; // Importo la función color
import drawBow from './05-bow.js'; // Importo la función drawBow

function drawPresent(ctx, x, y, size, hue) {
  // const top = y - size / 2; // Defino la parte superior del regalo
  // const left = x - size / 2; // Defino la parte superior del regalo
  // const right = x + size / 2; // Defino la parte derecha del regalo
  const bottom = y + size / 2; // Defino la parte inferior del regalo
  // ctx.strokeRect(left, top, size, size); // Dibujo un rectángulo

  const box = {
    height: size * 0.8,
    width: size * 0.9,
    x,
    bottom,
    get top() {
      return this.bottom - this.height;
    },
    color: color.dark(hue),
  };

  draw.line(ctx, box.x, box.top, box.x, box.bottom, {
    lineWidth: box.width,
    strokeStyle: box.color,
  });

  const ropeWidth = size * 0.1; //  Defino el ancho de la cuerda
  draw.line(ctx, box.x, box.top, box.x, box.bottom, {
    lineWidth: ropeWidth,
    strokeStyle: color.normal(color.reverse(hue)),
  });

  const lid = {
    height: size * 0.2,
    width: size,
    x,
    top: box.top,
    get bottom() {
      return this.top + this.height;
    },
    color: color.light(hue),
  };
  drawBow(ctx, lid.x, lid.top, lid.width * 0.8, color.reverse(hue)); // Dibujo el lazo
  draw.line(ctx, lid.x, lid.top, lid.x, lid.bottom, {
    lineWidth: lid.width,
    strokeStyle: lid.color,
  });
}

export default drawPresent;
