import { pointsPlayers } from "../variables.js";

export function winner () {

    const [minPoints, pointsPC] = pointsPlayers;
  
    setTimeout(() => {
  
        if (pointsPC === minPoints) {
  
            alert("Juego Empatado.");
  
        } else if (minPoints > 21) {
  
            alert("Has Perdido el Juego :(");
  
        } else if (pointsPC > 21) {
  
            alert("¡GANASTE!");
  
        } else {
  
            alert("Has Perdido :(");
  
        };
  
    }, 100);
  
};