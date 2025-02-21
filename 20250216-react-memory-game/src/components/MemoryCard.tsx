import React from 'react';
import { decodeEntity } from 'html-entities';
import EmojiButton from './EmojiButton';

export default function MemoryCard({
  handleClick,
  data,
}: {
  // Definición de la función con los dos parámetros nuevos
  handleClick: (name: string, index: number) => void;
  data: [] | any[];
}) {
  const cardEl = data.map((emoji, index) => (
    <li key={index} className='card-item'>
      <EmojiButton
        content={decodeEntity(emoji.htmlCode[0])}
        style='btn btn--emoji'
        // Llamado de la función dentro de otra función con los parámetros
        handleClick={() => handleClick(emoji.name, index)}
      />
    </li>
  ));

  return <ul className='card-container'>{cardEl}</ul>;
}
