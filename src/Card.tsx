import { PokemonCard } from "./services/api";

interface CardProps {
  data: PokemonCard;
  onClick: (selectedId: number) => void;
}

export default function Card({ data, onClick }: CardProps) {
  return (
    <article
      className="m-2 w-full max-w-xs"
      onClick={() => onClick(data.id)}
    >
      <img 
        className="w-full"
        src={data.imageUrl} 
        alt={data.name} 
      />
      <p className="font-bold text-xl my-4 text-center">{data.name}</p> {/* Adjust margin for larger cards */}
    </article>
  );
}

