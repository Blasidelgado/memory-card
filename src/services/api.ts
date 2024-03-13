import { PokemonIds, pokemonsToFetch } from "../assets/pokemon.enum";

export interface PokemonCard {
    id: number,
    name: string,
    imageUrl: string
}

interface IPokemonAPIService {
    baseUrl: string
    pokemonsToFetch: PokemonIds[]
    fetchCards: () => Promise<PokemonCard[]>
}


export class PokemonAPIService implements IPokemonAPIService{
    baseUrl: string;
    pokemonsToFetch: PokemonIds[];

    constructor() {
        this.baseUrl = 'https://pokeapi.co/api/v2/pokemon/';
        this.pokemonsToFetch = pokemonsToFetch;
    }

    async fetchCards () {
        const pokemonCards: PokemonCard[] = [];
        for (const pokemon of this.pokemonsToFetch) {
            const newPokemonData: PokemonCard = {} as PokemonCard;
            const response = await fetch(this.baseUrl + pokemon);
            const data = await response.json();
            newPokemonData.id = data.id;
            newPokemonData.name = data.name;
            newPokemonData.imageUrl = data.sprites.front_default
            pokemonCards.push(newPokemonData);
        }
        return pokemonCards
    }
}
