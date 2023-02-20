import { pointsPlayers, BTN_STOP_GAME, BTN_GET_CART } from "../variables";
import { pcTurn } from "./";

export function stopGame () {

    BTN_STOP_GAME.disabled = true;
    BTN_GET_CART.disabled = true;
    pcTurn(pointsPlayers[0]);
  
};