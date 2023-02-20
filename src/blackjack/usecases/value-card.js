/**
 * 
 * @param {String} card 
 * @returns {Number}
 */

export function valueCard (card) {

    const VALUE = card.substring(0, card.length - 1);
  
    return isNaN(VALUE)
  
        ? (VALUE === "A" ? 11 : 10)
        : VALUE * 1;
  
};