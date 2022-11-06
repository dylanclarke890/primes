function testPrimes() {
  const testEl = document.getElementById("test");
  const testNumbers = [2, 3, 4, 5, 7, 9, 11, 13];
  const html = testNumbers.map((n) => `${n}: ${checkPrime(n)}`).join(", ");
  testEl.innerHTML = html;
}

document.addEventListener("DOMContentLoaded", testPrimes, false);
