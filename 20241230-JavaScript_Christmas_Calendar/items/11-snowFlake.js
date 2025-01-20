import draw from '../utils/draw.js'; // Importo la función draw
import color from '../utils/color.js'; // Importo la función color

function drawSnowFlake(ctx, x, y, size, hue, pattern = [1, 1, 1, 1, 1, 1]) {
  const sum = pattern.reduce((one, two) => one + two, 0);

  ctx.lineWidth = size * 0.05; // Establezco el ancho de la línea
  ctx.strokeStyle = sum == 6 ? color.lightest(hue) : color.normal(hue); // Establezco el color de la línea

  ctx.save(); // Guardo el contexto
  ctx.translate(x, y); // Traslado el origen al centro
  for (let i = 0; i < 6; i++) {
    pattern[i] && drawBranch(ctx, 0, 0, size); // Dibujo una rama
    ctx.rotate(Math.PI / 3); // Roto el canvas 60 grados
  }
  ctx.restore(); // Restauro el contexto

  function drawBranch(ctx, x, y, size) {
    draw.line(ctx, x, y, x + size * 0.5, y); // Dibujo una línea horizontal
    draw.line(ctx, x + size * 0.3, y, x + size * 0.4, y + size * 0.15); // Dibujo una línea diagonal
    draw.line(ctx, x + size * 0.3, y, x + size * 0.4, y - size * 0.15); // Dibujo otra línea diagonal
  }
}

export default drawSnowFlake;
