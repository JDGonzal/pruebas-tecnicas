import React, { useState } from 'react';
import Form from './components/Form';
import MemoryCard from './components/MemoryCard';

export default function App() {
  const [isGameOn, setIsGameOn] = useState(false);
  const [emojisData, setEmojisData] = useState([]);

  //Mostramos el valor de `emojisData` en la consola
  console.log(emojisData);
  
  async function startGame(e: React.FormEvent) {
    e.preventDefault();
    try {
      const response = await fetch(
        'https://emojihub.yurace.pro/api/all/category/animals-and-nature'
      );
      if (!response.ok) {
        throw new Error('Could not fetch data from API');
      }
      const data = await response.json();
      const dataSample = data.slice(0, 5);

      setEmojisData(dataSample);
      setIsGameOn(true);
    } catch (error) {
      console.error(error);
    }
  }

  function turnCard() {
    console.log('Memory card clicked');
  }

  return (
    <main>
      <h1>Memory</h1>
      {!isGameOn && <Form handleSubmit={startGame} />}
      {isGameOn && <MemoryCard handleClick={turnCard} />}
    </main>
  );
}
