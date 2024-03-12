// 1 CHIEDIAMO ALL'UTENTE DI INSERIRE UNA PAROLA

const userWord = prompt('Inserisci una parola');
// console.log(userWord);

// 2 Creare una funzione per capire se la parola inserita è palindroma:
    // la funzione accetta un parametro o argomento in ingresso (stringa)
        // inverto la stringa in ingresso
        // confronto la stringa inversa con quella d'origine
    // la funzione deve ritornare true se la parola è palindroma
    // deve ritornare false se la parola non è palindroma

function isPalindrome(word) {
    console.log(word);

    let inverseWord = ''; //string

    for(let index = word.length - 1; index >= 0; index--) {
        const character = word[index];
        // console.log(character);

        inverseWord += character;
        // inverseWord = inverseWord + character        
        
    }

    // console.log(inverseWord === word);

    if (inverseWord === word) {
        console.log('La parola è palindroma!');
        return true;
    } else {
        console.log('La parola non è palindroma :(');
        return false;
    }

    // const result = inverseWord === word;
    // return result;

    // return inverseWord === word;
}


// invoco la funzione per la verifica
 const esito = isPalindrome(userWord);
 console.log(esito);

// alla fine stampate in console un messaggio per dire all’utente il risultato del controllo



