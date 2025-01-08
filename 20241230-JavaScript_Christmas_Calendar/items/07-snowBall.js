import color from '../utils/color.js'; // Importo la función color

function drawSnowBall(ctx, x, y, size, hue) {

  drawNoisyBall(ctx, x, y, size, color.normal(hue)); // Llamo la función drawNoisyBall
  const offset = {
    x: x - size * 0.1,
    y: y - size * 0.1,
  };
  // ctx.globalCompositeOperation = 'destination-out'; // Asigno la operación de composición
  ctx.globalCompositeOperation = 'source-atop'; // Asigno la operación de composición
  drawNoisyBall(ctx, offset.x, offset.y, size, color.lightest(hue)); // Llamo la función drawNoisyBall

  function drawNoisyBall(ctx, x, y, size, color) {
    const maxRadius = size / 2; // Defino el radio
    ctx.beginPath(); // Comienzo el trazado
    for (let a = 0; a < Math.PI * 2; a += Math.PI / 60) {
      const radius = maxRadius * (1 - Math.random() * 0.05); // Defino el radio
      const surfaceX = x + radius * Math.cos(a); // Defino la superficie x
      const surfaceY = y + radius * Math.sin(a); // Defino la superficie y
      ctx.lineTo(surfaceX, surfaceY); // Dibujo la línea
    }
    ctx.fillStyle = color; // Asigno el color
    ctx.fill(); // Relleno
  }
}

export default drawSnowBall;
