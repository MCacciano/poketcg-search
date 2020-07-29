import React, { useState, useEffect } from 'react';
import axios from 'axios';

const SearchForm = ({ setCards }) => {
  const [searchTypes, setSearchTypes] = useState([]);
  const [pokemonTypes, setPokemonTypes] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');

  const handleSubmit = async e => {
    e.preventDefault();

    setCards([]);

    try {
      const { data } = await axios.get(
        `https://api.pokemontcg.io/v1//cards?types=${
          searchTypes.join(',') || ''
        }&name=${searchTerm}`
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

  useEffect(() => {
    try {
      const getPokemonTypes = async () => {
        const { data } = await axios.get(`https://api.pokemontcg.io/v1/types`);
        const pokeTypes = data.types.map(type => ({
          name: type,
          active: false,
        }));
        setPokemonTypes(pokeTypes);
      };

      getPokemonTypes();
    } catch (err) {
      console.error(err);
    }
  }, []);

  return (
    <form className='flex flex-col items-center my-5' onSubmit={handleSubmit}>
      <div>
        <input
          className='border border-gray-5 rounded shadow h-full flex-grow my-1 py-1'
          onChange={e => setSearchTerm(e.target.value)}
        />
        <button className='bg-blue-700 text-white border rounded shadow px-2 ml-2 h-full'>
          Search
        </button>
      </div>
      <div className='w-full flex flex-wrap justify-between my-5 px-5'>
        {pokemonTypes.map(type => (
          <label
            key={type.name}
            className={`flex items-center border rounded py-1 px-2 cursor-pointer text-${type.name.toLowerCase()} border-${type.name.toLowerCase()}`}
          >
            <span>{type.name}</span>
            <input
              className='ml-2'
              type='checkbox'
              name='pokemonType'
              value={type.name}
              onChange={handleTypeChange}
            />
          </label>
        ))}
      </div>
    </form>
  );
};

export default SearchForm;
