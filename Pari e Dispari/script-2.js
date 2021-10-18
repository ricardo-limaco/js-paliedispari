// Function Numero Random
function numeroRandom (numeroMin, numeroMax) {
  return Math.floor(Math.random() * (numeroMax - numeroMin + 1) + numeroMin);
}




// Richiesta dati utente (pari o dispari, numero)
const sceltaUtente = prompt("Scegli pari o dispari");
const numeroUtente = parseInt(prompt("Scegli un numero da 1 a 5"));
console.log("L'utente ha scelto:",sceltaUtente);
console.log("Numero Utente:",numeroUtente);


// Genera un numero random per la CPU
const numeroCpu = numeroRandom(1, 5);
console.log("Numero CPU:",numeroCpu);


// Somma numero Utente + numero cpu
const risultatoSomma = (numeroUtente + numeroCpu);
console.log("Risultato somma Utente e CPU:",risultatoSomma);




// Risultato Pari o Dispari
if (risultatoSomma % 2 === 0) {
  console.log("Il numero è pari");

} else {
  console.log("Il numero è dispari");
}




// Risultato Vincitore
if ((risultatoSomma % 2 === 0) && (sceltaUtente.toLowerCase() === "pari")) {
 console.log("L'utente ha vinto!");

} else if (((risultatoSomma % 2 != 0) && (sceltaUtente.toLowerCase() === "dispari"))) {
 console.log("L'utente ha vinto!");

} else {
 console.log("Il computer ha vinto!");
}