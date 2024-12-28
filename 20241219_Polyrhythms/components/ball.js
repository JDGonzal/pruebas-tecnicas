import playSound from './sound.js';

class Ball {
  constructor(track, radius, speed, soundFrecuency) {
    this.track = track;
    this.radius = radius;
    this.speed = speed;
    this.soundFrecuency = soundFrecuency;
    this.offset = 0;
    this.round = 0; // Valor de base en PI
    this.center = {};
  }

  move() {
    // Incrementamos el offset
    this.offset += this.speed ;
    // Obtenemos la nueva posición
    const res = this.track.getPosition(this.offset);
    // Asignamos la posición `center` de la `ball`
    this.center = { x: res.x, y: res.y };
    // Condicional para cambiar la `direction`
    if (this.round !== res.round) {
      playSound(this.soundFrecuency, 2);
      this.round = res.round;
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
