import React, { useEffect, useState } from 'react';

import './App.css';
import pokeTcg from './axios/pokeTcg';

const App = () => {
  const [cards, setCards] = useState(null);

  useEffect(() => {
    try {
      const getCards = async () => {
        const { data } = await pokeTcg.get('/cards');
        setCards(data.cards);
      };

      getCards();
    } catch (err) {
      console.error(err);
    }
  }, []);

  return (
    <div>
      <ul className="grid m-5 gap-10 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5">
        {cards &&
          cards.map(card => (
            <li>
              <img className="w-full h-auto" src={card.imageUrl} />
            </li>
          ))}
      </ul>
    </div>
  );
};

export default App;
