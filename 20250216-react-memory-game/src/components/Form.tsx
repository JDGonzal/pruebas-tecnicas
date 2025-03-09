import React from 'react';
import RegularButton from './RegularButton';
import Select from './Select';

export default function Form({
  handleSubmit,
  categoryList,
  numberList,
  language,
  handleChange,
}: {
  handleSubmit: (e: React.FormEvent<HTMLFormElement>) => void;
  categoryList: string[][];
  numberList: number[];
  language: number;
  handleChange: (e: React.ChangeEvent<HTMLSelectElement>) => void;
}) {
  return (
    <div className='form-container'>
      <p className='p--regular'>
        Personaliza el juego seleccionando una categoría de emoji y una cantidad de tarjetas de memoria.
      </p>
      <form className='wrapper'>
        <Select language={language} handleChange={handleChange} />
        {/*<div className='form__inner-wrapper'>
        <label htmlFor='category'>Seleccione una categoría de emoji</label>
        <select name='category' id='category' onChange={handleChange}>
          {categoryList.map((category, index) => (
            <option key={index} value={category[language]}>
              {category[language]}
            </option>
          ))}
        </select>
      </div>
      <div className='form__inner-wrapper'>
        <label htmlFor='number'>
          Seleccione el número de tarjetas de memoria
        </label>
        <select name='number' id='number' onChange={handleChange}>
          {numberList.map((number, index) => (
            <option key={index} value={number}>
              {number}
            </option>
          ))}
        </select>
      </div>*/}
        <RegularButton type='submit'>Start Game</RegularButton>
      </form>
    </div>
  );
}
