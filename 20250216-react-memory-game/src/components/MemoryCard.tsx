import React from 'react';
import EmojiButton from './EmojiButton';

export default function MemoryCard({
  handleClick,
  data,
  selectedCards,
  matchedCards,
}: {
  // Definición de la función con los dos parámetros nuevos
  handleClick: (name: string, index: number) => void;
  data: [] | any[];
  selectedCards: [] | any[];
  matchedCards: [] | any[];
}) {
  const cardEl = data.map((emoji, index) => {
    // Es una copia de la función `turnCard()` del componente `App`
    const selectedCardsEntry = selectedCards.find(
      (card) => card.index === index
    );
    // Clono con otro nombre
    const matchedCardsEntry = matchedCards.find((card) => card.index === index);

    // Condicionales que hice inicialmente
    // let cardStyle = 'card-item--';
    // if (selectedCardsEntry) {
    //   cardStyle += 'selected';
    // } else if (matchedCardsEntry) {
    //   cardStyle += 'matched';
    // } else {
    //   cardStyle += 'default';
    // }
    // Operador Ternario sugeridas por el instructor
    const cardStyle = selectedCardsEntry
      ? 'card-item--selected'
      : matchedCardsEntry
      ? 'card-item--matched'
      : '';
    return (
      <li key={index} className={`card-item ${cardStyle}`}>
        <EmojiButton
          selectedCardsEntry={selectedCardsEntry}
          matchedCardsEntry={matchedCardsEntry}
          emoji={emoji}
          index={index}
          // Llamado de la función dentro de otra función con los parámetros
          handleClick={() => handleClick(emoji.name, index)}
        />
      </li>
    );
  });

  return <ul className='card-container'>{cardEl}</ul>;
}
