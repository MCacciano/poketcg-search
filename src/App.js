import React, { useEffect, useState } from 'react';

import './App.css';
import pokeTcg from './axios/pokeTcg';
import CardList from './components/CardList';
import SearchForm from './components/SearchForm';

const App = () => {
  const [cards, setCards] = useState(null);
  const [searchTerm, setSearchTerm] = useState('');
  const [searchTypes, setSearchTypes] = useState([]);
  const [pokemonTypes, setPokemonTypes] = useState([]);

  useEffect(() => {
    try {
      const getPokemonTypes = async () => {
        const { data } = await pokeTcg.get(`/types`);
        const pokeTypes = data.types.map(type => ({ name: type, active: false }));
        setPokemonTypes(pokeTypes);
      };

      getPokemonTypes();
    } catch (err) {
      console.error(err);
    }
  }, []);

  useEffect(() => {
    try {
      const getInitialCards = async () => {
        const { data } = await pokeTcg.get(`/cards?pageSize=50`);
        console.log(data.cards.length);
        setCards(data.cards);
      };

      getInitialCards();
    } catch (err) {
      console.error(err);
    }
  }, []);

  const handleSubmit = async e => {
    e.preventDefault();

    setCards([]);

    try {
      const { data } = await pokeTcg.get(
        `/cards?types=${searchTypes.join(',') || ''}&name=${searchTerm}`
      );
      setCards(data.cards);
    } catch (err) {
      console.error(err);
    }
  };

  const handleTypeChange = e => {
    const { value, checked } = e.target;

    if (checked) {
      setSearchTypes(current => [...current, value]);
    } else {
      setSearchTypes(searchTypes.filter(type => type !== value));
    }
  };

  return (
    <div className="h-screen flex flex-col">
      <div className="flex justify-center bg-red-700">
        <h1 className="text-3xl text-white py-2">Pokemon TCG Search</h1>
      </div>
      <div className="flex flex-col h-full gap-12">
        <SearchForm
          pokemonTypes={pokemonTypes}
          onSearchChange={e => setSearchTerm(e.target.value)}
          onSubmit={handleSubmit}
          onTypeChange={handleTypeChange}
        />
        <CardList cards={cards} />
      </div>
    </div>
  );
};

export default App;
