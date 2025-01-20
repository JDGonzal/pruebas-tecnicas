import color from '../utils/color.js'; // Importo la función color
import drawSledge from './12-sledge.js'; // Importo la función drawSledge
import drawSock from './03-sock.js'; // Importo la función drawSock

function drawSkate(ctx, x, y, size, hue) {
  // const top = y - size / 2; // Defino la parte superior del patín
  // const left = x - size / 2; // Defino la parte superior del patín
  // const right = x + size / 2; // Defino la parte derecha del patín
  // const bottom = y + size / 2; // Defino la parte inferior del patín
  // ctx.strokeRect(left, top, size, size); // Dibujo un rectángulo

  const sledge = {
    x,
    bottom: y + size * 0.35,
    size: size * 0.9,
  };
  drawSledge(ctx, sledge.x, sledge.bottom, sledge.size, hue);

  const sock = {
    x : x - size * 0.25,
    y: y + size * 0.05,
    size: size * 1.1,
  };
  drawSock(ctx, sock.x, sock.y, sock.size, color.reverse(hue), 0);
}

export default drawSkate;
