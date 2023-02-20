import _ from "underscore";
import { deck, TYPES, SPECIAL_TYPES } from "../variables";

export function createDeck () {
  
    deck.length = 0;

    for (let i = 2; i < 10; i++) {
  
        for (let type of TYPES) {
  
            deck.push(i + type);
  
        };
  
    };
  
    for (let type of TYPES) {
  
        for (let special of SPECIAL_TYPES) {
          
            deck.push(special + type);
            
        };
  
    };
  
    const NEW_DECK = _.shuffle(deck);

    deck.length = 0;
    deck.push(...NEW_DECK);
  
};