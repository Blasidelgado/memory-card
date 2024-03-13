import { useState, useEffect } from 'react';
import Card from './Card';
import { PokemonAPIService, PokemonCard } from './services/api';
import shuffleArray from './services/shuffle';
import { PokemonIds } from './utils/pokemon.enum';

const App = () => {
  const [score, setScore] = useState<number>(0);
  const [maxScore, setMaxScore] = useState<number>(0);
  const [cards, setCards] = useState<PokemonCard[]>([]);
  const [selectedIds, setSelectedIds] = useState<PokemonIds[]>([]);


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

  const handleCardClick = (selectedId: number) => {
    if (selectedIds.includes(selectedId)) {
      score > maxScore && setMaxScore(score);
      setScore(0);
      setSelectedIds([]);
    } else {
      setScore(score + 1);
      setSelectedIds([...selectedIds, selectedId]);
    }

    setCards(shuffleArray([...cards]));
  };

  return (
    <div>
      <div className="cards-container">
        {cards.map((card) => (
          <Card key={card.id} data={card} onClick={handleCardClick}/>
        ))}
      </div>
    </div>
  );
};

export default App;
