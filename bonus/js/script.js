var mines = [];
var numeroUtente;
var checker;
var gameMode = '';
var i = 0;
do {
  gameMode = prompt('Scegli quale Modalità di Gioco vuoi fare.\nDifferiscono l\'una dall\'altra dal numero di caselle con le mine e dal numero di giocate che dovrai fare. \nScegli tra:\n\n"Hardcore" (16 mine, 50 caselle, 34 possibili giocate)\n"Difficile" (16 mine, 80 caselle, 64 possibili giocate)\n"Normale" (16 mine, 100 caselle, 84 possibili giocate)').toLowerCase();
} while (gameMode != 'normale' && gameMode != 'difficile' && gameMode != 'hardcore');
switch (gameMode) {
  case 'normale': {
    for (let i = 0; i < 16; i++) {
      mines.push(randomNumGen(0, 100));
    }
    console.log(mines);
    do {
      do {
        numeroUtente = parseInt(prompt('Inserisci il ' + (i+1) + '° numero ed incrociamo le dita (Ammessi da 1 a 100)'));
      } while (isNaN(numeroUtente) || numeroUtente <= 0 || numeroUtente > 100);
      console.log(numeroUtente);
      checker = checkIfElementIsInArray(numeroUtente, mines);
      i++;
    } while (i < 84 && checker != true);
    if (checker == true) alert('Mi spiace, ma hai preso una mina e hai perso =(');
    else alert('Whoooa! Hai schivato tutte le mine e hai vinto!!');
    break;
  }
  case 'difficile': {
    for (let i = 0; i < 16; i++) {
      mines.push(randomNumGen(0, 80));
    }
    console.log(mines);
    do {
      do {
        numeroUtente = parseInt(prompt('Inserisci il ' + (i+1) + '° numero ed incrociamo le dita (Ammessi da 1 a 80)'));
      } while (isNaN(numeroUtente) || numeroUtente <= 0 || numeroUtente > 80);
      console.log(numeroUtente);
      checker = checkIfElementIsInArray(numeroUtente, mines);
      i++;
    } while (i < 64 && checker != true);
    if (checker == true) alert('Mi spiace, ma hai preso una mina e hai perso =(');
    else alert('Whoooa! Hai schivato tutte le mine e hai vinto!!');
    break;
  }
  case 'hardcore': {
    for (let i = 0; i < 16; i++) {
      mines.push(randomNumGen(0, 50));
    }
    console.log(mines);
    do {
      do {
        numeroUtente = parseInt(prompt('Inserisci il ' + (i+1) + '° numero ed incrociamo le dita (Ammessi da 1 a 50)'));
      } while (isNaN(numeroUtente) || numeroUtente <= 0 || numeroUtente > 50);
      console.log(numeroUtente);
      checker = checkIfElementIsInArray(numeroUtente, mines);
      i++;
    } while (i < 34 && checker != true);
    if (checker == true) alert('Mi spiace, ma hai preso una mina e hai perso =(');
    else alert('Whoooa! Hai schivato tutte le mine e hai vinto!!');
    break
  }
  default: alert('C\'è stato un errore durante la selezione della modalità di gioco, refresha la pagina. ')
}

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
