import React from 'react';
import RegularButton from './RegularButton';

function GameOver({ handleClick }: { handleClick: () => void }) {
  return (
    <div className='wrapper wrapper--accent'>
      <p className='p--large'>¡Has emparejado todas las tarjetas de memoria!</p>
      <RegularButton handleClick={handleClick}>Volver a jugar</RegularButton>
    </div>
  );
}

export default GameOver;
