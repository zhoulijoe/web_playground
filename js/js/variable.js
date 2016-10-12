'use strict';

// Global constant
const MY_GLOBAL_CONST = 10;

function variableTest() {
  console.log('MY_GLOBAL_CONST: ' + MY_GLOBAL_CONST);

  // Local variable declaration
  var myLocalVar = 1;
  console.log('myLocalVar after declaration: ' + myLocalVar);

  // Check variable type, returns a string indicating type
  var type = typeof myLocalVar;
  console.log('type of myLocalVar: ' + type);
}
