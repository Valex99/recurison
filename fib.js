// Fibonacci iteration
let fibArray = [];

function fibs(n) {
  for (let i = 0; i < n; i++) {
    if (i === 0) {
      fibArray.push(0);
    } else if (i === 1) {
      fibArray.push(1);
    } else {
      fibArray.push(
        fibArray[fibArray.length - 1] + fibArray[fibArray.length - 2]
      );
    }
  }
}

fibs(8);

console.log(fibArray);

// Fibonacci recursion
fibRecArr = [];

function fibsRec(n) {
  // Base case to terminate recursion
  if (n === 1) {
    return [0];
  } else if (n === 2) {
    return [0, 1];
  }

  // Recursive case
  const previusFibs = fibsRec(n - 1);
  const nextFib =
    previusFibs[previusFibs.length - 1] + previusFibs[previusFibs.length - 2];
  return [...previusFibs, nextFib];
}

console.log(fibsRec(8));
