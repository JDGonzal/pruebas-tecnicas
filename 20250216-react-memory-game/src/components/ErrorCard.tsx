import React, { useEffect, useRef } from 'react';
import RegularButton from './RegularButton';

function ErrorCard({ handleClick }: { handleClick: () => void }) {
  const cardRef = useRef<HTMLDivElement>(null);
  useEffect(() => {
    if (cardRef.current) {
      cardRef.current.focus();
    }
  }, []);

  return (
    <div className='wrapper wrapper--accent' ref={cardRef} tabIndex={-1}>
      <p className='p--large'>Lo sentimos, se produjo un error.</p>
      <p className='p--regular'>
        Vuelve más tarde o haz clic en el botón de abajo para intentar reiniciar
        el juego
      </p>
      <RegularButton handleClick={handleClick}>
        Reiniciar el Juego
      </RegularButton>
    </div>
  );
}

export default ErrorCard;
