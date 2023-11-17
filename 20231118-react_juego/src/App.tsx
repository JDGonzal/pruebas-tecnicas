import { useState } from "react";
import { Square } from "./components";

// Definimos los Turnos con los símbolos a usar
const TURNS = {
  X: "❌",
  O: "⭕",
};

// Creamos el Tablero en forma de arreglo
const initBoard =Array(9).fill(null); // ['x','o','x','o','x','x','o', 'o','x'];

function App() {
  // Ponemos el tablero en forma de estado
  const [board, setBoard] = useState(initBoard);
  // Creamos los turnos y se inicializa con el valor de la X
  const [turn, setTurn] = useState(TURNS.X);
  return (
    <main className="board">
      <h1>Tic Tac Toe</h1>
      <section className="game">
        { // Simplemente mostramos el arreglo por pantalla
          board.map((_, index) => {
            return (
              <Square key={index} index={index}>
                {board[index]}
              </Square>
            )
          })
        }
      </section>
      <section className="turn">
        <Square isSelected={turn===TURNS.X}>{TURNS.X}</Square>
        <Square isSelected={turn===TURNS.O}>{TURNS.O}</Square>
      </section>
    </main>
  );
}

export default App;
