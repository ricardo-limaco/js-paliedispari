// Function parola Palindroma
function parolaPalindroma(parola) {
  // Variabile parola Utente
  const text = parola.toLowerCase();

  // Inverto la parola
  const textReverse = text.split('').reverse().join('');
  

  // Risultato Parola Palindroma
  if (text === textReverse) {
    const isPalindroma = "La parola è palindroma";
    console.log(isPalindroma);
   
  } else {
    const notPalindroma = "La parola non è palindroma";
    console.log(notPalindroma);
  
  }
}




// Richiesta dati utente
const parolaUtente = prompt("Inserisci una parola");
console.log("Parola utente:",parolaUtente)

// Variabile con dati utente
const utente = parolaPalindroma(parolaUtente);

