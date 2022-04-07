// Code your solutions in this file
const cards = ["Guadalupe", "Ollie", "Aki"];
 
function writeCards(cards, event) {
    let thankYouCards = []
     for (let i = 0; i < cards.length; i++) {
         thankYouCards.push( `Thank you, ${cards[i]}, for the wonderful surprise gift!` );
     }
     return thankYouCards;
    }



const startingNumber = 11

function countDown(startingNumber) {
   while (startingNumber > 0) {
       console.log(startingNumber);
       startingNumber -= 1;
   }
   console.log(startingNumber);
}