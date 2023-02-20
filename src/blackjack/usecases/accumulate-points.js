import { pointsPlayers, POINTS } from "../variables";
import { valueCard } from "./";

export function accumulatePoints (card, turn) {

    pointsPlayers[turn]    = pointsPlayers[turn] + valueCard(card);
    POINTS[turn].innerText = pointsPlayers[turn];
  
    return pointsPlayers[turn];
  
};