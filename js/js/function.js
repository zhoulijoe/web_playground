'use strict';

function functionTest() {
  functionBasics();
}

function functionBasics() {
  // function should be considered as a specialized version of object, more like a subtype
  var myFunc = function() {};
  console.log('type of myFunc is: ' + typeof myFunc);

  // Named function declaration with no param
  function mySimpleFunc() {
    console.log('mySimpleFunc is called');
  }

  // Function can have properties
  mySimpleFunc.prop = 'hello';

  // Calling a function with no param
  mySimpleFunc();

  // Get property of a function
  console.log('mySimpleFunc.prop=' + mySimpleFunc.prop);
}
