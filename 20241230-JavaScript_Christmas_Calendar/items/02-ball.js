import color from '../utils/color.js'; // Importo la función color
import draw from '../utils/draw.js';  // Importo la función draw

function drawBall(ctx, x, y, size, hue) {
  const top = y - size / 2;

  // Definimos el anillo de la bola
  const ring = {
    radius: size * 0.1,
    x,
    get y() {
      return top + this.radius;
    },
    lineWidth: size * 0.05,
    color: color.darkest(hue),
  };

  //dibujamos el anillo
  draw.circle(ctx, ring.x, ring.y, ring.radius, {
    strokeStyle: ring.color,
    lineWidth: ring.lineWidth,
    outline: 'inside',
  });

  // Definimos la bola
  const ball = {
    radius: size * 0.45,
    x,
    y() {
      return top + ring.radius + this.radius;
    },
  };

  // Añadimos un resplandor a la bola
  const highlight = {
    x: ball.x - ball.radius * 0.3,
    y: ball.y() - ball.radius * 0.3,
  };

  // Definimos el gradiente radial
  const grd = ctx.createRadialGradient(
    highlight.x, highlight.y, 0,
    highlight.x, highlight.y, ball.radius * 2
  );
  grd.addColorStop(0, color.lightest(hue));
  grd.addColorStop(0.3, color.normal(hue));
  grd.addColorStop(0.8, color.dark(hue));
  grd.addColorStop(1, color.darkest(hue));

  //dibujamos la bola
  draw.circle(ctx, ball.x, ball.y(), ball.radius, {
    fillStyle: grd,
  });

  // const radius = size / 2;
  // ctx.beginPath();
  // ctx.arc(x, y, radius, 0, Math.PI * 2);
  // ctx.fillStyle = 'red';
  // ctx.fill();
  // ctx.closePath();
}

export default drawBall;
