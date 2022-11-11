function testPrimes() {
  const testEl = document.getElementById("test");
  const testNumbers = [2, 3, 4, 5, 7, 9, 11, 13];
  const html = testNumbers.map((n) => `${n}: ${isPrime(n)}`).join(", ");
  testEl.innerHTML = html;
}

function testGetPrimes() {
  const testEl = document.getElementById("test");
  const testNumbers = [1009];
  let html = testNumbers
    .map((n) => `<b>${n}</b><span>&MediumSpace;-&MediumSpace;</span>${nthPrime(n)}`)
    .join(", ");
  testEl.innerHTML = html;
}

document.addEventListener("DOMContentLoaded", testGetPrimes, false);
