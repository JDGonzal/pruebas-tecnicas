class Ball {
  constructor(track, radius, speed) {
    this.track = track;
    this.radius = radius;
    this.speed = speed;
    this.offset = 0;
    this.center = this.track.getPosition(this.offset);
  }

  move() {
    this.offset += this.speed; // Incrementamos el offset
    this.center = this.track.getPosition(this.offset); // Obtenemos la nueva posición
  }

  draw(ctx) {
    ctx.beginPath();
    ctx.arc(this.center.x, this.center.y, this.radius, 0, 2 * Math.PI);
    ctx.strokeStyle = 'white';
    ctx.stroke();
  }
}

export default Ball; // Exporto la clase `Ball` para poder importarla en otro archivo
