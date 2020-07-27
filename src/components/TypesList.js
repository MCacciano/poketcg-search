import React, { useState } from 'react';

const TypesList = ({ types, onChange, checked = false }) => {
  const typeColors = {
    colorless: '#B0B0B0',
    darkness: '#333F65',
    dragon: '#C0A534',
    fairy: '#FF3DA3',
    fighting: '#C74C00',
    fire: '#B70A03',
    grass: '#12961F',
    lightning: '#F6E300',
    metal: '#728788',
    psychic: '#7200BA',
    water: '#054BBD',
  };

  const labelClasses = `relative flex py-1 px-2 border rounded shadow cursor-pointer transition ease-in-out duration-300 transform hover:-translate-y-1 hover:scale-110`;

  const [isChecked, setIsChecked] = useState(false);

  return (
    <div className='w-full flex justify-between my-5 px-5'>
      {types.map(type => (
        <label
          style={{
            borderColor: `${typeColors[type.toLowerCase()]}`,
            color: `${isChecked ? '#fff' : typeColors[type.toLowerCase()]}`,
            backgroundColor: `${
              !isChecked ? '#fff' : typeColors[type.toLowerCase()]
            }`,
          }}
          className={labelClasses}
          onClick={e => setIsChecked(!isChecked)}
        >
          {type}
          <input
            className='hidden'
            type='checkbox'
            name='pokemonType'
            value={type}
            onChange={onChange}
          />
        </label>
      ))}
    </div>
  );
};

export default TypesList;
