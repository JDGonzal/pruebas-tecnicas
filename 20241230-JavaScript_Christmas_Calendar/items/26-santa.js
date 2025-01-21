import draw from '../utils/draw.js'; // Importo la función draw
import color from '../utils/color.js'; // Importo la función color

function drawSanta(ctx, x, y, size, hue) {
  const top = y - size / 2; // Defino la parte superior de Santa
  // const left = x - size / 2; // Defino la parte superior de Santa
  // const right = x + size / 2; // Defino la parte derecha de Santa
  // const bottom = y + size / 2; // Defino la parte inferior de Santa
  // ctx.strokeRect(left, top, size, size); // Dibujo un rectángulo

  // Barba
  const beard = {
    x,
    y: y + size / 8,
    xRadius: size * 0.2,
    yRadius: size * 0.35,
    color: 'white',
  };
  draw.ellipse(ctx, beard.x, beard.y, beard.xRadius, beard.yRadius, {
    fillStyle: beard.color,
  }); // Dibujamos la barba

  // Cara
  const face = {
    x,
    y: beard.y - size * 0.05,
    radius: size * 0.2,
    color: 'pink',
  };
  draw.circle(ctx, face.x, face.y, face.radius, {
    fillStyle: face.color,
  }); // Dibujamos la cara

  // Bigote
  const mustache = {
    y: face.y + size * 0.05,
    offset: size * 0.075,
    xRadius: size * 0.1,
    yRadius: size * 0.04,
    angle: Math.PI / 8,
    color: beard.color,
  }; // Definimos los bigotes

  // Dibujamos los bigotes
  ctx.save(); //guardamos el contexto actual
  ctx.translate(x, mustache.y);
  ctx.rotate(-mustache.angle);
  draw.ellipse(ctx, -mustache.offset, 0, mustache.xRadius, mustache.yRadius, {
    fillStyle: mustache.color,
  });
  ctx.rotate(2 * mustache.angle);
  draw.ellipse(ctx, +mustache.offset, 0, mustache.xRadius, mustache.yRadius, {
    fillStyle: mustache.color,
  });
  ctx.restore(); // restauramos el contexto guardado

  // Ojos
  const eye = {
    offset: size * 0.075,
    y: face.y - size * 0.025,
    radius: size * 0.025,
    color: color.darkest(hue),
  };
  draw.circle(ctx, x - eye.offset, eye.y, eye.radius, {
    fillStyle: eye.color,
  });
  draw.circle(ctx, x + eye.offset, eye.y, eye.radius, {
    fillStyle: eye.color,
  });

  // Gorro
  const hat = {
    x: face.x + face.radius,
    y: face.y - size / 6,
    radius: face.radius * 2,
    color: 'red',
  };
  // dibujamos el gorro
  ctx.beginPath();
  ctx.fillStyle = hat.color;
  ctx.moveTo(hat.x, hat.y);
  ctx.arc(hat.x, hat.y, hat.radius, Math.PI, Math.PI * 1.5);
  ctx.fill();
  ctx.closePath();
  // Bola o pompón del gorro
  draw.circle(ctx, hat.x, top + size / 10, size / 10, {
    fillStyle: 'white',
  });

  // Borde del gorro
  const rim = {
    x,
    y: hat.y,
    radius: face.radius,
    height: size * 0.1,
    color: 'white',
  };

  ctx.save(); // guardamos el estado actual
  ctx.beginPath();
  ctx.strokeStyle = rim.color;
  ctx.lineWidth = rim.height;
  ctx.lineCap = 'round';
  ctx.moveTo(rim.x - rim.radius, rim.y);
  ctx.bezierCurveTo(
    rim.x - rim.radius,
    rim.y - rim.height / 2,
    rim.x + rim.radius,
    rim.y - rim.height / 2,
    rim.x + rim.radius,
    rim.y
  );
  ctx.stroke();
  ctx.closePath();
  ctx.restore(); // restauramos el estado guardado
}

export default drawSanta;
