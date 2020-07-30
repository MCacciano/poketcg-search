import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import axios from 'axios';

const PokeTypes = ({ onInputChange }) => {
  const [pokemonTypes, setPokemonTypes] = useState([]);

  useEffect(() => {
    try {
      const getPokemonTypes = async () => {
        const { data } = await axios.get(`https://api.pokemontcg.io/v1/types`);
        setPokemonTypes(data.types);
      };

      getPokemonTypes();
    } catch (err) {
      console.error(err);
    }
  }, []);

  return (
    <div className="w-full grid grid-cols-3 sm:grid-cols-4 md:grid-cols-6 gap-2 p-5">
      {pokemonTypes.map(type => (
        <label
          key={type}
          className={`flex justify-between border rounded py-1 px-2 cursor-pointer text-${type.toLowerCase()} border-${type.toLowerCase()}`}
        >
          <span>{type}</span>
          <input
            className="ml-2"
            type="checkbox"
            name="pokemonType"
            value={type}
            onChange={onInputChange}
            multiple
          />
        </label>
      ))}
    </div>
  );
};

PokeTypes.propTypes = {
  onInputChange: PropTypes.func
};

export default PokeTypes;
