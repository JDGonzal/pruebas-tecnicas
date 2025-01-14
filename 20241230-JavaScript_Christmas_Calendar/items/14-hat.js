import draw from '../utils/draw.js'; // Importo la función draw
import color from '../utils/color.js'; // Importo la función color

function drawHat(ctx, x, y, size, hue) {
  const top = y - size / 2; // Defino la parte superior del gorro
  const left = x - size / 2; // Defino la parte superior del gorro
  // const right = x + size / 2; // Defino la parte derecha del gorro
  const bottom = y + size / 2; // Defino la parte inferior del gorro
  // ctx.strokeRect(left, top, size, size); // Dibujo un rectángulo

  const ball = {
    radius: size * 0.1,
    x: x,
    get y() {
      return top + this.radius;
    },
    color: color.lightest(hue),
  };

  const width = size * 0.8; // Defino el ancho
  const xRadius = width / 2; // Defino el radio x del arco
  const yRadius = size - ball.radius * 2; // Defino el radio y del arco

  ctx.beginPath(); // Comienzo el trazado
  ctx.fillStyle = color.normal(hue); // Establezco el color de relleno
  ctx.ellipse(x, bottom, xRadius, yRadius, 0, Math.PI, Math.PI * 2); // Dibujo un arco
  ctx.fill(); // Relleno el trazado

  ctx.closePath(); // Cierro el trazado

  draw.circle(ctx, ball.x, ball.y, ball.radius, {
    fillStyle: ball.color,
  }); // Dibujo un círculo

  const sleeve = {
    // Defino la manga
    width,
    height: size * 0.2,
    get y(){return bottom - this.height / 2},
    get left(){return x - this.width / 2},
    get right(){return x + this.width / 2},
    color: color.lightest(hue),
  };
  draw.line(ctx, sleeve.left, sleeve.y, sleeve.right, sleeve.y, {
    lineWidth: sleeve.height,
    strokeStyle: sleeve.color,
    lineCap: 'round',
  }); // Dibujo una línea 
}

export default drawHat;
