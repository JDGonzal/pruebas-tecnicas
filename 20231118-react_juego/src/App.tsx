import { useState } from "react";
import { Square } from "./components";

// Definimos los Turnos con los símbolos a usar
const TURNS = {
  X: "❌",
  O: "⭕",
};

// Creamos el Tablero en forma de arreglo
const initBoard = Array(9).fill(null); // ['x','o','x','o','x','x','o', 'o','x'];

// Definición de comnos ganadores:
const WINNER_COMBOS = [
  [0, 1, 2], [3, 4, 5], [6, 7, 8],
  [0, 3, 6], [1, 4, 7], [2, 5, 8],
  [0, 4, 8], [2, 4, 6]
];

// Función para dettectar si hubo ganador:
const checkWinner = (boardToCheck: []) => {
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

function App() {
  // Ponemos el tablero en forma de estado
  const [board, setBoard] = useState(initBoard);
  // Creamos los turnos y se inicializa con el valor de la X
  const [turn, setTurn] = useState(TURNS.X);
  // valores: null no hay ganador, false hay empate
  const [winner, setWinner] = useState(null);

  // Función para reiniciar el juego
  const resetGame = () => {
    setBoard(initBoard);
    setTurn(TURNS.X);
    setWinner(null);
  }

  // Función para saber q se modifica en el tablero
  const updateBoard = (index: number) => {
    // Se sale y no se hace nada si hay valores en esa posición
    if (board[index] || winner) return;
    // Antes de cambiar el turno dibujamos el elemento en el tablero
    const newBoard = [...board] //Clonamos el arreglo llamado board
    newBoard[index] = turn; // Asignamos el valor al índice
    // ❌ ESTO ESTA MAL
    // Jamás se debe mutar las `props` y el `estado`
    // board[index] = turn; // Se deben tratar como si fueran inmutables
    setBoard(newBoard); // Grabamos el arreglo recien obtenido
    // Alamacenamos el Proximo turno cuando se cambia de turno
    const newTurn = turn === TURNS.X ? TURNS.O : TURNS.X;
    // Actualiza el estado de Turno
    setTurn(newTurn);
    // Revisamos si hay ganador
    const newWinner = checkWinner(newBoard as []);
    // Si hay ganador se define la variable
    if (newWinner) setWinner(newWinner);
    //TODO: Verificar si el juego está terminado (Game is over)
  }

  return (
    <main className="board">
      <h1>Tic Tac Toe</h1>
      <button onClick={resetGame}>Empezar de nuevo</button>
      <section className="game">
        { // Simplemente mostramos el arreglo por pantalla
          board.map((_, index) => {
            return (
              <Square
                key={index}
                index={index}
                updateBoard={() => updateBoard(index)}
              >
                {board[index]}
              </Square>
            )
          })
        }
      </section>
      <section className="turn">
        <Square isSelected={turn === TURNS.X}>{TURNS.X}</Square>
        <Square isSelected={turn === TURNS.O}>{TURNS.O}</Square>
      </section>
      {winner !== null && (
        <section className="winner">
          <div className="text">
            <h2>
              {winner ? 'Ganó' : 'Empate'}
            </h2>
            <header className="win">
              {winner && <Square>{winner}</Square>}
            </header>
            <footer>
              <button onClick={resetGame}>Empezar de nuevo</button>
            </footer>
          </div>
        </section>
      )}
    </main>
  );
}

export default App;
