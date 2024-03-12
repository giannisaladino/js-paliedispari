// CHIEDIAMO ALL'UTENTE DI SCEGLIERE PARI O DISPARI
const userChoice = prompt('Scegli pari o dispari');
console.log('Hai scelto ' + userChoice);

// CHIEDIAMO ALL'UTENTE DI INSERIRE UN NUMERO DA 1 A 5
const userNumber = parseInt(prompt('Inserisci un numero da 1 a 5'));
console.log('Il tuo numero è: ' + userNumber);

// GENERIAMO UN NUMERO RANDOM DA 1 A 5 PER IL COMPUTER
const pcNumber = Math.floor(Math.random() * 5) + 1;
console.log('Il numero random generato è: ' + pcNumber);

// SOMMIAMO I DUE NUMERI
let somma = userNumber + pcNumber
console.log('La somma è uguale a: ' + somma);

// STABILIAMO SE LA SOMMA E' PARI O DISPARI
function isEven(sum) {
    const resto = sum % 2;
    if (resto === 0) {
        return 'Hai vinto';
    } else {
        return 'Hai perso';
    }
}

// invoco la funzione
const esito = isEven(somma);
console.log(esito);

// STAMPIAMO IL VINCITORE
