console.log("Hello World!\n==========\n");

//1. Ignore Even

for (let i = 0; i < 100; i++) {
    if (i % 2 != 0) {
        console.log(i);
    }
 }

//2. FIZZBUZZ

for (let i = 0; i < 100; i++) {
    if (i % 3 == 0 && i % 5 == 0) {
        console.log(i, "FIZZBUZZ");
    }
    else if (i % 3 == 0) {
        console.log(i, "FIZZ");
    }
    else if (i % 5 == 0) {
            console.log(i, "BUZZ");
        }
    else {
        console.log(i);
    }
    }

//3. Do exercise 1 with Do loop
let i = 0;
while (i <= 100) {
    if (i % 2 != 0) {
        console.log(i);
}
i++;
}

//3.5. Do exercise 2 with Do loop
let x = 0;
while (x <= 100) {
    if (x % 3 == 0 && x % 5 == 0) {
        console.log(x, "FIZZBUZZ");
    }
    else if (x % 3 == 0) {
        console.log(x, "FIZZ");
    }
    else if (x % 5 == 0) {
            console.log(x, "BUZZ");
        }
    else {
        console.log(x);
}
x++;}

//4. Find value
let value = Math.round((Math.random() * 500)); // creates a random number between 0 and 500
let n = Math.round(Math.random() * (500 - 100) + 100); // creates a random number between 100 and 500
for (let i = 0; i < n; i++) {
    if (i == value) {
        console.log("Found value!");
        break;
    }
    else {
        console.log("Did not find value");
    }
}

//5. FIZZBUZZ REmix
let fizzDivisor = Math.round(Math.random() * (10 - 1) + 1);
let buzzDivisor = Math.round(Math.random() * (10 - 1) + 1);
let nn = Math.round(Math.random() * (1000 - 1) + 1);
 i = Math.round(Math.random() * (10 - 1) + 1);

for (i = 0; i < nn; i++) {
    if (i % fizzDivisor == 0 && i % buzzDivisor == 0) {
        console.log(i, "FizzBuzz");
    }
    else if (i % fizzDivisor == 0) {
        console.log(i, "Fizz");
    }
    else if (i % buzzDivisor == 0) {
        console.log(i, "Buzz");
    
    }
    }
