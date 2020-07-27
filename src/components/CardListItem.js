import React from 'react';

const CardListItem = ({ card }) => {
  return (
    <li>
      <img className='w-full h-auto' src={card.imageUrl} />
    </li>
  );
};

export default CardListItem;
