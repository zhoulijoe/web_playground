'use strict';

function objectTest() {
  objectBasics();
  builtInFunctions();
  getterAndSetter();
  
  function objectBasics() {
    // Other than primitive types, everything else is object

    // Creation
    var myObj = {
      key1: 'value1',
      'key 2': 'value2'
    };
    var myObj2 = new Object();
    myObj2.prop1 = 'value1';

    console.log('undefined property: ' + myObj.unknown);

    // Dictionary has type object
    console.log('type of myObj is: ' + typeof myObj);

    // Get value based on key
    console.log('{key1:' + myObj.key1 + ', key 2:' + myObj['key 2'] + '}');
  }

  function builtInFunctions() {
    // Check if property exist on just the object
    var myObj = {
      a: 'aValue'
    };

    console.log('myObj has property \'a\': ' + myObj.hasOwnProperty('a'));
    console.log('myObj has hasOwnProperty: ' + myObj.hasOwnProperty('hasOwnProperty'));

    // Check if property exist on object and its prototype
    console.log('myObj or its prototype has hasOwnProperty: ' + ('hasOwnProperty' in myObj));
  }

  function getterAndSetter() {
    var myObject = {
      // define a getter for property
      get a() {
        return this._a_;
      },

      // define a setter for property
      set a(val) {
        this._a_ = val * 2;
      }
    };
    
    myObject.a = 2;
    console.log('myObject.a=' + myObject.a);
  }
}
