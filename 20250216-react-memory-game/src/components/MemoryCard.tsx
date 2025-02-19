import React from 'react';
import { decodeEntity } from 'html-entities';

export default function MemoryCard({
  handleClick,
  data,
}: {
  // Definición de la función con los dos parámetros nuevos 
  handleClick: (name: string, index: number) => void; 
  data: [] | any[];
}) {
  const emojiEl = data.map((emoji, index) => (
    <li key={index} className='card-item'>
      <button
        className='btn btn--emoji'
        // Llamado de la función dentro de otra función con los parámetros
        onClick={() => handleClick(emoji.name, index)}
      >
        {decodeEntity(emoji.htmlCode[0])}
      </button>
    </li>
  ));

  return <ul className='card-container'>{emojiEl}</ul>;
}
