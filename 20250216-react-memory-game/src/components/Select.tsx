import React from 'react';
import data from '../data/data.json';
import Option from './Option';

function Select({
  language,
  handleChange,
  languageData,
}: {
  language: number;
  handleChange: (e: React.ChangeEvent<HTMLSelectElement>) => void;
  languageData: string[] | any[];
}) {
  const selectEl = Object.entries(data).map(([key, value]) => (
    <div key={key} className='form__inner-wrapper'>
      <label htmlFor={key}>
        {key === 'category'
          ? languageData[language].Select_label_cat
          : languageData[language].Select_label_num}
      </label>
      <select name={key} id={key} onChange={handleChange}>
        <Option language={language} valueArray={value} />
      </select>
    </div>
  ));

  return <>{selectEl}</>;
}

export default Select;
