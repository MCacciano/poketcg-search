import React, { useEffect, useState } from 'react';
import axios from 'axios';

import './App.css';

import CardList from './components/CardList';
import SearchForm from './components/SearchForm';

const App = () => {
  const [cards, setCards] = useState(null);

  useEffect(() => {
    try {
      const getInitialCards = async () => {
        const { data } = await axios.get(
          `https://api.pokemontcg.io/v1/cards?pageSize=50`
        );
        setCards(data.cards);
      };

      getInitialCards();
    } catch (err) {
      console.error(err);
    }
  }, []);

  return (
    <div className='flex flex-col'>
      <div className='flex justify-center bg-red-700'>
        <h1 className='text-3xl text-white py-2'>Pokemon TCG Search</h1>
      </div>
      <div className='flex flex-col'>
        <SearchForm setCards={setCards} />
        <CardList cards={cards} />
      </div>
    </div>
  );
};

export default App;
