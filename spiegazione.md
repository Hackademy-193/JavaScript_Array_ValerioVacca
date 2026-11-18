ARRAY -> tipo di dato non primitivo (oggetto)

Nello specifico sono un tipo particolare di oggetto che rappresenta una lista NON ORDINATA di elementi, il cui ordinamento è identificato da un indice rappresentato da un numero >= 0

il primo elemento all'interno di un array, si troverà sempre in indice 0

PASSAGGIO PER VALORE -> quando sono dei primitivi
I tipi primitivi (come numeri e stringhe) vengono passati per VALORE.
Tutte le modifiche non influiscono sulla variabile originale

PASSAGGIO PER RIFERIMENTO -> quando sono degli oggetti
I tipi non primitivi (come array e oggetti) vengono passati per RIFERIMENTO.
Tutte le modifiche influiscono sulla variabile originale

METODI DEGLI ARRAY

.push()
mi permette di aggiungere uno o più elementi in coda all'array, quindi come ultimo elemento

.pop()
permette di rimuovere l'ultimo elemento di un array E INOLTRE mi permette (se voglio) di salvarlo in una locazione di memoria.
In pratica, se estraggo l'ultimo elemento, posso salvarlo da qualche parte

.shift()
permette di rimuovere il primo elemento di un array E INOLTRE mi permette (se voglio) di salvarlo in una locazione di memoria.

.unshift()
permette di aggiungere uno o più elementi all'inizio dell'array

Se volessi mutare una stringa in un array posso sfruttare il metodo .split()
permette di spezzettare una stringa in un array, contente tutti gli elementi separati dal carattere con il quale decido io di tagliare la stringa.

Come faccio a rivoltare un array? A capovolgerlo?
Con il metodo .reverse();

.join()
è l'opposto di .split() perché permette di convertire un array in stringa, usando il carattere che deve separare i vari elementi.

.sort()
mi permette di riordinare gli elementi all'interno di un array in ordine crescente o decrescente, QUALORA SIANO NUMERICI. Oppure mi permette di riordinarli in ordine alfabetico, QUALORA FOSSERO STRINGHE.

.map()
GENERA UN NUOVO ARRAY, CLONE DELL'ARRAY DI PARTENZA e mi permette di modificare tutti o alcuni elementi all'interno del NUOVO array che ha generato.


.filter()
GENERA UN NUOVO ARRAY, CLONE DELL'ARRAY DI PARTENZA e mi permette di filtrare gli elementi da inserire nel nuovo array, a patto che rispettino una DETERMINATA CONDIZIONE.

.forEach()
cicla sull'array di partenza, NON GENERA UN CLONE, e per ogni elemento all'interno dell'array genera dei side-effect
questo metodo è previsto che faccia solo side effect, difatti se dovessi ERRONEAMENTE usarlo per fare operazioni matematiche che return fuori qualcosa, otterremo sempre e solo un undefined.

.reduce()
MI PERMETTE DI RIDURRE TUTTO IL CONTENUTO DI UN ARRAY IN UN UNICO ELEMENTO CHE NON E' PIù UN ARRAY

spread operator / splat operator -> ...
mi serve a rompere un array per poi farci qualcosa.
posso però usarlo anche per popolare un array.

.splice()
Permette di rumuovere e/o aggiungere elementi in un desiderato indice dell'array