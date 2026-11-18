// let arrayone = [1, 2, 3, 'Ciao', "Benvenuti in Hackademy", true, undefined, [10, 'Pippo'], [20, 'Pluto']];

// console.log(arrayone[4]);
// console.log(arrayone[7][1]);
// console.log(arrayone[8][0]);


// let variabilina = 5;
// variabilina = 'Donato';
// console.log(variabilina);
// arrayone[7] = 'Donato';

// console.log(arrayone);

// PASSAGGIO PER VALORE -> tipi di dato primitivi -> si sovrascrivono

// let valore = 5;
// let copiaValore = valore;

// copiaValore = copiaValore + 1;

// console.log(valore);
// console.log(copiaValore);

// PASSAGGIO PER RIFERIMENTO -> tipi di dato non primitivi -> mutano 

// let array = [1, 2, 3];
// let array2 = array;

// console.log(array);

// array[0] = 'Pippo';
// console.log(array);
// console.log(array2);


// ESERCIZI

// length è una proprietà sia degli array, sia delle stringhe
// indica la lunghezza degli elementi contenuti in un array
// oppure indica il numero di caratteri contenuti in una stringa

// come faccio a distinguere una proprietà da un metodo/funzione?
// il metodo ha le parentesi, le proprietà no!

// let numbers = [1, 2, 3, 4, 5];

// console.log(numbers);

// for(let i = 0; i < numbers.length; i++){
//     console.log(numbers[i]);
// }

// console.log(numbers[0]);
// console.log(numbers[1]);
// console.log(numbers[2]);
// console.log(numbers[3]);
// console.log(numbers[4]);


// VOGLIO MOLTIPLICARE SOLO I NUMERI PARI
// let numbers = [1, 2, 3, 4, 5];

// console.log(numbers);

// for(let i = 0; i < numbers.length; i++){
//     verifichiamo col modulo se il numero è pari o dispari
//     if(numbers[i] % 2 == 0){
//         numbers[i] = numbers[i] * 2;
//     }
// }

// console.log(numbers);

// METODI DEGLI ARRAY

// let numbers = [1, 2, 3, 4, 5];
// numbers.push(6, 10, 14, 'Ciao', ['Madooo', 'Nicooo']);

// console.log(numbers);

// numbers[9].push('diesci');

// console.log(numbers);


// let numbers = [1, 2, 3, 4, 5];

// let popped = numbers.pop();

// console.log(numbers);
// console.log(popped);


// let numbers = [1, 2, 3, 4, 5];

// let shifted = numbers.shift();

// console.log(numbers);
// console.log(shifted);

// let numbers = [1, 2, 3, 4, 5];

// numbers.unshift(6, 10, 'Ciaone');
// console.log(numbers);

// ESERCIZIO ULTRA MEGA Madooo
// dati due array della stessa lunghezza, voglio creare un terzo array che conterrà sempre lo stesso numero di elementi, ma ciascun elemento deve corrispondere alla somma tra gli elementi del primo e del secondo array

// mi serve il push per inserire elementi in array3
// devo addizionare l'elemento in posizione 0 del primo array, con l'elemento in psizione 0 del secondo array e così via.

// let array1 = [1, 2, 3, 4, 5];
// let array2 = [6, 7, 8, 9, 10];  
// let array3 = [];

// for(let i = 0; i < array1.length; i++){
//    array3[i] = array1[i] + array2[i];   
//     let somma = array1[i] + array2[i];
//     array3.push(somma);
// } 

// console.log(array1);
// console.log(array2);
// console.log(array3);

// let string = 'Ciao                 ';
// console.log(string.length);

// let string = 'I topi non avevano nipoti';
// console.log(string);

// let stringaSenzaSpazi = string.replace(/\s/g, '');
// console.log(stringaSenzaSpazi);
// let splitted = string.split(' ');
// console.log(splitted);

// let reversed = splitted.reverse();
// console.log(reversed);

// CONCATENAZIONE DI METODI
// let reversedJoined = stringaSenzaSpazi.split('').reverse().join('');
// console.log(reversedJoined);

// voglio controllare se la stringa è un palindromo

// if(stringaSenzaSpazi.toLowerCase() == reversedJoined.toLowerCase()){
//     console.log('La stringa è palindroma');
// } else {
//     console.log('La stringa non è palindroma');
// }


// giochiamo con il .sort()

// let numbers = [123, 3456, 1234, 678, 73274];
// console.log(numbers);

// per l'ordine crescente
// numbers.sort(function(a, b){
//     return a - b;
// });

// console.log(numbers);

// per l'ordine decrescente
// numbers.sort(function(a, b){
//     return b - a;
// });
// console.log(numbers);

// sintassi contratta

// numbers.sort((a, b)=> a - b);

// PER LE LETTERE INVECE:
// let letters = ['C', 'E', 'H', 'L', 'D'];

// ordine crescente per le lettere
// letters.sort();

