import playSound from "./sound.js";

class Ball {
  constructor(track, radius, speed, soundFrecuency) {
    this.track = track;
    this.radius = radius;
    this.speed = speed;
    this.soundFrecuency = soundFrecuency;
    this.offset = 0;
    this.direction = 1; // se va a mover entre +1 y -1
    this.center = this.track.getPosition(this.offset);
  }

  move() {
    // Incrementamos el offset
    this.offset += this.speed * this.direction;
    // Obtenemos la nueva posición
    this.center = this.track.getPosition(this.offset);
    // Condicional para cambiar la `direction`
    if (this.center.y > this.track.center.y) {
      this.direction *= -1; // Cambiamos `direction`
      playSound(this.soundFrecuency, 2);
    }
  }

  draw(ctx) {
    ctx.beginPath();
    ctx.arc(this.center.x, this.center.y, this.radius, 0, 2 * Math.PI);
    ctx.strokeStyle = 'white';
    ctx.stroke();
  }
}

export default Ball; // Exporto la clase `Ball` para poder importarla en otro archivo
