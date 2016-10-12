'use strict';

function listTest() {
  listBasics();
  listOperations();
}

function listBasics() {
  // Array should be considered as a specialized version of object, more like a subtype

  // Creation, array can contain a combination of any type
  var myArr = ['hello', 22, true];

  // Array has type object
  console.log('type of myArr is: ' + typeof myArr);

  // Get value based on index
  console.log('myArr[0]=' + myArr[0] + ', myArr[1]=' + myArr[1] + ', myArr[2]=' + myArr[2]);
  // Get length of array
  console.log('myArr length: ' + myArr.length);
}

function listOperations() {
  // Check if string is in list the native way
  var myList = ['a', 'b', 'c'];
  if (myList.indexOf('b') > -1) {
    console.log('b is in myList');
  }
  // Or using underscore
  if (_(myList).contains('b')) {
    console.log('b is in myList using underscore');
  }
}
