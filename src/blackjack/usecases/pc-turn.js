import { pointsPlayers } from "../variables";
import { accumulatePoints, createCards, requestCard, winner } from "./";

/**
 * 
 * @param {Number} minPoints 
 */

export function pcTurn (minPoints) {

    if (!minPoints) throw new Error("Los puntos minimos son necesarios.");
    
    let pointsPC = 0;
  
    do {
  
        const CARD = requestCard();
  
        pointsPC = accumulatePoints(CARD, pointsPlayers.length - 1);
  
        createCards(CARD, pointsPlayers.length - 1);
  
    } while (pointsPC < minPoints && minPoints <= 21);
  
    winner();
  
};