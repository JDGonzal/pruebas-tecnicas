const draw = {};

draw.circle = function (ctx, x, y, radius, options) {
  ctx.beginPath();
  if (options.outline === 'inside') {
    radius -= options.lineWidth / 2;
  }
  ctx.arc(x, y, radius, 0, Math.PI * 2);
  Object.assign(ctx, options);

  options.fillStyle && ctx.fill();
  options.strokeStyle && ctx.stroke();

  ctx.closePath();
}

draw.ellipse = function (ctx, x, y, xRadius, yRadius, options) {
  ctx.beginPath();
  ctx.ellipse(x, y, xRadius, yRadius, 0, 0, Math.PI * 2);
  Object.assign(ctx, options);

  options.fillStyle && ctx.fill();
  options.strokeStyle && ctx.stroke();

  ctx.closePath();
}

draw.line = function (ctx, fromX, fromY, toX, toY, options) {
  ctx.beginPath();
  ctx.moveTo(fromX, fromY);
  ctx.lineTo(toX, toY);
  Object.assign(ctx, options);
  ctx.stroke();

  ctx.closePath();
}

export default draw;
