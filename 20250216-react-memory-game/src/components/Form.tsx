import React, { useRef, useEffect } from 'react';
import RegularButton from './RegularButton';
import Select from './Select';

export default function Form({
  handleSubmit,
  language,
  handleChange,
  isFirstRender,
  languageData,
}: {
  handleSubmit: (e: React.FormEvent<HTMLFormElement>) => void;
  language: number;
  handleChange: (
    e:
      | React.ChangeEvent<HTMLInputElement>
      | React.ChangeEvent<HTMLSelectElement>
      | any
  ) => void;
  isFirstRender: boolean;
  languageData: string[] | any[];
}) {
  const divRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    !isFirstRender && divRef.current?.focus();
  }, []);

  return (
    <div className='form-container' ref={divRef} tabIndex={-1}>
      <p className='p--regular'>{languageData[language].Form_p}</p>
      <form className='wrapper' onSubmit={handleSubmit}>
        <Select
          language={language}
          handleChange={handleChange}
          languageData={languageData}
        />
        <div>
          <input
            onChange={handleChange}
            type='radio'
            name='idiom'
            value='0'
            id='en'
            checked={language === 0}
          />
          <label htmlFor='en'>English</label>
          <br />
          <input
            onChange={handleChange}
            type='radio'
            name='idiom'
            value='1'
            id='es'
            checked={language === 1}
          />
          <label htmlFor='es'>Español</label>
        </div>
        <RegularButton type='submit'>
          {languageData[language].Form_RegularButton}
        </RegularButton>
      </form>
    </div>
  );
}
