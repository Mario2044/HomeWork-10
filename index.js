 
let grivna = 27;

let number = +prompt("Enter a positive number: ");
let isPrime = true;

let numbers = prompt("Enter a positive number: ");

//Вивести числа від 20 до 30 через пропуск, використовуючи крок 0,5 (20 20,5 21 21,5….).
for (let i = 20; i <= 30; i = i + 0.5) {
    console.log(i);
}

//Один долар коштує 27 гривень. Вивести дані з розрахунком вартості 10, 20, 30... 100 доларів.
for (i = 10; i <= 100; i = i + 10) {
    console.log(i * grivna);
}

//Дане ціле число. Вивести всі цілі числа від 1 до 100, квадрат яких не перевищує числа N.
nextPrime:
for (let i = 2; i <= 100; i++) { 

  for (let j = 2; j < i; j++) {
    if (i % j == 0) continue nextPrime;
  }

  console.log(i);
}

//Дане ціле число. З'ясувати, чи є воно простим 
//(простим називається число, більше 1, які не мають інших дільників крім 1 і себе).
if (number === 1) {
    console.log("1 is neither prime nor composite number.");
}
else if (number > 1) {
    for (let i = 2; i < number; i++) {
        if (number % i == 0) {
            isPrime = false;
            break;
        }
    }
    if (isPrime) {
        console.log(`${number} is a prime number`);
    } else {
        console.log(`${number} is a not prime number`);
    }
}
else {
    console.log("The number is not a prime number.");
}

//Дане деяке число. Визначити, чи можна одержати це число шляхом зведення числа 3 у деякий ступінь. 
//(Наприклад, числа 9, 81 можна отримати, а 13 - не можна)
if (numbers % 3 == 0) {
    console.log("Yes");
} else {
    console.log("No");
}
