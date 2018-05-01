function fib(n) {
  var fibs = [0, 1];

  var i = 2;
  while(fibs[i - 1] < n) {
    fibs.push(fibs[i - 1] + fibs[i - 2]);

    i++;
  }

  return fibs
}

function solution(A) {
  A.push(1);
  var N = A.length;
  var fibs = fib(N);
  var jumpCount = new Array(N);

  for(var i = 0; i < N; i++) {
    if(A[i] === 1) {
      var min = -1;
      for(var j = 1; j < fibs.length; j++) {
        var prev = i - fibs[j];

        if (prev === -1) {
          min = 1;
        } else if (prev < -1) {
          break;
        } else if (A[prev] === 0 || jumpCount[prev] === -1) {
          continue;
        } else {
          var jumps = jumpCount[prev] + 1;
          if (min === -1 || jumps < min) {
            min = jumps;
          }
        }
      }

      jumpCount[i] = min;
    } else {
      jumpCount[i] = -1;
    }
  }

  if (jumpCount[N - 1]) {
    return jumpCount[N - 1];
  } else {
    return -1;
  }
}

function test() {
  var tests = [
    [[]],
    [[0, 0, 0, 1, 1, 0, 1, 0, 0, 0, 0]]
  ];

  for(var i = 0; i < tests.length; i++) {
    console.log(tests[i] + ' => ' + solution.apply(null, tests[i]));
  }
}

test();
