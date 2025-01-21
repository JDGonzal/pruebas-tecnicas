import color from '../utils/color.js'; // Importo la función color
import draw from '../utils/draw.js'; // Importo la función draw
import drawBow from './05-bow.js'; // Importo la función drawBow

function drawGingerBread(ctx, x, y, size, hue) {
  const top = y - size / 2; // Defino la parte superior del hombre de gengibre
  // const left = x - size / 2; // Defino la parte superior del hombre de gengibre
  // const right = x + size / 2; // Defino la parte derecha del hombre de gengibre
  const bottom = y + size / 2; // Defino la parte inferior del hombre de gengibre
  // ctx.strokeRect(left, top, size, size); // Dibujo un rectángulo

  // Dibujo la cabeza
  const head = {
    radius: size * 0.22,
    x,
    get y() {
      return top + this.radius;
    },
    color: color.dark(hue),
  };
  draw.circle(ctx, head.x, head.y, head.radius, {
    fillStyle: head.color,
  }); 

  const body = {
    x,
    y: top + head.radius * 1.75,
  };

  // Dibujo las piernas
  const leg = {
    x,
    y: body.y,
    color: color.dark(hue),
    width: size * 0.23,
    angle: Math.PI / 6,
    get footY() {
      return bottom - this.width / 2;
    },
    get offsetX() {
      return Math.cos(this.angle) * this.width;
    },
  };
  // Dibujo la pierna izquierda
  draw.line(ctx, leg.x, leg.y, leg.x + leg.offsetX, leg.footY, {
    strokeStyle: leg.color,
    lineWidth: leg.width,
    lineCap: 'round',
  });
  // Dibujo la pierna derecha
  draw.line(ctx, leg.x, leg.y, leg.x - leg.offsetX, leg.footY, {
    strokeStyle: leg.color,
    lineWidth: leg.width,
    lineCap: 'round',
  });

  // Dibujo los brazos
  const arm = {
    x,
    y: body.y + 0.3 * head.radius,
    width: size * 0.2,
    angle: 0,
    length: 1.5,
    get offsetX() {
      return Math.cos(arm.angle) * arm.width * arm.length;
    },
    get offsetY() {
      return Math.sin(arm.angle) * arm.width * arm.length;
    },
    color: color.dark(hue),
  };
  // Dibujo el brazo derecho
  draw.line(
    ctx,
    arm.x - arm.width / 2,
    arm.y,
    arm.x - arm.offsetX,
    arm.y + arm.offsetY,
    {
      strokeStyle: arm.color,
      lineWidth: arm.width,
      lineCap: 'round',
    }
  );
  // Dibujo el brazo izquierdo
  draw.line(
    ctx,
    arm.x + arm.width / 2,
    arm.y,
    arm.x + arm.offsetX,
    arm.y + arm.offsetY,
    {
      strokeStyle: arm.color,
      lineWidth: arm.width,
      lineCap: 'round',
    }
  );

  const decoration = {
    size: size * 0.025,
    color: color.light(hue),
  };

  // Dibujo los ojos
  const eye = {
    x,
    y: top + head.radius / 1.5,
    offsetX: head.radius / 2.5,
    radius: decoration.size,
    color: decoration.color,
  };
  draw.circle(ctx, eye.x - eye.offsetX, eye.y, eye.radius, {
    fillStyle: eye.color,
  });
  draw.circle(ctx, eye.x + eye.offsetX, eye.y, eye.radius, {
    fillStyle: eye.color,
  });

  // Dibujo la boca
  const mouth = {
    radius: head.radius / 2.5,
    x,
    y: top + head.radius,
    thickness: decoration.size,
    color: decoration.color,
  };
  ctx.beginPath(); // Dibujo la boca
  ctx.strokeStyle = mouth.color;
  ctx.lineWidth = mouth.thickness;
  ctx.arc(mouth.x, mouth.y, mouth.radius, Math.PI / 8, (7 * Math.PI) / 8);
  ctx.stroke();
  ctx.closePath();

  // Dibujo el lazo
  const bow = {
    x: body.x,
    y: body.y,
    size: size * 0.2,
    color: color.reverse(hue),
  };
  drawBow(ctx, bow.x, bow.y, bow.size, bow.color); 

  // Dibujo los botones
  draw.circle(ctx, x, y - decoration.size, decoration.size, {
    fillStyle: decoration.color,
  });
  draw.circle(ctx, x, y + decoration.size * 2, decoration.size, {
    fillStyle: decoration.color,
  });
  draw.circle(ctx, x, y + decoration.size * 5, decoration.size, {
    fillStyle: decoration.color,
  });
}

export default drawGingerBread;
