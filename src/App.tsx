import { useState, useEffect } from 'react';
import Card from './Card';
import { PokemonAPIService, PokemonCard } from './services/api';

const App = () => {
  const [cards, setCards] = useState<PokemonCard[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      const pokemonService = new PokemonAPIService();
      try {
        const data = await pokemonService.fetchCards();
        setCards(data);
      } catch (error) {
        console.error('Error fetching cards:', error);
      }
    };

    fetchData();
  }, []);

  const handleCardClick = () => {};

  return (
    <div>
      <div className="cards-container">
        {cards.map((card) => (
          <Card key={card.id} data={card}/>
        ))}
      </div>
    </div>
  );
};

export default App;
