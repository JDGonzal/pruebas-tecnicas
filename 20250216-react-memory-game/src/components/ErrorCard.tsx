import React, { useEffect, useRef } from 'react';
import RegularButton from './RegularButton';

function ErrorCard({
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
      <p className='p--large'>{languageData[language].ErrorCard_p1}</p>
      <p className='p--regular'>{languageData[language].ErrorCard_p2}</p>
      <RegularButton handleClick={handleClick}>
      {languageData[language].ErrorCard_RegularButton}
      </RegularButton>
    </div>
  );
}

export default ErrorCard;
