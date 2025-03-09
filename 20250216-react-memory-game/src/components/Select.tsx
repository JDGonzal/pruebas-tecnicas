import React from 'react';
import data from '../data/data.json';

function Select({
  language,
  handleChange,
}: {
  language: number;
  handleChange: (e: React.ChangeEvent<HTMLSelectElement>) => void;
}) {
  const selectEl = Object.entries(data).map(([key, value]) => (
    <div key={key} className='form__inner-wrapper'>
      <label htmlFor={key}>Seleccione una {key}</label>
      <select name={key} id={key} onChange={handleChange}></select>
    </div>
  ));

  return <>{selectEl}</>
}

export default Select;
