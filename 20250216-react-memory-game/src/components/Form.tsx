import React, { useRef, useEffect } from 'react';
import RegularButton from './RegularButton';
import Select from './Select';

export default function Form({
  handleSubmit,
  language,
  handleChange,
  isFirstRender,
}: {
  handleSubmit: (e: React.FormEvent<HTMLFormElement>) => void;
  language: number;
  handleChange: (e: React.ChangeEvent<HTMLSelectElement>) => void;
  isFirstRender: boolean;
}) {
  const divRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    !isFirstRender && divRef.current?.focus();
  }, []);

  return (
    <div className='form-container' ref={divRef} tabIndex={-1}>
      <p className='p--regular'>
        Personaliza el juego seleccionando una categoría de emoji y una cantidad
        de tarjetas de memoria.
      </p>
      <form className='wrapper' onSubmit={handleSubmit}>
        <Select language={language} handleChange={handleChange} />
        <RegularButton type='submit'>Start Game</RegularButton>
      </form>
    </div>
  );
}
