import { PokemonCard } from "./api";

/**
 * Fisher-Yates shuffle algorithm
 * @param array Unshuffled array
 * @returns Shuffled array 
 */
export default function shuffleArray<T>(arr: T[]): T[] {
  for (let i = arr.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [arr[i], arr[j]] = [arr[j], arr[i]];
  }
  return arr;
}
