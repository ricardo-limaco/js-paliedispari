// Function Numero Random
function numeroRandom (numeroMin, numeroMax) {
  return Math.floor(Math.random() * (numeroMax - numeroMin + 1) + numeroMin);
}


// Function Somma 
function somma(numeroUtente, numeroCpu) {
  const risultatoSomma = (numeroUtente + numeroCpu);
  console.log("Risultato somma Utente e CPU:",risultatoSomma);

  if (risultatoSomma % 2 == 0) {
    console.log("Il numero è pari");
    return pari;
  } else {
    console.log("Il numero è dispari");
    return dispari;
  }
}




// Scelte dati utente (pari o dispari, numero)
const sceltaUtente = prompt("Scegli pari o dispari");
const numeroUtente = parseInt(prompt("Scegli un numero da 1 a 5"));
console.log("L'utente ha scelto:",sceltaUtente);
console.log("Numero Utente:",numeroUtente);


// Genera un numero per la CPU
const numeroCpu = numeroRandom(1, 5);
console.log("Numero CPU:",numeroCpu);


// Somma Numero Utente + numero CPU
const sommaUtenteCpu = somma(numeroUtente, numeroCpu);



const risultatoSomma = (numeroUtente + numeroCpu);
var pari = risultatoSomma % 2 == 0;
var dispari = risultatoSomma % 2 != 0;

if ((risultatoSomma % 2 == 0) && (sceltaUtente == "pari")) {
 console.log("L'utente ha vinto!");
} else if (((risultatoSomma % 2 != 0) && (sceltaUtente == "dispari"))) {
 console.log("L'utente ha vinto!");
} else {
 console.log("Il computer ha vinto!");
}