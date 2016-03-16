'use strict';

function numberTest() {
  mathBasic();
  conversion();
}

function mathBasic() {
  // Basic calculation
  var result = 1 + 2 * 3 - 10 / 5;
  console.log('Basic calculation result: ' + result);
}

function conversion() {
  // Convert string to number
  var myInt = Number('5');
  console.log('Converted myInt: ' + myInt);
}
