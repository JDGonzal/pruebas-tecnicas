import React, { ReactNode } from 'react';

export default function RegularButton({
  children,
  type,
  handleClick,
}: {
  children: ReactNode;
  type?: 'submit' | 'reset' | 'button' | undefined;
  handleClick?: () => void;
}) {
  return (
    <button className='btn btn--text' onClick={handleClick} type={type}>
      {children}
    </button>
  );
}
