import { WINNER_COMBOS } from ".";

// Función para detectar si hubo ganador:
export const checkWinner = (boardToCheck: []) => {
  // Recorremos los WINNER_COMBOS
  for (const combo of WINNER_COMBOS) {
    // Separamos cada valor del combo
    const [a, b, c] = combo;
    // Comparamos los datos con el arreglo
    if (
      boardToCheck[a] && //Hay algún valor
      boardToCheck[a] === boardToCheck[b] && //
      boardToCheck[a] === boardToCheck[c] // 
    ) {
      return boardToCheck[a];
    }
  }
  //Si no hay ganador retornamos el null
  return null;
}
