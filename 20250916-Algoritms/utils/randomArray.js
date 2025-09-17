// Función para generar números aleatorios
const generarNumeroAleatorio = (min = 1, max = 100) => {
  return Math.floor(Math.random() * (max - min + 1)) + min;
};

// Función para crear un array con números aleatorios
export const crearArrayAleatorio = (cantidad = 20) => {
  const array = [];
  for (let i = 0; i < cantidad; i++) {
    array.push(generarNumeroAleatorio());
  }
  return array;
};
