// Paliondrom using Function and String
// function isPal(str) {
//   let newStr = str.toLowerCase();
//   let left = 0;
//   //   debugger;
//   let right = newStr.length - 1;
//   while (left < right) {
//     if (newStr[left] !== newStr[right]) {
//       console.log("No String");
//       return false;
//     }
//     left++;
//     right--;
//   }
//   console.log("given string is Palindrome");
//   return true;
// }
// console.log(isPal("level"));
// console.log(isPal("leve"));

// Paliondrom using Number
// var x = +prompt("Enter your no: ");
// var reverse = 0;
// var rem;
// y = x;
// while (x > 0) {
//   rem = x % 10;
//   reverse = reverse * 10 + rem;
//   x = parseInt(x / 10);
// }
// document.write("<h1>Reverse number is " + reverse);
// if (reverse == y) {
//   console.log(reverse + " is Paliondrome");
// } else {
//   console.log(reverse + " is not Paliondrome");
// }
// console.log("x value is : " + x);
// console.log(typeof +x);
// console.log(x.typeof)

// program to find the factorial of a number
// factorial of n (n!) = 1 * 2 * 3 * 4.....n
//Find Factorial

// take input from the user
// const number = parseInt(prompt("Enter a positive integer: "));

// // checking if number is negative
// if (number < 0) {
//   console.log("Error! Factorial for negative number does not exist.");
// }

// // if number is 0
// else if (number === 0) {
//   console.log(`The factorial of ${number} is 1.`);
// }

// // if number is positive
// else {
//   let fact = 1;
//   for (i = 1; i <= number; i++) {
//     fact *= i;
//   }
//   console.log(`The factorial of ${number} is ${fact}.`);
// }

// program to find the factorial of a number using the Recursion function
// function factorial(x) {
//   // if number is 0
//   if (x == 0) {
//     return 1;
//   }

//   // if number is positive
//   else {
//     return x * factorial(x - 1);
//   }
// }

// // take input from the user
// const num = prompt("Enter a positive number: ");

// // calling factorial() if num is positive
// if (num >= 0) {
//   const result = factorial(num);
//   console.log(`The factorial of ${num} is ${result}`);
// } else {
//   console.log("Enter a positive number.");
// }
// factorial(4) returns 4 * factorial(3)
// factorial(3) returns 4 * 3 * factorial(2)
// factorial(2) returns 4 * 3 * 2 * factorial(1)
// factorial(1) returns 4 * 3 * 2 * 1 * factorial(0)
// factorial(0) returns 4 * 3 * 2 * 1 * 1

// program to check if a number is prime or not

// take input from the user
// const number = parseInt(prompt("Enter a positive number: "));
// let isPrime = true;

// // check if number is equal to 1
// if (number === 1) {
//     console.log("1 is neither prime nor composite number.");
// }

// // check if number is greater than 1
// else if (number > 1) {

//     // looping through 2 to number-1
//     for (let i = 2; i < number; i++) {
//         if (number % i == 0) {
//             isPrime = false;
//             break;
//         }
//     }

//     if (isPrime) {
//         console.log(`${number} is a prime number`);
//     } else {
//         console.log(`${number} is a not prime number`);
//     }
// }

// // check if number is less than 1
// else {
//     console.log("The number is not a prime number.");
// }

// program to generate fibonacci series up to n terms

// take input from the user
// const number = parseInt(prompt('Enter the number of terms: '));
// let n1 = 0, n2 = 1, nextTerm;

// console.log('Fibonacci Series:');

// for (let i = 1; i <= number; i++) {
//     console.log(n1);
//     nextTerm = n1 + n2;
//     n1 = n2;
//     n2 = nextTerm;
// }

// program to display fibonacci sequence using recursion
// function fibonacci(num) {
//   if(num < 2) {
//       return num;
//   }
//   else {
//       return fibonacci(num-1) + fibonacci(num - 2);
//   }
// }

// // take nth term input from the user
// const nTerms = prompt('Enter the number of terms: ');

