import color from '../utils/color.js'; // Importo la función color
import draw from '../utils/draw.js'; // Importo la función draw

function drawBell(ctx, x, y, size, hue) {
  const top = y - size / 2; // Defino la parte superior de la campana
  const left = x - size / 2; // Defino la parte superior de la campana
  const right = x + size / 2; // Defino la parte derecha de la campana
  const bottom = y + size / 2; // Defino la parte inferior de la campana

  // Definimos el anillo de la campana
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

  // Definimos el badajo de la campana
  const clapper = {
    radius: size * 0.1,
    x,
    get y() {
      return bottom - this.radius;
    },
    color: color.dark(hue),
  };

  // dibujamos el badajo
  draw.circle(ctx, clapper.x, clapper.y, clapper.radius, {
    fillStyle: clapper.color,
  });

  // Definimos la campana
  const bell = {
    top: top + ring.radius * 2,
    bottom: bottom - clapper.radius,
    color: color.normal(hue),
    controlOffset: size * 0.3,
  };

  // dibujamos la campana
  ctx.beginPath(); // Comienzo el trazado
  ctx.fillStyle = bell.color; // Asigno el color
  ctx.moveTo(x, bell.top); // Muevo a la esquina superior izquierda
  // ctx.lineTo(left, bell.bottom); // Dibujo la línea abajo-izquierda
  ctx.bezierCurveTo(
    // Dibujo la curva
    x - bell.controlOffset, // Punto de control izquierdo
    bell.top, // Punto de control derecho
    x - bell.controlOffset, // Punto de control izquierdo
    bell.bottom, // Punto de control derecho
    left,
    bell.bottom // Punto final
  );
  ctx.lineTo(right, bell.bottom); // Dibujo la línea abajo-derecha
  ctx.bezierCurveTo(
    // Dibujo la curva
    x + bell.controlOffset, // Punto de control izquierdo
    bell.bottom, // Punto de control derecho
    x + bell.controlOffset, // Punto de control izquierdo
    bell.top, // Punto de control derecho
    x,
    bell.top // Punto final
  );
  ctx.fill(); // Relleno
}

export default drawBell;
