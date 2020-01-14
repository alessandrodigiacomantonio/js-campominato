// var mines = [];
// for (let i = 0; i < 16; i++) {
//   mines.push(randomNumGen(0, 16))
// }
// console.log(mines);
// var numeroUtente = 0;
// do {
//
// } while ()



function randomNumGen(numFrom, numToo) {
  var numRandom = Math.floor(Math.random()*(numToo-numFrom+1)+numFrom)
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
