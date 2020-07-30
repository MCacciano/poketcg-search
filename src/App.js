import React, { useState } from 'react';
import axios from 'axios';

import CardList from './components/CardList';
import SearchForm from './components/SearchForm';

import './App.css';

const App = () => {
  const [cards, setCards] = useState(null);

  return (
    <div className="flex flex-col">
      <div className="flex justify-center bg-red-700">
        <h1 className="text-3xl text-white py-2">Pokemon TCG Search</h1>
      </div>
      <div className="flex flex-col">
        <SearchForm setCards={setCards} />
        <CardList cards={cards} />
      </div>
    </div>
  );
};

export default App;
