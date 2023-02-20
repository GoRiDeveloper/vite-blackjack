import { BTN_GET_CART, BTN_STOP_GAME } from "../variables";
import { accumulatePoints, createCards, pcTurn, requestCard } from "./";

export function getCard () {

    const 
    
    CARD          = requestCard(),
    POINTS_PLAYER = accumulatePoints(CARD, 0);
  
    createCards(CARD, 0);
  
    if (POINTS_PLAYER > 21) {
  
        BTN_GET_CART.disabled = true;
        BTN_STOP_GAME.disabled = true;
  
        pcTurn(POINTS_PLAYER);
  
    } else if (POINTS_PLAYER === 21) {
  
        BTN_GET_CART.disabled = true;
        BTN_STOP_GAME.disabled = true;
        
        pcTurn(POINTS_PLAYER);
  
    }
  
};