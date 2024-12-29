class Track {
  constructor(center, radius) {
    this.center = center;
    this.radius = radius;
    this.period = Math.PI;
  }

  getPosition(offset) {
    return {
      x: this.center.x + Math.cos(offset) * this.radius,
      y: this.center.y - Math.abs(Math.sin(offset)) * this.radius,
      round: Math.floor(offset / this.period),
    };
  }

  draw(ctx) {
    ctx.beginPath();
    // ctx.arc(this.center.x, this.center.y, this.radius, 0, 2 * this.period);
    for (let a = 0; a < 2 * this.period; a += 0.01) {
      const pos = this.getPosition(a);
      ctx.lineTo(pos.x, pos.y);
    }
    ctx.closePath(); // Cierro el círculo o figura de muchos lados
    ctx.strokeStyle = 'white';
    ctx.stroke();
  }
}

export default Track; // Exporto la clase `Track` para poder importarla en otro archivo
