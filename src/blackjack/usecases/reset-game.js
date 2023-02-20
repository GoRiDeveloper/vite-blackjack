import { BTN_GET_CART, BTN_STOP_GAME } from "../variables";
import { startGame } from "./";

export function resetGame () {

    startGame();
  
    BTN_GET_CART.disabled = false;
    BTN_STOP_GAME.disabled = false;
  
    alert("Nuevo Juego");
  
};