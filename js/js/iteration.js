'use strict';

function iterationTest() {
  whileTest();
}

function whileTest() {
  // Basic while syntax
  var count = 0;
  while(count < 5) {
    count++;
  }
  console.log('Count after while loop: ' + count);
}