// if(nTerms <=0) {
//   console.log('Enter a positive integer.');
// }
// else {
//   for(let i = 0; i < nTerms; i++) {
//       console.log(fibonacci(i));
//   }
// }
// program for a simple calculator

// take the operator input
// const operator = prompt("Enter operator ( either +, -, * or / ): ");

// // take the operand input
// const number1 = parseFloat(prompt("Enter first number: "));
// const number2 = parseFloat(prompt("Enter second number: "));

// let result;

// // using if...else if... else
// if (operator == "+") {
//   result = number1 + number2;
// } else if (operator == "-") {
//   result = number1 - number2;
// } else if (operator == "*") {
//   result = number1 * number2;
// } else {
//   result = number1 / number2;
// }

// // display the result
// console.log(`${number1} ${operator} ${number2} = ${result}`);

//task
// Create an array of numbers from 1 to 10
// const numbers = Array.from({ length: 10 }, (_, i) => i + 1);

// // Task #01: Filter out odd numbers
// const oddNumbers = numbers.filter((number) => number % 2 !== 0);

// // Task #02: Square all odd numbers
// const squaredOddNumbers = oddNumbers.map((number) => number * number);

// // Task #03: Sum of all squared odd numbers
// const sumOfSquaredOddNumbers = squaredOddNumbers.reduce(
//   (acc, number) => acc + number,
//   0
// );

// // Task #04: Find only even numbers from 1 to 8
// const evenNumbers = numbers.slice(0, 8).filter((number) => number % 2 === 0);

// // Task #05: Find and remove all even numbers
// for (let i = 0; i < numbers.length; i++) {
//   if (numbers[i] % 2 === 0) {
//     numbers.splice(i, 1);
//     i--; // Adjust index after removing an element
//   }
// }

// console.log("Original numbers: ", numbers);
// console.log("Odd numbers: ", oddNumbers);
// console.log("Squared odd numbers: ", squaredOddNumbers);
// console.log("Sum of squared odd numbers: ", sumOfSquaredOddNumbers);
// console.log("Even numbers (01 to 08): ", evenNumbers);

// const numbers = Array.from({ length: 10 }, () =>
//   Math.floor(Math.random() * 10)
// );
// console.log(numbers);

// //  Filter out odd numbers
// const oddNumbers = numbers.filter((number) => number % 2 !== 0);
// console.log("Odd numbers: ", oddNumbers);
// //Square all odd numbers
// const squaredOddNumbers = oddNumbers.map((number) => number * number);
// console.log("Squared odd numbers: ", squaredOddNumbers);
// console.log(`Sqaure odd numbers: ${squaredOddNumbers}`);

//Assignment 2 Task

const arr = [
  ["john", "Doe", 1, 200],
  ["Arran", "John", 2, 300],
  ["Will", "Smith", 3, 500],
];

const keys = ["FirstName", "LastName", "ID", "marks", "Dob"];
const result = [];
for (let i = 0; i < arr.length; i++) {
  const student = {};
  const detail = arr[i];

  for (let j = 0; j < keys.length; j++) {
    const key = keys[j];
    const value = detail[j];

    student[key] = value;
  }
  result.push(student);
}

console.log("Result", result, ",");
// console.log(`Result: ${result}`);

// const newarr = arr.map((value) => {
//   return {
//     firstName: value[0],
//     lastName: value[1],
//     age: value[2],
//   };
// });
// console.log(newarr);

// const [element1, element2, element3] = arr;
// console.log(element1);
// console.log(element1[0]);
// const person = new Object();
// person.firstName = element1[0];

// person.firstName = arr[0][0];
// person.lastName = element1[1];
// person.lastName = arr[0][1];
// person.id = arr[0][2];

// person.firstName = element2[2];
// console.log(person);

//  const obj = Object.fromEntries(
// arr.map(obj => [obj.name, obj.value])
// );

// console.log(obj);
// const person = new Object();
// for (let i = 0; i < arr.length; i++) {
//   console.log(arr[i]);
// }
