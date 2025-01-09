import draw from '../utils/draw.js'; // Importo la función draw
import color from '../utils/color.js'; // Importo la función color

function drawCandle(ctx, x, y, size, hue) {
  const top = y - size / 2; // Defino la parte superior de la vela
  const left = x - size / 2; // Defino la parte superior de la vela
  const right = x + size / 2; // Defino la parte derecha de la vela
  const bottom = y + size / 2; // Defino la parte inferior de la vela

  const stick = {
    // Defino el palo o cuerpo de la vela
    width: size * 0.3,
    height: size * 0.7,
    x: x,
    get bottom() {
      return bottom - this.yRadius;
    },
    get top() {
      return this.bottom - this.height + this.yRadius;
    },
    get xRadius() {
      return this.width / 2;
    },
    get yRadius() {
      return this.xRadius / 2;
    },
    color: color.dark(hue),
    lightColor: color.lightest(hue),
  };

  draw.line(ctx, stick.x, stick.top, stick.x, stick.bottom, {
    strokeStyle: stick.color,
    lineWidth: stick.width,
  }); // Dibujo el palo

  draw.ellipse(ctx, stick.x, stick.bottom, stick.xRadius, stick.yRadius, {
    fillStyle: stick.color,
  }); // Dibujo la base

  draw.ellipse(ctx, stick.x, stick.top, stick.xRadius, stick.yRadius, {
    fillStyle: stick.lightColor,
  }); // Dibujo la base

  const flame = {
    // Defino la llama
    width: stick.width * 0.3,
    height: size - stick.height,
    x: x,
    get xRadius() {
      return this.width / 2;
    },
    get yRadius() {
      return this.height / 2;
    },
    get y() {
      return stick.top - this.yRadius;
    },
    color: color.normal(60), // Yellow o Amarillo
  };

  draw.ellipse(ctx, flame.x, flame.y, flame.xRadius, flame.yRadius, {
    fillStyle: flame.color,
  }); // Dibujo la llama
}

export default drawCandle;
