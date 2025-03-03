import React, { useEffect, useState } from 'react';
import Form from './components/Form';
import MemoryCard from './components/MemoryCard';
import AssistiveTechInfo from './components/AssistiveTechInfo';
import GameOver from './components/GameOver';
import ErrorCard from './components/ErrorCard';

export default function App() {
  const [isGameOn, setIsGameOn] = useState(false);
  const [emojisData, setEmojisData] = useState([] as any[]);
  const [selectedCards, setSelectedCards] = useState([] as any[]);
  const [matchedCards, setMatchedCards] = useState([] as any[]);
  const [areAllCardsMatched, setAreAllCardsMatched] = useState(false);
  const [isError, setIsError] = useState(false);

  console.log(isError);

  useEffect(() => {
    // Validamos si hay dos cartas y si estas coinciden en `name`
    if (
      selectedCards.length === 2 &&
      selectedCards[0].name === selectedCards[1].name
    ) {
      // Asigno las cartas seleccionadas a las cartas coincidentes
      setMatchedCards([...matchedCards, ...selectedCards]);
    }
  }, [selectedCards]);

  useEffect(() => {
    // Si el largo de lo que coincide es igual a la longitud de los emojis
    if (emojisData.length && matchedCards.length === emojisData.length) {
      setAreAllCardsMatched(true);
    }
  }, [matchedCards]);

  async function startGame(e: React.FormEvent) {
    e.preventDefault();
    let isLocalhost = false;
    try {
      const res = await fetch(
        'https://emojihub.yurace.pro/api/all/category/animals-and-nature'
      );
      if (!res.ok) {
        throw new Error('Could not fetch data from API');
      }
    } catch (error) {
      isLocalhost = true;
      console.error(error);
    }
    try {
      // throw new Error('Prueba');
      let response: Response;
      if (isLocalhost) {
        response = await fetch(`${window.location.origin}/emojis-es.json`);
      } else {
        response = await fetch(
          'https://emojihub.yurace.pro/api/all/category/animals-and-nature'
        );
      }
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
      setIsError(true);
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

  function turnCard(name: string, index: number) {
    console.log('Clicked');

    // console.log(`The emoji '${name}' at index '${index}' was clicked`);
    // setSelectedCards([{ name, index }]);
    // const selectedCardEntry = selectedCards.find((card) => card.index === index );
    if (/*!selectedCardEntry &&*/ selectedCards.length < 2) {
      setSelectedCards([...selectedCards, { name, index }]);
    } else if (/*!selectedCardEntry &&*/ selectedCards.length === 2) {
      setSelectedCards([{ name, index }]);
    }
  }

  function resetGame() {
    setIsGameOn(false);
    // no debe modificar "`emojisData`" ni interactuar con la API.
    // setEmojisData([]);
    setSelectedCards([]);
    setMatchedCards([]);
    setAreAllCardsMatched(false);
  }

  function resetError() {
    setIsError(false);
  }

  return (
    <main>
      <h1>Memory</h1>
      {!isGameOn && !isError && <Form handleSubmit={startGame} />}
      {isGameOn && !areAllCardsMatched && (
        <AssistiveTechInfo
          emojisData={emojisData}
          matchedCards={matchedCards}
        />
      )}
      {isGameOn && areAllCardsMatched && <GameOver handleClick={resetGame} />}
      {isGameOn && (
        <MemoryCard
          handleClick={turnCard}
          data={emojisData}
          selectedCards={selectedCards}
          matchedCards={matchedCards}
        />
      )}
      {isError && <ErrorCard handleClick={resetError} />}
    </main>
  );
}
