// Fai inserire un numero, che chiameremo N, all'utente. Genera N array, ognuno formato da 10 numeri casuali da 1 a 100. Ogni volta che ne crei uno, stampalo.

// chiedi un numero = N all' utente

userNumber = parseInt(
  prompt("inserisci il numero di array randomici che vuoi creare")
);

// genera N array
let topArray = [];
for (let i = 0; i < userNumber; i++) {
  let randomArray = [];

  // genera 10 numeri random da 1 a 100 per ogni array
  for (let i = 0; i < 10; i++) {
    randomArray.push(Math.floor(Math.random() * 100) + 1);
  }

  // stampa l' array scritto subito dopo averlo creato
  topArray.push(randomArray);
  console.log(randomArray);
}
