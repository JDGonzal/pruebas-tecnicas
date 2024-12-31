function drawStar(ctx, x, y, size) {
  const outerRadius = size / 2; // Defino el radio externo
  const innerRadius = size / 5; // Defino el radio interno
  const pointCount = 10; // Defino la cantidad de puntos
  ctx.beginPath(); // Comienzo el trazo
  for (let i = 0; i < pointCount; i++) {
    const angle = (i / pointCount) * Math.PI * 2; // Defino el ángulo
    const radius = (i % 2 === 0) ? outerRadius : innerRadius; // Defino el radio
    const surfaceX = x + radius * Math.sin(angle); // Defino la superficie x
    const surfaceY = y - radius * Math.cos(angle); // Defino la superficie y
    ctx.lineTo(surfaceX, surfaceY); // Dibujo la línea
  }
  // const hue = Math.floor(Math.random() * 360); // Defino el color
  // ctx.fillStyle = `hsl(${hue}, 50%, 50%)`; // Asigno el color
  ctx.fillStyle = 'yellow'; // Asigno el color
  ctx.fill(); // Relleno

  // ctx.fillStyle = 'yellow'; // Asigno el color
  // ctx.beginPath(); // Comienzo el trazo
  // ctx.moveTo(x, y - size / 2); // Muevo el trazo
  // for (let i = 0; i < 10; i++) {
  //   const angle = (i * Math.PI) / 5; // Defino el ángulo
  //   const radius = i % 2 === 0 ? size * 0.5 : size * 0.2; // Defino el radio
  //   ctx.lineTo(x + radius * Math.sin(angle), y - radius * Math.cos(angle)); // Dibujo la línea
  // }
  // ctx.closePath(); // Cierro el trazo
  // ctx.fill(); // Relleno
}

export default drawStar;
