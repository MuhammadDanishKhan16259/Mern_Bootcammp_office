// Q1
// var num1 = +prompt("Enter First number");
// var num2 = +prompt("Enter Second number");

// if (num1 > num2) {
//   console.log(num1 + " is larger than " + num2);
// } else if (num2 > num1) {
//   console.log(num2 + " is larger than " + num1);
// }

// Q2.
// var num1 = +prompt("Enter First number");
// if (num1 > 0) {
//   alert("The sign is +");
//   console.log("The sign is +");
// } else if (num1 < 0) {
//   alert("The sign is -");
//   console.log("The sign is -");
// }

// Q3.
// var num1 = +prompt("Enter First number");
// var num2 = +prompt("Enter Second number");
// var num3 = +prompt("Enter Third number");
// var num4 = +prompt("Enter Fourth number");
// var num5 = +prompt("Enter Fifth number"); //
// if (num1 > num2 && num1 > num3 && num1 > num4 && num1 > num5) {
//   console.log(num1 + " is larger than given Numbers");
//   alert(num1 + " Num1  is larger than given Numbers");
// } else if (num2 > num1 && num2 > num3 && num2 > num4 && num2 > num5) {
//   console.log(num2 + " Num2 is larger than given Numbers");
//   alert(num2 + " is larger than given Numbers");
// } else if (num3 > num1 && num3 > num2 && num3 > num4 && num3 > num5) {
//   console.log(num3 + " Num3 is larger than given Numbers");
//   alert(num3 + " is larger than given Numbers");
// } else if (num4 > num1 && num4 > num2 && num4 > num3 && num4 > num5) {
//   console.log(num4 + "  Num4 is larger than given Numbers");
//   alert(num4 + " is larger than given Numbers");
// } else if (num5 > num1 && num5 > num2 && num5 > num3 && num5 > num4) {
//   console.log(num5 + "  Num5 is larger than given Numbers");
//   alert(num5 + " is larger than given Numbers");
// }
//  else if (num1 < 0) {
//   alert("The sign is -");
//   console.log("The sign is -");
// }
//Q4.

// for (var x = 0; x <= 15; x++) {
//   if (x === 0) {
//     console.log(x + " is even");
//   } else if (x % 2 === 0) {
//     console.log(x + " is even");
//   } else {
//     console.log(x + " is odd");
//   }
// }
// Q5. Write a JavaScript program which computes the average marks of the
// following students Then, this average is used to determine the corresponding
// grade
// var students = [
//   ["David", 80],
//   ["Vinoth", 77],
//   ["Divya", 88],
//   ["Ishitha", 95],
//   ["Thomas", 68],
// ];

// var Avgmarks = 0;

// for (var i = 0; i < students.length; i++) {
//   Avgmarks += students[i][1];
//   var avg = Avgmarks / students.length;
// }

// console.log("Average grade: " + Avgmarks / students.length);

// if (avg < 60) {
//   console.log("Grade : F");
// } else if (avg < 70) {
//   console.log("Grade : D");
// } else if (avg < 80) {
//   console.log("Grade : C");
// } else if (avg < 90) {
//   console.log("Grade : B");
// } else if (avg < 100) {
//   console.log("Grade : A");
// }
//Q6
for (var i = 1; i <= 100; i++) {
  if (i % 3 === 0 && i % 5 === 0) {
    console.log(i + " FizzBuzz");
  } else if (i % 3 === 0) {
    console.log(i + " Fizz");
  } else if (i % 5 === 0) {
    console.log(i + " Buzz");
  } else {
    console.log(i);
  }
}
//Q7
var x, y, chr;
for (x = 1; x <= 6; x++) {
  for (y = 1; y < x; y++) {
    chr = chr + "*";
  }
  console.log(chr);
  chr = "";
}
