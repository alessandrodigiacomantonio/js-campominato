var mines = [];
var numeroUtente = [];
var checker;
var gameMode = '';
var i = 0;
var numFrom;
var numToo;
var numOfTry;
do {
  gameMode = prompt('Scegli quale Modalità di Gioco vuoi fare.\nDifferiscono l\'una dall\'altra dal numero di caselle del tabellone di gioco e dal numero di giocate che dovrai fare.\nOgni volta che riesci a fare un passo, guadagni 50 punti.\nScegli tra:\n\n"Hardcore" (16 mine, 50 caselle, 34 possibili giocate)\n"Difficile" (16 mine, 80 caselle, 64 possibili giocate)\n"Normale" (16 mine, 100 caselle, 84 possibili giocate)').toLowerCase();
} while (gameMode != 'normale' && gameMode != 'difficile' && gameMode != 'hardcore');
switch (gameMode) {
  case 'normale': {
    numFrom = 1;
    numToo = 100;
    numOfTry = 84;
    break;
  }
  case 'difficile': {
    numFrom = 1;
    numToo = 80;
    numOfTry = 64;
    break;
  }
  case 'hardcore': {
    numFrom = 1;
    numToo = 50;
    numOfTry = 34;
    break;
  }
  default: alert('C\'è stato un errore durante la selezione della modalità di gioco, refresha la pagina. ');
}
for (let i = 0; i < 16; i++) {
  let random;
  do {
    random = (randomNumGen(numFrom, numToo));
  } while (checkIfElementIsInArray(random, mines));
  mines.push(random);
}
console.log(mines);
do {
  let random;
  do {
    random = parseInt(prompt('Inserisci il ' + (i+1) + '° numero ed incrociamo le dita (Ammessi da '+numFrom+' a '+numToo+')'));
  } while (isNaN(random) || random < numFrom || random > numToo || checkIfElementIsInArray(random, numeroUtente));
  numeroUtente[i] = random;
  console.log(numeroUtente[i]);
  checker = checkIfElementIsInArray(numeroUtente[i], mines);
  i++;
} while (i < numOfTry && checker != true);
if (checker == true) alert('Mi spiace, ma hai preso una mina e hai perso =(\nHai totalizzato '+((i-1)*50)+' punti !');
else alert('Whoooa! Hai schivato tutte le mine e hai vinto!!\nHai totalizzato la bellezza di '+((i-1)*50)+' punti !');

function randomNumGen(numFrom, numToo) {
  var numRandom = Math.floor(Math.random()*(numToo-numFrom+1)+numFrom);
  return numRandom;
}
function checkIfElementIsInArray(element, array) {
  var i = 0;
  do {
    if (element == array[i]) return true;
    else i++;
  } while (i < array.length);
  return false;
}
