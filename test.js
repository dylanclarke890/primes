document.addEventListener(
  "DOMContentLoaded",
  function () {
    const testEl = document.getElementById("test");
    testEl.innerHTML = `2: ${checkPrime(2)}, 3: ${checkPrime(3)}, 4: ${checkPrime(4)}, 5: ${checkPrime(5)}}`;
  },
  false
);
