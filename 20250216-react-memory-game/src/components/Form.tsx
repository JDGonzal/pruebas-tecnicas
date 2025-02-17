import React from 'react';
import RegularButton from './RegularButton';

export interface FormProps {
  handleSubmit: (e: React.FormEvent<HTMLFormElement>) => void;
}

export default function Form({ handleSubmit }: FormProps) {
  return (
    <form className='wrapper' onSubmit={handleSubmit}>
      <RegularButton type='submit'>Start Game</RegularButton>
    </form>
  );
}
