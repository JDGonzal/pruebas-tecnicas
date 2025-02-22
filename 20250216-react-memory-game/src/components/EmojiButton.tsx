import React from 'react';

function EmojiButton({
  content,
  style,
  selectedCardsEntry,
  matchedCardsEntry,
  handleClick,
}: {
  content: string;
  style: string;
  selectedCardsEntry: [] | any[];
  matchedCardsEntry: [] | any[];
  handleClick?: () => void;
}) {
  const btnContent = selectedCardsEntry || matchedCardsEntry ? content : '?';
  
  return (
    <button className={style} onClick={handleClick}>
      {btnContent}
    </button>
  );
}

export default EmojiButton;
