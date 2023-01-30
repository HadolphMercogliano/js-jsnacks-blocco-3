// Crea un array vuoto e chiedi all'utente un numero da inserire nell'array. Continua a chiedere i numeri all'utente e a inserirli nell'array fino a quando la somma degli elementi è minore di 50.
let numbersList = [];

let somma = 0;

//   chiedi un numero all' utente
do {
  let userNumber = parseInt(prompt("inserisci un numero"));
  somma += userNumber;
} while (somma < 50);
{
  userNumber = parseInt(prompt("inserisci un altro numero"));
  somma += userNumber;
}
console.log("somma" + somma);
