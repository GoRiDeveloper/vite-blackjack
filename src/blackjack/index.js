import _ from "underscore";
import { BTN_GET_CART, BTN_STOP_GAME, BTN_NEW_GAME } from "./variables";
import { getCard, stopGame, resetGame } from "./usecases";

BTN_GET_CART.addEventListener("click", getCard);
BTN_STOP_GAME.addEventListener("click", stopGame);
BTN_NEW_GAME.addEventListener("click", resetGame);