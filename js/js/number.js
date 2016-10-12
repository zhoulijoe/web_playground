'use strict';

function numberTest() {
  mathBasic();
  builtInFunctions();
  conversion();
}

function mathBasic() {
  // Basic calculation
  var result = 1 + 2 * 3 - 10 / 5;
  console.log('Basic calculation result: ' + result);
}

function builtInFunctions() {
  var myNum = 3.1415926;

  // Limit decimal points by converting to closest number
  console.log('limit to 2 decimal points: ' + myNum.toFixed(4));
}

function conversion() {
  // Convert string to number
  var myInt = Number('5');
  console.log('Converted myInt: ' + myInt);
}
