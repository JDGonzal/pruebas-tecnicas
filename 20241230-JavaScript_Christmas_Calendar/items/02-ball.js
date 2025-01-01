import draw from '../utils/draw.js';

function drawBall(ctx, x, y, size) {
  const top = y - size / 2;
  const left = x - size / 2;

  // Definimos el anillo de la bola
  const ring = {
    radius: size * 0.1,
    x,
    get y() {
      return top + this.radius;
    },
    lineWidth: size * 0.05,
    color: 'orange',
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
    color: 'red',
  };
  //dibujamos la bola
  draw.circle(ctx, ball.x, ball.y(), ball.radius, {
    fillStyle: ball.color,
  });

  // const radius = size / 2;
  // ctx.beginPath();
  // ctx.arc(x, y, radius, 0, Math.PI * 2);
  // ctx.fillStyle = 'red';
  // ctx.fill();
  // ctx.closePath();
}

export default drawBall;
