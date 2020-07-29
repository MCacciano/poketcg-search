import React, { useState, useRef } from 'react';

const TypesList = ({ types, onChange }) => {
  const [isActive, setIsActive] = useState(false);

  const handleOnClick = (e, type) => {
    const classType = type.toLowerCase();
    const { classList } = e.target;

    if (e.target.checked) {
      classList.toggle(`bg-${classType}`);
      classList.replace(`text-${classType}`, `text-white`);
    } else {
      classList.toggle(`bg-white`);
      classList.replace(`text-white`, `text-${classType}`);
    }
  };

  return (
    <div className="w-full flex justify-between my-5 px-5">
      {types.map(type => (
        <label
          key={type}
          className={`relative flex py-1 px-2 border rounded shadow cursor-pointer hover:bg-${type.toLowerCase()} text-${type.toLowerCase()} border-${type.toLowerCase()} hover:text-white hover:bg-${type.toLowerCase()}`}
          onClick={e => handleOnClick(e, type)}
        >
          {type}
          <input
            className="hidden"
            type="checkbox"
            name="pokemonType"
            value={type}
            onChange={onChange}
          />
        </label>
      ))}
    </div>
  );
};

export default TypesList;
