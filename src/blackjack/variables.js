let 

deck          = [],
pointsPlayers = [];

const 

D             = document,
TYPES         = ["C", "D", "H", "S"],
SPECIAL_TYPES = ["A", "J", "Q", "K"],
BTN_GET_CART  = D.querySelector("#btn-get-card"),
BTN_NEW_GAME  = D.querySelector("#btn-new-game"),
BTN_STOP_GAME = D.querySelector("#btn-stop-game"),
POINTS        = D.querySelectorAll("small"),
BOXES_CARDS   = D.querySelectorAll(".box-cards");

export {

    deck,
    pointsPlayers,
    D,
    TYPES,
    SPECIAL_TYPES,
    BTN_GET_CART,
    BTN_NEW_GAME,
    BTN_STOP_GAME,
    POINTS,
    BOXES_CARDS

};