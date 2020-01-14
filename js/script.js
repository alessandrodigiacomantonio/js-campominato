var mines = [];
for (let i = 0; i < 16; i++) {
  mines.push(randomNumGen(0, 100))
}
console.log(mines);
var numeroUtente;
var checker;
var i = 0;
do {
  do {
    numeroUtente = parseInt(prompt('Inserisci il ' + (i+1) + '° numero ed incrociamo le dita !!'));
  } while (isNaN(numeroUtente) || numeroUtente < 0 || numeroUtente > 100);
  console.log(numeroUtente);
  checker = checkIfElementIsInArray(numeroUtente, mines);
  i++;
} while (i < 84 && checker != true);
if (checker == true) alert('Mi spiace, ma hai preso una mina e hai perso =(');
else alert('Whoooa! Hai schivato tutte le mine e hai vinto!!');



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
