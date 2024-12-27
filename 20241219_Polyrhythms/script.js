import Track from './components/track.js'; // Importo la clase `Track`
import Ball from './components/ball.js'; // Importo la clase `Ball`

const size = 700; // tamaño del canvas
const myCanvas = document.getElementById('canvas'); // Obtengo el canvas
const ctx = myCanvas.getContext('2d'); // Obtengo el contexto del canvas
const tracks = []; // Arreglo vacío de `tracks`
const balls = []; // Arreglo vacío de `balls`
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
  const ballSpeed = 0.04; // Velocidad de la bola

  for (let i = 0; i < N; i++) {
    const trackRadius = trackMinRadius + i * trackStep;
    // Obtengo los dos objetos
    const track = new Track(trackCenter, trackRadius);
    const ball = new Ball(track, ballRadius, ballSpeed);
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
