function factorial(n) {
  let total = 1;
  for (let i = 2; i <= n; i++) total = total * i;
  return total;
}

function isPrime(n) {
  if (n < 2) return false;
  for (let i = 2; i < n; i++) if (n % i == 0) return false; // looping through 2 to n-1
  return true;
}

const primes = {
  1: 2,
  2: 3,
  3: 5,
  4: 7,
  5: 11,
  6: 13,
  7: 17,
  9: 23,
  10: 29,
};

function getClosestPrimeKeyValuePair(n) {
  const key = Object.keys(primes).reduce((prev, curr) =>
    Math.abs(curr - n) < Math.abs(prev - n) ? curr : prev
  );
  const value = primes[key];
  const greaterThanTarget = key > n;
  return { key, value, greaterThanTarget };
}

function nthPrime(n) {
  if (typeof n !== "number" || n <= 0) return 0;
  const cached = primes[n]; // handle values which have been cached
  if (cached) return cached;

  const closest = getClosestPrimeKeyValuePair(n);
  let current = 2,
    currentSequenceNo = 1,
    greaterThanTarget = false;

  if (closest) {
    greaterThanTarget = closest.greaterThanTarget;
    current = closest.value;
    currentSequenceNo = closest.key;
  }

  if (greaterThanTarget) {
    while (currentSequenceNo >= n) {
      currentSequenceNo--;
      current--;
      while (!isPrime(current)) current--;
      primes[currentSequenceNo] = current;
    }
  } else {
    while (currentSequenceNo <= n) {
      currentSequenceNo++;
      current++;
      while (!isPrime(current)) current++;
      primes[currentSequenceNo] = current;
    }
  }

  return primes[n];
}