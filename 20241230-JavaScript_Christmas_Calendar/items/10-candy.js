import draw from '../utils/draw.js'; // Importo la función draw
import color from '../utils/color.js'; // Importo la función color

function drawCandy(ctx, x, y, size, hue) {
  const top = y - size / 2; // Defino la parte superior del dulce
  const left = x - size / 2; // Defino la parte superior del dulce
  const right = x + size / 2; // Defino la parte derecha del dulce
  const bottom = y + size / 2; // Defino la parte inferior del dulce

  const ball = {
    // Defino la bola de caramelo
    x,
    y,
    radius: size / 4,
    get top() {
      return y - this.radius;
    },
    get bottom() {
      return y + this.radius;
    },
    color: color.normal(hue),
  };

  draw.circle(ctx, ball.x, ball.y, ball.radius, {
    fillStyle: ball.color,
  }); // Dibujo la bola de caramelo

  ctx.save(); // Guardo el contexto
  ctx.clip(); // Establezco la bola de caramelo como la región de recorte

  ctx.beginPath(); // Comienzo el trazo
  ctx.moveTo(top, left); // Muevo el trazo a la esquina superior izquierda
  ctx.lineTo(bottom, right); // Dibujo una línea hasta la esquina superior derecha
  ctx.strokeStyle = color.lightest(hue); // Establezco el color del trazo
  ctx.lineWidth = size; // Establezco el ancho del trazo
  const stripeWidth = size * 0.05; // Defino el ancho de la franja
  ctx.setLineDash([stripeWidth, stripeWidth]); // Establezco el patrón de la línea discontinua
  ctx.stroke(); // Dibujo el trazo

  ctx.restore(); // Restauro el contexto

  ctx.beginPath(); // Comienzo el trazo
  ctx.moveTo(x, ball.top); // Muevo el trazo a la esquina superior derecha
  ctx.arc(x, ball.top, ball.radius, (5 * Math.PI) / 4, (7 * Math.PI) / 4); // Dibujo un arco de 180 grados
  ctx.fill(); // Relleno el arco
  ctx.beginPath(); // Comienzo el trazo
  ctx.moveTo(x, ball.bottom); // Muevo el trazo a la esquina superior derecha
  ctx.arc(x, ball.bottom, ball.radius, Math.PI / 4, (3 * Math.PI) / 4); // Dibujo un arco de 180 grados
  ctx.fill(); // Relleno el arco
}

export default drawCandy;
