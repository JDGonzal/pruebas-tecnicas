import draw from '../utils/draw.js'; // Importo la función draw
import color from '../utils/color.js'; // Importo la función color
import drawSnowFlake from './11-snowFlake.js'; // Importo la función drawSnowFlake

function drawReindeer(ctx, x, y, size, hue) {
  // const top = y - size / 2; // Defino la parte superior del reno
  // const left = x - size / 2; // Defino la parte superior del reno
  // const right = x + size / 2; // Defino la parte derecha del reno
  // const bottom = y + size / 2; // Defino la parte inferior del reno
  // ctx.strokeRect(left, top, size, size); // Dibujo un rectángulo

  drawSnowFlake(ctx, x, y - size * 0.05, size, hue, [0, 0, 0, 0, 1, 1]); // Dibujo un copo de nieve a moso de cuernos

  const headRadius = size * 0.2; // Defino el radio de la cabeza
  draw.circle(ctx, x, y, headRadius, {
    fillStyle: color.dark(hue),
  }); // Dibujo la cabeza

  const eye = {
    radius: size * 0.05,
    xOffset: size * 0.1,
    y,
  };
  draw.circle(ctx, x - eye.xOffset, eye.y, eye.radius, {
    fillStyle: color.darkest(hue),
  }); // Dibujo el ojo izquierdo
  draw.circle(ctx, x + eye.xOffset, eye.y, eye.radius, {
    fillStyle: color.darkest(hue),
  }); // Dibujo el ojo derecho

  const snout = {
    x,
    y: y + size * 0.25,
    xRadius: size * 0.3,
    yRadius: size * 0.25,
  };
  draw.ellipse(ctx, snout.x, snout.y, snout.xRadius, snout.yRadius, {
    fillStyle: color.light(hue),
  }); // Dibujo el hocico

  // Dibujo la nariz
  draw.circle(ctx, x, y + size * 0.2, size * 0.1, {
    fillStyle: 'red',
  });
}

export default drawReindeer;
