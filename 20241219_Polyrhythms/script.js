import Track from './components/track.js'; // Importo la clase `Track`
import Ball from './components/ball.js'; // Importo la clase `Ball`

const size = 700; // tamaño del canvas
const myCanvas = document.getElementById('canvas'); // Obtengo el canvas
const ctx = myCanvas.getContext('2d'); // Obtengo el contexto del canvas
const tracks = []; // Arreglo vacío de `tracks`
const balls = []; // Arreglo vacío de `balls`
const soundFrecuencies = [
  1760, 1567.98, 1396.91, 1318.51, 1174.66, 1046.5, 987.77, 880, 783.99, 698.46,
  659.25, 587.33, 523.25, 493.88, 440, 392, 349.23, 329.63, 293.66, 261.63,
]; // Arreglo de `soundFrecuencies`
const N = 20; // Número total de elementos

// Cuando se muestra la pantalla
window.onload = () => {
  setInit(); // Llamo esta función
};

// Función para inicializar el ambiente
const setInit = () => {
  myCanvas.width = size;
  myCanvas.height = size;

  const trackCenter = { x: size / 2, y: size / 2 }; // Centro del canvas
  const trackMinRadius = size / 10; // Radio del círculo o `track`
  const trackStep = 15; // Separación entre `track`
  const ballRadius = 10; // Radio de la bola
  const ballMinSpeed = 0.01; // Velocidad inicial de la bola
  const ballSpeedStep = -0.0001; // Incremento de la velocidad de la bola

  for (let i = 0; i < N; i++) {
    // Calculo el radio de cada track
    const trackRadius = trackMinRadius + i * trackStep;
    // Cambio la velociad de cada bola
    const ballSpeed = ballMinSpeed + i * ballSpeedStep;
    // Asigno una frecuencia a cada bola
    const ballSoundFrecuency = soundFrecuencies[i];
    // Obtengo los dos objetos
    const track = new Track(trackCenter, trackRadius);
    const ball = new Ball(track, ballRadius, ballSpeed, ballSoundFrecuency);
    // Añado a los arreglos
    tracks.push(track);
    balls.push(ball);
  }

  animate(); // Llamo la función
};

// Función para que se llame a sí misma cada segundo
function animate() {
  ctx.clearRect(0, 0, size, size); // Limpio el canvas
  tracks.forEach((track) => {
    track.draw(ctx); // Dibujo el círculo
  });

  balls.forEach((ball) => {
    ball.move();
    ball.draw(ctx); // Dibujo la bola
  });

  requestAnimationFrame(() => animate()); // Hago la animación
}
