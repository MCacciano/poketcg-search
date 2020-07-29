import React from 'react';
import PropTypes from 'prop-types';
import CardListItem from './CardListItem';

const CardList = ({ cards }) => {
  return cards ? (
    <ul className="grid m-5 gap-10 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5">
      {cards && cards.map(card => <CardListItem key={card.id} card={card} />)}
    </ul>
  ) : (
    <div className="flex flex-grow justify-center items-center">
      <h1 className="text-black text-2xl font-light">No Results</h1>
    </div>
  );
};

CardList.propTypes = {
  cards: PropTypes.array
};

export default CardList;
