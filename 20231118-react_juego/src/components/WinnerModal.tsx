import { Square } from "."

function WinnerModal({ winner, resetGame }: { winner: boolean | null, resetGame: () => void }) {
  if (winner === null) return null;
  return (
    <>
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
    </>
  )
}

export default WinnerModal;
