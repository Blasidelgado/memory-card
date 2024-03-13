import { PokemonCard } from "./services/api";

interface CardProps {
data: PokemonCard
onClick: () => void
}

export default function Card( {data, onClick}: CardProps) {
    
    return (
        <article onClick={onClick}>
            <p>I am {data.name}</p>
            <p>I have {data.id}</p>
            <p>img: {data.imageUrl}</p>
        </article>
    )
}