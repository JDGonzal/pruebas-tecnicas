import draw from '../utils/draw.js'; // Importo la función draw
import color from '../utils/color.js'; // Importo la función color

function drawCalendar(ctx, x, y, size, hue, day = 15) {
  const top = y - size / 2; // Defino la parte superior del calendario
  const left = x - size / 2; // Defino la parte superior del calendario
  // const right = x + size / 2; // Defino la parte derecha del calendario
  // const bottom = y + size / 2; // Defino la parte inferior del calendario
  // ctx.strokeRect(left, top, size, size); // Dibujo un rectángulo

  const roudness = size * 0.1; // Defino la redondez
  ctx.beginPath(); // Comienzo el trazado
  ctx.fillStyle = color.lightest(hue); // Establezco el color de relleno
  ctx.roundRect(left, top, size, size, roudness); // Dibujo un rectángulo redondeado
  ctx.fill(); // Relleno el trazado

  ctx.save(); // Guardo el estado del contexto
  ctx.clip(); // Establezco la región de recorte para redondear el trazado arriba

  const headerHeight = size * 0.3; // Defino la altura del encabezado
  ctx.fillStyle = color.dark(hue); // Establezco el color de relleno
  ctx.fillRect(left, top, size, headerHeight); // Dibujo un rectángulo

  ctx.closePath(); // Cierro el trazado

  ctx.globalCompositeOperation = 'destination-out'; // Establezco la operación de composición
  const hole = {
    xs: [x - headerHeight, x, x + headerHeight],
    y: top + headerHeight / 2,
    radius: headerHeight / 3,
    color: color.lightest(hue),
    // color: '#BBB',
  };
  hole.xs.forEach((x) => {
    draw.circle(ctx, x, hole.y, hole.radius, {
      fillStyle: hole.color,
    }); // Dibujo un círculo
  }); // Dibujo varios círculos

  ctx.restore(); // Restauro el estado del contexto

  const text = {
    size: size * 0.5,
    x,
    y: y + headerHeight / 2,
  };
  ctx.beginPath(); // Comienzo el trazado
  ctx.fillStyle = color.dark(hue); // Establezco el color de relleno
  ctx.font = `bold ${text.size}px Arial`; // Establezco el tamaño y tipo de fuente
  ctx.textAlign = 'center'; // Establezco la alineación horizontal
  ctx.textBaseline = 'middle'; // Establezco la alineación vertical
  ctx.fillText(day, text.x, text.y); // Dibujo el texto
  ctx.closePath(); // Cierro el trazado
}

export default drawCalendar;
