// Ottieni un numero casuale in un range specificato. Chiedi all'utente il valore minimo ed il valore massimo del range in cui generare il numero.
let minValue;
let maxValue;
do {
  minValue = parseInt(prompt("inserisci il numero minimo del range"));
  console.log(minValue);
  maxValue = parseInt(prompt("inserisci il numero massimo del range"));
  console.log(maxValue);
} while (isNaN(minValue) || isNaN(maxValue));
let resultNumber = Math.floor(Math.random() * maxValue + minValue);
console.log(resultNumber);
