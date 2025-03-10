import React, { useRef, useEffect } from 'react';
import RegularButton from './RegularButton';

function GameOver({
  handleClick,
  language,
  languageData,
}: {
  handleClick: () => void;
  language: number;
  languageData: string[] | any[];
}) {
  const cardRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (cardRef.current) {
      cardRef.current.focus();
    }
  }, []);
  return (
    <div className='wrapper wrapper--accent' ref={cardRef} tabIndex={-1}>
      <p className='p--large'>{languageData[language].GameOver_p}</p>
      <RegularButton handleClick={handleClick}>{languageData[language].GameOver_RegularButton}</RegularButton>
    </div>
  );
}

export default GameOver;
