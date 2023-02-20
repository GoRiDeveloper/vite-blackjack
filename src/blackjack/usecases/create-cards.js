import { D, BOXES_CARDS } from "../variables";

export function createCards (card, turn) {

    const CARD_IMG = D.createElement("img");
  
    CARD_IMG.src = `./assets/img/cartas/${card}.png`;
    CARD_IMG.classList.add("card");
  
    BOXES_CARDS[turn].append(CARD_IMG);
  
};