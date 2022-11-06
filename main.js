function factorial(n) {
  let total = 1;
  for (let i = 2; i <= n; i++) total = total * i;
  return total;
}

function checkPrime(n) {
  return Number.isInteger((factorial(n - 1) + 1) / n);
}

function getPrime(n) {}