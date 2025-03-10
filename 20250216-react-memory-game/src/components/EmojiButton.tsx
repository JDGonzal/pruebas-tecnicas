import React from 'react';
import { decodeEntity } from 'html-entities';

function EmojiButton({
  selectedCardsEntry,
  matchedCardsEntry,
  emoji,
  index,
  handleClick,
}: {
  selectedCardsEntry: [] | any[];
  matchedCardsEntry: [] | any[];
  emoji?: {} | any;
  index: number;
  handleClick?: () => void;
}) {
  const btnContent =
    selectedCardsEntry || matchedCardsEntry
      ? decodeEntity(emoji.htmlCode[0])
      : '?';

  const btnStyle = selectedCardsEntry
    ? 'btn--emoji__back--selected'
    : matchedCardsEntry
    ? 'btn--emoji__back--matched'
    : 'btn--emoji__front';
  // Operador ternario para un nuevo elemento
  const btnAria = selectedCardsEntry
    ? `${decodeEntity(emoji.name)}. Coincide`
    : matchedCardsEntry
    ? `${decodeEntity(emoji.name)}. Aún no coincide`
    : 'Tarjeta al revés';

  const isMatched = matchedCardsEntry ? true : false;

  return (
    <button
      className={`btn btn--emoji ${btnStyle}`}
      onClick={selectedCardsEntry ? () => {} : handleClick}
      disabled={isMatched}
      aria-label={`Posición ${index + 1}: ${btnAria}`}
      aria-live='polite'
    >
      {btnContent}
    </button>
  );
}

export default EmojiButton;
