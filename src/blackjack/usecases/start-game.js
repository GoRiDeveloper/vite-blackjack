import { pointsPlayers, POINTS, BOXES_CARDS } from "../variables";
import { createDeck } from "./";

/**
 * 
 * @param {Number} players 
 */

export const startGame = (players = 2) => {

    createDeck();

    pointsPlayers.length = 0;
  
    for (let i = 0; i < players; i++) {
  
        pointsPlayers.push(0);
  
    };
  
    POINTS.forEach(element => element.innerText = 0);
    BOXES_CARDS.forEach(element => element.innerHTML = "");
  
};