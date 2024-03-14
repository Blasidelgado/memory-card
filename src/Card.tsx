import { PokemonCard } from "./services/api";

interface CardProps {
  data: PokemonCard;
  onClick: (selectedId: number) => void;
}

export default function Card({ data, onClick }: CardProps) {
  return (
    <article
    className=" cursor-pointer m-2 w-full max-w-xsrounded-lg overflow-hidden shadow-lg transition duration-300 transform hover:shadow-xl hover:-translate-y-1 hover:scale-105"     
    onClick={() => onClick(data.id)}
    >
      <img className="w-full" src={data.imageUrl} alt={data.name} />
      <p className="font-bold text-xl my-4 text-center">{data.name}</p>
    </article>
  );
}
