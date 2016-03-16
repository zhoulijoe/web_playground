'use strict';

function listTest() {
  listOperations();
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
