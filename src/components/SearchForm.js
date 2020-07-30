import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import axios from 'axios';
import PokeTypes from './PokeTypes';

const SearchForm = ({ setCards }) => {
  const [searchTypes, setSearchTypes] = useState([]);
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

  // get intial 50 cards for something to show on page load
  useEffect(() => {
    try {
      const getInitialCards = async () => {
        const { data } = await axios.get(`https://api.pokemontcg.io/v1/cards?pageSize=50`);
        setCards(data.cards);
      };

      getInitialCards();
    } catch (err) {
      console.error(err);
    }
  }, []);

  return (
    <form className="flex flex-col items-center my-5" onSubmit={handleSubmit}>
      <div>
        <input
          className="border border-gray-5 rounded shadow h-full flex-grow p-1"
          onChange={e => setSearchTerm(e.target.value)}
        />
        <button className="bg-blue-700 text-white border rounded shadow px-2 ml-2 h-full">
          Search
        </button>
      </div>
      <PokeTypes onInputChange={handleTypeChange} />
    </form>
  );
};

SearchForm.propTypes = {
  setCards: PropTypes.func
};

export default SearchForm;
