import draw from '../utils/draw.js'; // Importo la función draw
import color from '../utils/color.js'; // Importo la función color

function drawSledge(ctx, x, y, size, hue) {
  // const top = y - size / 2; // Defino la parte superior del trineo
  const left = x - size / 2; // Defino la parte superior del trineo
  const right = x + size / 2; // Defino la parte derecha del trineo
  // const bottom = y + size / 2; // Defino la parte inferior del trineo
  // ctx.strokeRect(left, top, size, size); // Dibujo un rectángulo

  const height = size * 0.25; // Defino la altura
  const base = {
    thickness: size * 0.1, // Defino el grosor de la base
    bottom: y + height / 2, // Defino la parte inferior de la base
  };
  const arc = {
    radius: height * 0.4, // Defino el radio del arco
    get x() {
      return right - this.radius - base.thickness / 2;
    }, // Defino la posición x del arco
    get y() {
      return base.bottom - this.radius;
    }, // Defino la posición y del arco
  };

  ctx.beginPath(); // Comienzo el trazado
  ctx.strokeStyle = color.normal(hue); // Establezco el color de la línea
  ctx.lineWidth = base.thickness; // Establezco el ancho de la línea
  ctx.arc(arc.x, arc.y, arc.radius, -Math.PI / 2, Math.PI / 2); // Dibujo un arco
  ctx.lineTo(left, base.bottom); // Dibujo una línea
  ctx.stroke(); // Realizo el trazado
  ctx.closePath(); // Finalizo el trazado

  const leg = {
    bottom: base.bottom, // Defino la parte inferior de la pata
    top: base.bottom - height, // Defino la parte superior de la pata
    thickness: base.thickness * 0.5, // Defino el grosor de la pata
  };
  const leftLeg = {
    ...leg, // Copio las propiedades de la pata
    x: left + size * 0.2,
  }; // Defino la pata izquierda
  const rightLeg = {
    ...leg, // Copio las propiedades de la pata
    x: right - size * 0.4,
  }; // Defino la pata derecha

  ctx.lineWidth = leg.thickness; // Establezco el ancho de la línea
  ctx.strokeStyle = color.light(hue); // Establezco el color de la línea
  draw.line(ctx, leftLeg.x, leftLeg.bottom, leftLeg.x, leftLeg.top); // Dibujo una línea
  draw.line(ctx, rightLeg.x, rightLeg.bottom, rightLeg.x, rightLeg.top); // Dibujo una línea

  const bench = {
    y: leg.top, // Defino la parte superior del banco
    left,
    right: rightLeg.x + size * 0.2, // Defino la parte inferior del banco
  };
  draw.line(ctx, bench.left, bench.y, bench.right, bench.y); // Dibujo una línea
}

export default drawSledge;
