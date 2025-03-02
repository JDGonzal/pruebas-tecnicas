import React, { useRef, useEffect } from 'react';
import RegularButton from './RegularButton';

function GameOver({ handleClick }: { handleClick: () => void }) {
  const cardRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (cardRef.current) {
      cardRef.current.focus();
    }
  }, []);
  return (
    <div className='wrapper wrapper--accent' ref={cardRef} tabIndex={-1}>
      <p className='p--large'>¡Has emparejado todas las tarjetas de memoria!</p>
      <RegularButton handleClick={handleClick}>Volver a jugar</RegularButton>
    </div>
  );
}

export default GameOver;
