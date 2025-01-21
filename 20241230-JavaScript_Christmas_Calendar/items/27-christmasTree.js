import draw from '../utils/draw.js'; // Importo la función draw
import color from '../utils/color.js'; // Importo la función color
import drawTree from './13-tree.js'; // Importo la función drawTree
import drawStar from './01-star.js'; // Importo la función drawStar
import drawBall from './02-ball.js'; // Importo la función drawBall

function drawChristmasTree(ctx, x, y, size, hue) {
  const top = y - size / 2; // Defino la parte superior de árbol navideño
  const left = x - size / 2; // Defino la parte superior de árbol navideño
  const right = x + size / 2; // Defino la parte derecha de árbol navideño
  const bottom = y + size / 2; // Defino la parte inferior de árbol navideño
  // ctx.strokeRect(left, top, size, size); // Dibujo un rectángulo

  // Dibujo el árbol navideño
  const tree = {
    size: size * 0.9,
    x,
    get y() {
      return bottom - this.size / 2;
    },
    get top() {
      return bottom - this.size;
    },
    hue: 90, // green
  };
  drawTree(ctx, tree.x, tree.y, tree.size, tree.hue);

  // Dibujo la estrella
  const star = {
    size: size * 0.2,
    x,
    y: tree.top,
    hue: 30, // orange
  };
  drawStar(ctx, star.x, star.y, star.size, star.hue);
  drawStar(ctx, star.x, star.y, star.size / 2, 50);

  // Funciones para las bolas
  function distance(p1, p2) {
    return Math.hypot(p1.x - p2.x, p1.y - p2.y);
  }

  function lerp(a, b, t) {
    return a + (b - a) * t;
  }

  // Las Bolas
  const balls = [];
  const ballSize = size * 0.08;
  const tryCount = 1000;
  for (let i = 1; i <= tryCount; i++) {
    const newBall = {
      x: lerp(left, right, Math.random()),
      y: lerp(top, bottom, Math.random()),
    };

    if (balls.some((b) => distance(b, newBall) < ballSize)) {
      continue;
    }

    const ballTop = newBall.y - ballSize / 2;
    const imgData = ctx.getImageData(newBall.x, ballTop, 1, 1);
    if (imgData.data[1] != 255) {
      // not green
      continue;
    }
    // Cargamos cada bola al arreglo
    balls.push(newBall);
  }
  // Dibujo las bolas
  balls.forEach((b) => {
    const randomNonGreenHue = lerp(180, 360, Math.random());
    drawBall(ctx, b.x, b.y, ballSize, randomNonGreenHue);
  });
}

export default drawChristmasTree;
