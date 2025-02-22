import React from 'react';
import { decodeEntity } from 'html-entities';
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
    // Solo los muestro cuando tengo datos en ambos
    if (selectedCardsEntry && matchedCardsEntry) {
      console.log('selectedCardsEntry:', selectedCardsEntry);
      console.log('matchedCardsEntry:', matchedCardsEntry);
    }
    return (
      <li key={index} className='card-item'>
        <EmojiButton
          content={decodeEntity(emoji.htmlCode[0])}
          style='btn btn--emoji'
          // Llamado de la función dentro de otra función con los parámetros
          handleClick={() => handleClick(emoji.name, index)}
        />
      </li>
    );
  });

  return <ul className='card-container'>{cardEl}</ul>;
}
