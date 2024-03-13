import { PokemonCard } from "./services/api";

export default function Card( {id, name, imageUrl}: PokemonCard) {
    
    return (
        <article>
            <p>I am {name}</p>
            <p>I have {id}</p>
            <p>img: {imageUrl}</p>
        </article>
    )
}