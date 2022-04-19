// Generare un numero random da 1 a 6 per il PC
const pcDice = Math.floor(Math.random() * 6) + 1;
console.log('Giocata del PC:', pcDice);

// Generare un numero random da 1 a 6 per l'utente
const userDice = Math.floor(Math.random() * 6) + 1;
console.log("Giocata dell'utente:", userDice);

// Confrontare i due numeri e dichiarare il vincitore
let result = `Il numero del PC è ${pcDice}, il tuo numero è ${userDice}. `;
if (pcDice > userDice) {
    result += "Il tuo PC ha vinto!";

} else if (userDice > pcDice) {
    result += "Hai vinto!";
} else {
    result += "Pari!";
}

console.log(result);