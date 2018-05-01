function gcd(a, b) {
  if (a % b === 0) {
    return b;
  } else {
    if (a > b) {
      return gcd(b, a % b);
    } else {
      return gcd(b, a);
    }
  }
}

function solution(N, M) {
  var greatestCommon = gcd(N, M);

  return N / greatestCommon;
}

function test() {
  var tests = [
    [10, 4],
    [20, 50]
  ];

  for(var i = 0; i < tests.length; i++) {
    console.log(tests[i] + ' => ' + solution.apply(null, tests[i]));
  }
}

test();