// ordine decrescente per le lettere
// letters.sort().reverse();

// console.log(letters);

// .map()

// voglio moltiplicare tutti i numeri dell'aray * 2
// let numbers = [1, 2, 3, 4, 5];

// for(let i = 0; i < numbers.length; i++){
//     numbers[i] = numbers[i] * 2;
// }

// console.log(numbers);

// facciamolo con la map

// let numbers = [1, 2, 3, 4, 5];

// console.log(numbers);
// siccome la map fa un ciclo, nelle tonde della callback, vuole un parametro formale. da documentazione si chiama el = element, ma siccome noi siamo bravi, dobbiamo essere parlanti
// il parametro formale, corrisponde al singolo elemento dell'array ad ogni giro di ciclo
// let moltiplicato = numbers.map((numero)=>numero * 2);
// console.log(moltiplicato);

// se voglio solo clonare l'array di partenza
// let clonato = numbers.map((numero)=>numero);

// VOGLIO SAPERE SE IL NUMERO è PARI O DISPARI CON LA MAP
// let numbers = [1, 2, 3, 4, 5];

// let pariDispari = numbers.map((numero)=>{
//     if(numero % 2 == 0){
//         return 'pari';
//     } else {
//         return 'dispari';
//     }
// });

// con sintassi astratta (operatore ternario + return implicito)
// let pariDispari = numbers.map((numero)=> (numero % 2 == 0) ? 'pari': 'dispari');
// console.log(pariDispari);

// Mettiamo il caso di voler modificare solo gli elementi con un determinato indice

// let numbers = [1, 2, 3, 4, 5];

// istruiramo la map a portarsi dietro, non solo il singolo elemento dell'array, ma anche l'indice dell'elemento in quell'esatto momento di ciclo
// let modificato = numbers.map((numero, i)=>{
//     if(i % 2 == 1){
//         return numero * 2;
//     } else {
//         return numero;
//     }
// });

// console.log(modificato);

// .filter()
// filtrare nel nuovo array solo i numeri > 5
// let numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
// let moreThanFive = [];

// for(let i = 0; i < numbers.length; i++){
//     if(numbers[i] > 5){
//        moreThanFive.push(numbers[i]); 
//     }
// }

// console.log(moreThanFive);

// con filter

// let numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// let filtrato = numbers.filter((number)=>{
//      return number > 5
// });

// let filtrato = numbers.filter((number)=>number > 5);

// stiamo filtrando numbers, per farci restituire in un nuovo array, clone dell'array di partenza, solo i numeri > 5. Una volta fatto questo, con la map, cicliamo su questo nuovo array e ogni numero verrà moltiplicato * 2
// let filtrato = numbers.filter((number)=>number > 5).map((numero)=> numero * 2);

// numbers = filtrato;
// console.log(numbers);
// console.log(filtrato);

// voglio fare l'addizione tra tutti gli elementi di questo array
// let numbers = [1, 2, 3, 4, 5];

// let somma = 0;

// for(let i = 0; i < numbers.length; i++){
//     somma = somma + numbers[i];
//     somma += numbers[i];
// }

// facciamolo con la .reduce()
// let numbers = [1, 2, 3, 4, 5];
// dentro le tonde della callback, la reduce vuole 2 parametri. 1 è la saccoccia, comumenemente chiamata accumulator. 2 il singolo elemento dell'array ad ogni giro di ciclo
// let somma = numbers.reduce((acc, numero)=> acc + numero);

// console.log(somma);

// let numbers = [1, 2, 3, 4, 5];

// console.log(...numbers);


// console.log(Math.max(...numbers));


// uso lo spread operator per popolare un array

// function somma(numero1, numero2, numero3){
//     let sommaccia = numero1 + numero2 + numero3;
//     return sommaccia;
// }


// let sum = somma(5, 2, 3);
// console.log(sum);

// e se la funzione ricevesse n parametri, come faccio? Spread operator

// function somma(...numeri){
//     return numeri.reduce((acc, numero)=> acc + numero);
// }

// let risultatoFinale = somma(1, 2, 3, 4, 5);
// console.log(risultatoFinale);

// .splice()

let numbers = [1, 2, 3, 4, 5];
// partendo dall'inice che io ho indicato, posso indicare quanti elementi cancellare.
// numbers.splice(2, 2);
// console.log(numbers);

// e se volessi aggiungere? Indico i parametri da aggiungere, dopo aver indicato i primi 2

// numbers.splice(2,1,'ciao');
// console.log(numbers);

// e se volessi aggiungere senza eliminare elementi? indico lo 0 nel posto in cui vanno gli elementi da eliminare

// quando aggiungiamo, senza eliminare, l'elemento aggiuntivo si andrà esattamente a posizionare nel punto dell'indice del vecchio elemento.
// numbers.splice(3, 0, 'ciao', 100, 20, 4504004040);
// console.log(numbers);

// numbers.splice(1, 2);
// console.log(numbers);