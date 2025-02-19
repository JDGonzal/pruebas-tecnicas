import React, { useState } from 'react';
import Form from './components/Form';
import MemoryCard from './components/MemoryCard';

export default function App() {
  const [isGameOn, setIsGameOn] = useState(false);
  const [emojisData, setEmojisData] = useState([] as any[]);

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
      // const dataSample = data.slice(0, 5);
      const dataSlice = await getDataSlice(data);  
      const emojisArray = await getEmojisArray(dataSlice); 

      setEmojisData(emojisArray);
      setIsGameOn(true);
    } catch (error) {
      console.error(error);
    }
  }

  async function getDataSlice(data: any[]) {
    const randomIndices = getRandomIndices(data);
    const dataSlice = randomIndices.map((index) => data[index]);
    return dataSlice;
  }

  function getRandomIndices(data: any[]) {
    const ramdonInidicesArray = [] as number[];

    for (let i = 0; i < 5; i++) {
      const randomNum = Math.floor(Math.random() * data.length);
      if (!ramdonInidicesArray.includes(randomNum)) {
        ramdonInidicesArray.push(randomNum);
      } else {
        i--;
      }
    }

    return ramdonInidicesArray;
  }

  async function getEmojisArray(data: any[]) {
    const pairedEmojisArray = [...data, ...data];

    // Algoritmo `Fisher-Yates`
    for (let i = pairedEmojisArray.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      const temp = pairedEmojisArray[i];
      pairedEmojisArray[i] = pairedEmojisArray[j];
      pairedEmojisArray[j] = temp;
    }
    return pairedEmojisArray;
  }

  function turnCard() {
    console.log('Memory card clicked');
  }

  return (
    <main>
      <h1>Memory</h1>
      {!isGameOn && <Form handleSubmit={startGame} />}
      {isGameOn && <MemoryCard handleClick={turnCard} data={emojisData} />}
    </main>
  );
}
