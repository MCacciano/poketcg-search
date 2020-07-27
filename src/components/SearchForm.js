import React from 'react';
import TypesList from './TypesList';

const SearchForm = ({
  onSubmit,
  pokemonTypes,
  handleTypeChange,
  onInputChange,
}) => {
  return (
    <div className='my-4 h-8 w-full'>
      <form className='flex flex-col items-center' onSubmit={onSubmit}>
        <div>
          <input
            name='searchTerm'
            className='border border-gray-5 rounded shadow h-full flex-grow'
            onChange={onInputChange}
          />
          <button className='bg-blue-700 text-white border rounded shadow px-2 ml-2 h-full'>
            Search
          </button>
        </div>
        <TypesList types={pokemonTypes} onChange={handleTypeChange} />
      </form>
    </div>
  );
};

export default SearchForm;
