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
  const ballSpeed = 0.1; // Velocidad de la bola

  const track = new Track(trackCenter, trackRadius); // Defino el objeto
  const ball = new Ball(track, ballRadius, ballSpeed); // Defino el objeto
  track.draw(ctx); // Dibujo el círculo
  ball.draw(ctx); // Dibujo la bola
};
