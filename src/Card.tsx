import { PokemonCard } from "./services/api";

interface CardProps {
data: PokemonCard
onClick: (selectedId: number) => void
}

export default function Card( {data, onClick}: CardProps) {
    
    return (
        <article onClick={() => onClick(data.id)}>
            <p>I am {data.name}</p>
            <p>I have {data.id}</p>
            <p>img: {data.imageUrl}</p>
        </article>
    )
}