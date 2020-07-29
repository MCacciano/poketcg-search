import React from 'react';

const CardListItem = ({ card }) => {
  const pokeDotCom = `https://www.pokemon.com/us/pokemon-tcg/pokemon-cards/?cardName=${
    card.name || ''
  }&evolvesFrom=${card.evolvesFrom || ''}&particularArtist=${
    card.artist || ''
  }`;

  return (
    <li>
      <a className='block h-full' target='_blank' href={pokeDotCom}>
        <img className='w-full h-auto' src={card.imageUrl} />
      </a>
    </li>
  );
};

export default CardListItem;
