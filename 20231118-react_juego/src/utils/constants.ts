// Definimos los Turnos con los símbolos a usar
export const TURNS = {
  X: "❌",
  O: "⭕",
};

// Creamos el Tablero en forma de arreglo
export const initBoard = Array(9).fill(null); // ['x','o','x','o','x','x','o', 'o','x'];

// Definición de comnos ganadores:
export const WINNER_COMBOS = [
  [0, 1, 2], [3, 4, 5], [6, 7, 8],
  [0, 3, 6], [1, 4, 7], [2, 5, 8],
  [0, 4, 8], [2, 4, 6]
];
