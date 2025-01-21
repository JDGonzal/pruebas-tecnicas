import draw from '../utils/draw.js'; // Importo la función draw
import color from '../utils/color.js'; // Importo la función color

function drawLights(ctx, x, y, size, hue) {
  const top = y - size / 2; // Defino la parte superior de las luces
  const left = x - size / 2; // Defino la parte superior de las luces
  // const right = x + size / 2; // Defino la parte derecha de las luces
  // const bottom = y + size / 2; // Defino la parte inferior de las luces
  // ctx.strokeRect(left, top, size, size); // Dibujo un rectángulo

  const numberOfLights = 3; // Defino la cantidad de luces

  // defino el bombillo
  const bulb = {
    position: 0,
    width: size / numberOfLights,
    y_radius: ((size / numberOfLights) * 0.9) / 2,
    get x_radius() {
      return this.y_radius / 3;
    },
    get x() {
      return left + this.width / 2 + this.position * this.width;
    },
    get y() {
      return top + this.y_radius + (size / numberOfLights) * 0.1;
    },
    get left() {
      return left + this.width * this.position;
    },
    get right() {
      return this.left + this.width;
    },
    color: color.normal(hue),
    glow: color.lightest(hue),
  };

  // Defino el soporte
  const holder = {
    size: bulb.x_radius,
    bottom: bulb.x_radius * 1.5,
    get x() {
      return bulb.x;
    },
    y: bulb.y - bulb.y_radius,
    get left() {
      return this.x - this.size / 2;
    },
    top,
    color: color.darkest(hue),
  };

  // Defino el cordón
  const cord = {
    get x() {
      return holder.x;
    },
    y: top + holder.bottom,
    color: color.darkest(hue),
  };

  function drawHolder() {
    ctx.fillStyle = holder.color;
    ctx.fillRect(holder.left, holder.top, holder.size, holder.bottom);
  }

  function drawCords() {
    ctx.strokeStyle = holder.color;
    ctx.beginPath();
    ctx.moveTo(bulb.left, cord.y);
    ctx.bezierCurveTo(
      holder.x - bulb.width / 2,
      cord.y,
      holder.x,
      cord.y,
      holder.x,
      top
    );
    ctx.bezierCurveTo(
      holder.x,
      cord.y,
      holder.x + bulb.width / 2,
      cord.y,
      bulb.right,
      cord.y
    );
    ctx.stroke();
  }

  function drawBulb() {
    draw.ellipse(ctx, bulb.x, bulb.y, bulb.x_radius, bulb.y_radius, {
      fillStyle: bulb.color,
      shadowColor: bulb.glow,
      shadowBlur: bulb.x_radius * 0.7,
      shadowOffsetX: 0,
      shadowOffsetY: 0,
    });
  }

  for (let index = 0; index < numberOfLights; index++) {
    bulb.position = index;
    bulb.color = color.normal(hue + (360 / numberOfLights) * index);
    drawHolder();
    drawCords();
    drawBulb();
  }
}

export default drawLights;
