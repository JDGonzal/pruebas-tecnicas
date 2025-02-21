import React from 'react';

function EmojiButton({
  content,
  style,
  handleClick,
}: {
  content: string;
  style: string;
  handleClick?: () => void;
}) {
  return (
    <button className={style} onClick={handleClick}>
      {content}
    </button>
  );
}

export default EmojiButton;
