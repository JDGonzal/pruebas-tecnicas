import color from '../utils/color.js'; // Importo la función color
import draw from '../utils/draw.js';

function drawTree(ctx, x, y, size, hue) {
  const top = y - size / 2; // Defino la parte superior del árbol
  // const left = x - size / 2; // Defino la parte superior del árbol
  // const right = x + size / 2; // Defino la parte derecha del árbol
  const bottom = y + size / 2; // Defino la parte inferior del árbol
  // ctx.strokeRect(left, top, size, size); // Dibujo un rectángulo

  const trunkWidth = size * 0.1; // Defino el ancho del tronco

  // draw.line(ctx, x, bottom, x, bottom - size * 0.4); // Dibujo una línea
  draw.line(ctx, x, bottom, x, y, {
    lineWidth: trunkWidth,
    strokeStyle: color.darkest(hue),
  }); // Dibujo una línea

  const block = {
    // Defino el bloque
    bottom: bottom - size * 0.2, // Defino la parte inferior del bloque
    top: bottom - size * 0.5, // Defino la parte superior del bloque
    width: size * 0.8, // Defino el ancho del bloque
    get left() {
      return x - this.width / 2;
    },
    get right() {
      return x + this.width / 2;
    },
    color: color.normal(hue),
  };

  // base
  ctx.fillStyle = block.color; // Establezco el color de relleno
  ctx.beginPath(); // Comienzo el trazado
  ctx.moveTo(block.left, block.bottom); // Muevo el trazado
  ctx.lineTo(block.right, block.bottom); // Dibujo una línea
  ctx.lineTo(x, block.top); // Dibujo una línea
  ctx.fill(); // Relleno el trazado

  // middle
  block.bottom = bottom - size * 0.4; // Defino la parte inferior del bloque
  block.top = block.bottom - size * 0.3; // Defino la parte superior del bloque
  block.width = size * 0.6; // Defino el ancho del bloque

  ctx.beginPath(); // Comienzo el trazado
  ctx.moveTo(block.left, block.bottom); // Muevo el trazado
  ctx.lineTo(block.right, block.bottom); // Dibujo una línea
  ctx.lineTo(x, block.top); // Dibujo una línea
  ctx.fill(); // Relleno el trazado

    // top
    block.bottom = bottom - size * 0.6; // Defino la parte inferior del bloque
    block.top = top; // Defino la parte superior del bloque
    block.width = size * 0.4; // Defino el ancho del bloque

    ctx.beginPath(); // Comienzo el trazado
    ctx.moveTo(block.left, block.bottom); // Muevo el trazado
    ctx.lineTo(block.right, block.bottom); // Dibujo una línea
    ctx.lineTo(x, block.top); // Dibujo una línea
    ctx.fill(); // Relleno el trazado
}

export default drawTree;
