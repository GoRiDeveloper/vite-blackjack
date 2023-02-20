import { deck } from "../variables";

export function requestCard () {

    if (deck.length === 0) throw "No hay cartas en el Deck";
  
    return deck.pop();
  
};