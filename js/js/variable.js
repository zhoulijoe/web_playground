'use strict';

function variableTest() {
  // Local variable declaration
  var myLocalVar = 1;
  console.log('myLocalVar after declaration: ' + myLocalVar);

  // Check variable type, returns a string indicating type
  var type = typeof myLocalVar;
  console.log('type of myLocalVar: ' + type);

  variableMutability();
  variableScope();
}

function variableMutability() {
  // Mutable
  let mutableVar = 1;
  mutableVar = 2;
  console.log('mutableVar=' + mutableVar);

  // Immutable
  const immutableVar = 1;
  try {
    immutableVar = 2;
  } catch(error) {
    console.log('Error changing immutable var: ' + error);
  }
}

const GLOBAL_IMMUTABLE_VAR = 10;

function variableScope() {
  // Global scope
  console.log('GLOBAL_IMMUTABLE_VAR=' + GLOBAL_IMMUTABLE_VAR);

  // Function scope
  if (true) {
    var funcVar = 1;
  }
  console.log('funcVar=' + funcVar);

  // Block scope
  if (true) {
    let blockVar = 1;
    const immutableBlockVar = 2;
  }
  try {
    console.log('blockVar=' + blockVar);
  } catch(error) {
    console.log('Error trying to reference blockVar: ' + error);
  }
  try {
    console.log('immutableBlockVar=' + immutableBlockVar);
  } catch(error) {
    console.log('Error trying to reference immutableBlockVar: ' + error);
  }

}

variableTest();