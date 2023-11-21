import { useState } from "react";
import { Square, WinnerModal } from "./components";
import confetti from 'canvas-confetti';
import { checkWinner, initBoard, TURNS } from "./utils";

function App() {
  // Ponemos el tablero en forma de estado
  const [board, setBoard] = useState(initBoard);
  // Creamos los turnos y se inicializa con el valor de la X
  const [turn, setTurn] = useState(TURNS.X);
  // valores: null no hay ganador, false hay empate
  const [winner, setWinner] = useState<boolean | null>(null);

  // Función para reiniciar el juego
  const resetGame = () => {
    setBoard(initBoard);
    setTurn(TURNS.X);
    setWinner(null);
  }

  // Detectamos si hay empate
  const checkEndGame = (newBoard: []) => {
    // Revisamos si hay empate, si no hay espacios vacíos en el tablero
    return newBoard.every((square) => square !== null);
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
    if (newWinner) {
      confetti();
      setWinner(newWinner)
    } //TODO: Verificar si el juego está terminado (Game is over)
    else if (checkEndGame(newBoard as [])) {
      setWinner(false); //Empate
    }
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
      <WinnerModal winner={winner} resetGame={resetGame} />
    </main>
  );
}

export default App;
