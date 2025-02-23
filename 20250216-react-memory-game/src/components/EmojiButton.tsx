import React from 'react';

function EmojiButton({
  content,
  selectedCardsEntry,
  matchedCardsEntry,
  handleClick,
}: {
  content: string;
  selectedCardsEntry: [] | any[];
  matchedCardsEntry: [] | any[];
  handleClick?: () => void;
}) {
  const btnContent = selectedCardsEntry || matchedCardsEntry ? content : '?';

  // Condicionales que hice inicialmente
  // let btnStyle = 'btn--emoji__';
  // if (selectedCardsEntry) {
  //   btnStyle += 'back--selected';
  // } else if (matchedCardsEntry) {
  //   btnStyle += 'back--matched';
  // } else {
  //   btnStyle += 'front';
  // }
  // Operador Ternario sugeridas por el instructor
  const btnStyle = selectedCardsEntry
    ? 'btn--emoji__back--selected'
    : matchedCardsEntry
    ? 'btn--emoji__back--matched'
    : 'btn--emoji__front';

  const isMatched = matchedCardsEntry ? true : false;

  return (
    <button
      className={`btn btn--emoji ${btnStyle}`}
      onClick={selectedCardsEntry ? () => {} : handleClick}
      disabled={isMatched}
    >
      {btnContent}
    </button>
  );
}

export default EmojiButton;
