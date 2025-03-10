import React from 'react';

function Option({
  language,
  valueArray,
}: {
  language: number;
  valueArray: string[] | any[];
}) {
  const optionEl = valueArray.map(({name, value}) => (
    <option key={value} value={name ? value[language] : value}>
      {name ? name[language] : value}
    </option>
  ));
  return <>{optionEl}</>;
}

export default Option;
