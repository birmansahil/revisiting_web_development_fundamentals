const outputEl = document.querySelector(".output-el");
const fizzBuzzEl = document.querySelector(".fizzbuzz-el");

for (let i=0; i<10; i++) {
    outputEl.textContent += i;
}

// Fizz Buzz challenge hacker rank

for (let i=1; i<=15; i++) {
    if (i%3 == 0 && i%5 == 0) {
        fizzBuzzEl.textContent += "FizzBuzz";
    } else if (i % 3 == 0) {
        fizzBuzzEl.textContent += "Fizz";
    } else if (i % 5 == 0) {
        fizzBuzzEl.textContent += "Buzz";
    } else {
        fizzBuzzEl.textContent += i;
    }
}