'use strict';

function thisTest() {
  bindingExceptionIndirection();
  hardBinding();
}

function bindingExceptionIndirection() {
  function foo() {
    console.log(this.a);
  }

  var o = { a: 3, foo: foo };
  var p = { a: 4 };
  var q = { a: 5 };

  o.foo(); // 3
  p.foo = o.foo;
  p.foo(); // 4
  // Result of assignment is just the function reference without any object context
  // (q.foo = o.foo)(); // undefined
}

function hardBinding() {
  function bind(fn, context) {
    return function() {
      return fn.apply(context, arguments);
    };
  }

  function foo(num) {
    console.log(this.a + ', ' + num);
  }

  var wrappedFoo = bind(foo, {a: 10});
  wrappedFoo(5);
}


