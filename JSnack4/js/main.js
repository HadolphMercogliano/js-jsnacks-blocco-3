// Fai inserire un numero all'utente. Poi continua a chiedere numeri finché la serie è crescente (l'ultimo numero inserito deve essere maggiore del precedente). Alla fine stampali tutti.
const stringaCrescente = [];
let userNumber;
let currentNumber = 0;
  userNumber = parseInt(prompt("inserisci un numero"));
  // currentNumber = userNu1mber;
1
while (currentNumber < userNumber) {
  console.log( 'user' + userNumber);
  console.log('current' +currentNumber);
  currentNumber = userNumber;
  userNumber = parseInt(prompt("inserisci un altro numero"));

  stringaCrescente.push(currentNumber);
}
console.log(stringaCrescente);
