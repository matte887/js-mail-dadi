// Chiedere all'utente la sua mail
const userMail = prompt ('Scrivi la tua mail');
console.log("Mail dell'utente:", userMail);

// Creare un array di mail
const authorizedMails = [
    'marty.mcfly@bttf.com',
    'emmet.brown@bttf.com',
    'biff.tannen@bttf.com',
    'jennifer.parker@bttf.com'
];
console.log(authorizedMails);

// Confrontare la mail dell'utente con ciascuna mail nell'array e stampare in console un messaggio adeguato
let emailFound = false;
for (let i = 0; i < authorizedMails.length; i++) {
    if (userMail === authorizedMails[i]) {
        emailFound = true;
    }
}

console.log(emailFound);

if (emailFound) {
    console.log("Accesso consentito");
} else {
    console.log("Accesso negato");
}