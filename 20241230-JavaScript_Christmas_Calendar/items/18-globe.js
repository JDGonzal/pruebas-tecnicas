import draw from '../utils/draw.js'; // Importo la función draw
import color from '../utils/color.js'; // Importo la función color
import drawTree from './13-tree.js'; // Importo la función drawTree

function drawGlobe(ctx, x, y, size, hue) {
  const top = y - size / 2; // Defino la parte superior del galleta
  // const left = x - size / 2; // Defino la parte superior del galleta
  // const right = x + size / 2; // Defino la parte derecha del galleta
  const bottom = y + size / 2; // Defino la parte inferior del galleta
  // ctx.strokeRect(left, top, size, size); // Dibujo un rectángulo

  const ball = {
    radius: size * 0.45, // Defino el radio
    x,
    get y() {
      return top + this.radius;
    },
    color: 'rgba( 255, 255, 255, 0.3', // Defino el color a `white`
  };

  // snow
  ctx.fillStyle = 'white'; // Defino el color a `white`
  ctx.beginPath(); // Comienzo el trazado
  ctx.arc(ball.x, ball.y, ball.radius, 0.3, Math.PI - 0.5); // Dibujo un círculo  
  ctx.fill(); // Relleno el trazado

  const tree = {
    size: ball.radius * 1.2,
    x,
    y: ball.y,
    hue: color.reverse(hue), // Defino el color
  };

  drawTree(ctx, tree.x, tree.y, tree.size, tree.hue); // Llamo la función drawTree

  draw.circle(ctx, ball.x, ball.y, ball.radius, {
    fillStyle: ball.color,
  });

  const base = {
    height: size * 0.15,
    width: size * 0.6,
    get y() {
      return bottom - base.height / 2;
    },
    get left() {
      return x - base.width / 2;
    },
    get right() {
      return x + base.width / 2;
    },
    color: color.dark(hue), // Defino el color
  };

  draw.line(ctx, base.left, base.y, base.right, base.y, {
    strokeStyle: base.color,
    lineWidth: base.height,
    lineCap: 'round',
  });
}

export default drawGlobe;
