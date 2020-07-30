import React from 'react';
import PropTypes from 'prop-types';

const CardListItem = ({ card: { name, evolvesFrom, artist, imageUrl } }) => {
  const pokeDotCom = `https://www.pokemon.com/us/pokemon-tcg/pokemon-cards/?cardName=${
    name || ''
  }&evolvesFrom=${evolvesFrom || ''}&particularArtist=${artist || ''}`;

  return (
    <li>
      <a className="block h-full" target="_blank" href={pokeDotCom} rel="noopener noreferrer">
        <img className="w-full h-auto" src={imageUrl} alt={`${name} Pokemon Card`} />
      </a>
    </li>
  );
};

CardListItem.propTypes = {
  card: PropTypes.object
};

export default CardListItem;
