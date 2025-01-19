import draw from '../utils/draw.js'; // Importo la función draw
import color from '../utils/color.js'; // Importo la función color
import drawSnowBall from './07-snowBall.js'; // Importo la función drawSnowBall

function drawSnowMan(ctx, x, y, size, hue) {
  const top = y - size / 2; // Defino la parte superior del Hombre de Nieve
  // const left = x - size / 2; // Defino la parte superior del Hombre de Nieve
  // const right = x + size / 2; // Defino la parte derecha del Hombre de Nieve
  // const bottom = y + size / 2; // Defino la parte inferior del Hombre de Nieve
  // ctx.strokeRect(left, top, size, size); // Dibujo un rectángulo

  const bottomBall = {
    size: size * 0.6,
    x,
    y: y + size * 0.2,
  };
  drawSnowBall(ctx, bottomBall.x, bottomBall.y, bottomBall.size, hue); // Dibujo la bola inferior

  const topBall = {
    size: size * 0.4,
    x,
    y: y - size * 0.2,
  };
  drawSnowBall(ctx, topBall.x, topBall.y, topBall.size, hue); // Dibujo la bola superior

  const eye = {
    radius: size * 0.03,
    xOffset: size * 0.06,
    y: topBall.y,
  };

  draw.circle(ctx, x - eye.xOffset, eye.y, eye.radius, {
    fillStyle: color.darkest(hue),
  }); // Dibujo el ojo izquierdo
  draw.circle(ctx, x + eye.xOffset, eye.y, eye.radius, {
    fillStyle: color.darkest(hue),
  }); // Dibujo el ojo derecho

  const hat = {
    width: size * 0.3,
    height: size * 0.2,
    x,
    bottom: topBall.y - size * 0.05,
    top,
    brimHeight: size * 0.1,
    brimWidth: size * 0.4,
    hue: color.reverse(hue),
  };

  draw.line(ctx, hat.x, hat.bottom, hat.x, hat.top, {
    lineWidth: hat.width,
    strokeStyle: color.dark(hat.hue),
  });
  draw.line(ctx, hat.x , hat.bottom, hat.x , hat.bottom - hat.brimHeight, {
    lineWidth: hat.brimWidth,
    strokeStyle: color.normal(hat.hue),
  });
}

export default drawSnowMan;
