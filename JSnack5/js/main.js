// Genera un numero a caso compreso tra 1-100. Chiedi all’utente un numero fino a quando non indovina quello generato casualmente. Ogni volta che l'utente inserisce un numero, digli se è maggiore o minore di quello generato. Alla fine stampa il numero di tentativi che ci sono voluti per indovinare il numero generato casualmente.

// genera un numero random tra 1 e 100
let randomNumber = Math.floor(Math.random()*100)+1;
console.log(randomNumber);
let userNumber;
let tentativi = 0;
// finchè l'utente non indovina il numero generato
// chiedi all' utente un numero
while (userNumber != randomNumber) {
  userNumber = parseInt(prompt('indovina il numero da 1 a 100'));
   if(userNumber > randomNumber){
    console.log('inserisci un numero più piccolo');
   }else {
    console.log('inserisci un numero più grande');
   }
  tentativi++  
}
console.log('numero tentativi ' + tentativi)

// ogni volta che l'utente inserisce un numero digli se è maggiore o minore di quello generato

// stampa il numero di tentativi che ci sono voluti per indovinare il numero 
