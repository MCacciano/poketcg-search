import React from 'react';

const SearchForm = ({ onSubmit, pokemonTypes, onSearchChange, onTypeChange }) => {
  return (
    <div className="my-4 h-8 w-full">
      <form className="flex flex-col items-center" onSubmit={onSubmit}>
        <div>
          <input
            name="searchTerm"
            className="border border-gray-5 rounded shadow h-full flex-grow"
            onChange={onSearchChange}
          />
          <button className="bg-blue-700 text-white border rounded shadow px-2 ml-2 h-full">
            Search
          </button>
        </div>
        <div className="w-full flex justify-between my-5 px-5">
          {pokemonTypes.map(type => (
            <label
              key={type.name}
              className={`relative flex py-1 px-2 border bg-white rounded shadow cursor-pointer hover:bg-${type.name.toLowerCase()} text-${type.name.toLowerCase()} border-${type.name.toLowerCase()} hover:text-white hover:bg-${type.name.toLowerCase()}`}
            >
              {type.name}
              <input
                className="hidden"
                type="checkbox"
                name="pokemonType"
                value={type.name}
                onChange={onTypeChange}
              />
            </label>
          ))}
        </div>
      </form>
    </div>
  );
};

export default SearchForm;
