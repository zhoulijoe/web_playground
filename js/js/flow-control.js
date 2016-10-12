'use strict';

function flowControlTest() {
  falseValueTest();
}

function falseValueTest() {
  if (!false) {
    console.log('false boolean is false');
  }
  if (!undefined) {
    console.log('undefined is false');
  }
  if (!null) {
    console.log('null is false');
  }
  if (!0) {
    console.log('0 is false');
  }
  if (!'') {
    console.log('empty string is false');
  }
}
