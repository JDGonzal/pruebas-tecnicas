import React from 'react';

function AssistiveTechInfo({
  emojisData,
  matchedCards,
}: {
  emojisData: [] | any[];
  matchedCards: [] | any[];
}) {
  return (
    <section className='sr-only' aria-live='polite' aria-atomic='true'>
      <h2>Estado del juego</h2>
      <p>Número de pares coincidentes: {matchedCards.length / 2}</p>
      <p>
        Número de cartas que quedan por combinar:
        {emojisData.length - matchedCards.length}
      </p>
    </section>
  );
}

export default AssistiveTechInfo;
