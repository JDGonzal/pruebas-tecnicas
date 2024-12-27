import Track from './components/track.js'; // Importo la clase `Track`
import Ball from './components/ball.js'; // Importo la clase `Ball`

  const size = 700; // tamaño del canvas  
  const myCanvas = document.getElementById('canvas'); // Obtengo el canvas
  const ctx = myCanvas.getContext('2d'); // Obtengo el contexto del canvas

// Cuando se muestra la pantalla
window.onload = () => {
  setInit(); // Llamo esta función
};

// Función para inicializar el ambiente
const setInit = () => {
  myCanvas.width = size;
  myCanvas.height = size;

  const trackCenter = { x: size / 2, y: size / 2 }; // Centro del canvas
  const trackRadius = size / 3; // Radio del círculo
  const ballRadius = 10; // Radio de la bola
  const ballSpeed = 0.05; // Velocidad de la bola

  const track = new Track(trackCenter, trackRadius); // Defino el objeto
  const ball = new Ball(track, ballRadius, ballSpeed); // Defino el objeto

  animate(track, ball); // Llamo la función

};

// Función para que se llame a sí misma cada segundo
function animate(track, ball) {
  ctx.clearRect(0, 0, size, size); // Limpio el canvas
  track.draw(ctx); // Dibujo el círculo
  ball.move();
  ball.draw(ctx); // Dibujo la bola
  requestAnimationFrame(() => animate(track, ball)); // Hago la animación
}
