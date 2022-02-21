'use strict';

function numberTest() {
  mathBasic();
  builtInNumberFunctions();
  conversion();
}

function mathBasic() {
  // Basic calculation
  var result = 1 + 2 * 3 - 10 / 5;
  console.log('Basic calculation result: ' + result);

  console.log(0.1 + 0.2);
}

function builtInNumberFunctions() {
  var myNum = 3.1415926;

  // Limit decimal points
  console.log('limit to 4 decimal points: ' + myNum.toFixed(4));
}

function conversion() {
  // Convert string to number
  var myInt = Number('5');
  console.log('Converted myInt: ' + myInt);
}
