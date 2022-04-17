// Generare un numero random da 1 a 6 per il PC
const pcDice = Math.floor(Math.random() * (7 - 1) ) + 1;
console.log('Giocata del PC:', pcDice);

// Generare un numero random da 1 a 6 per l'utente
const userDice = Math.floor(Math.random() * (7 - 1) ) + 1;
console.log("Giocata dell'utente:", userDice);

// Confrontare i due numeri e dichiarare il vincitore
if (pcDice > userDice) {
    console.log('Il tuo PC ha vinto!');
} else if (userDice > pcDice) {
    console.log('Hai vinto!');
} else {
    console.log('Pari');
}