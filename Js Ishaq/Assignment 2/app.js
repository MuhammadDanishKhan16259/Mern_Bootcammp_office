// Question NO :1 Solve

// function data (num1) {
//     return function(num2){
//       console.log(num1 + num2);
//     }
// }
// let result = data(5);
// result(7);

// // Question NO:2 Solve
// function arrayFind(arr, value) {
//   // base case: if array is empty, return false
//   if (arr.length === 0) {
//     return false;
//   }

//   if (arr[0] === value) {
//     return true;
//   }

//   // recursive case
//   return arrayFind(arr.slice(1), value);
// }

// const myArray = [1, 2, 3, 4, 5];
// console.log(arrayFind(myArray, 3)); // true
// console.log(arrayFind(myArray, 6)); // false

// // Question NO:3 Solve

// function addParagraph(text) {
//   const newParagraph = document.getElementById("my-para");
//   const content = document.createTextNode(text);
//   newParagraph.appendChild(content);
//   document.body.appendChild(newParagraph);
// }

// addParagraph('This is a new paragraph added to the bottom of the HTML document!');//Argument

// Question NO:4 Solve

// function addListItem(text) {
//   let ul = document.getElementById("my-list");
//   let li = document.querySelector("li");
//   li.appendChild(document.createTextNode(text));
//   ul.appendChild(li);
// }

// addListItem(" ROM");

// Question NO: 5 Solve

// function changeBackgroundColor(element, color,) {
//   element.style.backgroundColor = color;

// }

// const myDiv1 = document.getElementById('myDiv');
// changeBackgroundColor(myDiv1, 'red');

// Question NO: 6 Solve
// function saveObjectToLocalStorage(key, object) {
//   // Convert the object to a JSON string
//   const objectJSON = JSON.stringify(object);

//   // Save the JSON string to localStorage
//   localStorage.setItem(key, objectJSON);
// }

// const myObject = {
//    name: "Faheem",
//   age: 23,
//   city: "Karachi"
//    };
// saveObjectToLocalStorage("myKey", myObject);

// Question NO: 7 Solve

// function saveObjectToLocalStorage(key, object) {

//   const objectJSON = JSON.stringify(object);

//   localStorage.setItem(key, objectJSON);
// }

// const myObject = {
// name: "Ameen",
// age: 20,
// city: "karachi",
//  };
// saveObjectToLocalStorage("myKey", myObject);

// function getObjectFromLocalStorage(key) {

//   const objectJSON = localStorage.getItem(key);

//   if (!objectJSON) {
//     return null;
//   }

//   return JSON.parse(objectJSON);
// }

// Question NO: 8 Solve

// function saveObjectToLocalStorage(obj) {
//   // Save each property to localStorage using property name as key and value as value
//   Object.keys(obj).forEach((key) => {
//     localStorage.setItem(key, JSON.stringify(obj[key]));
//   });

//   // Retrieve the object from localStorage and return it as a new object
//   const newObj = {};
//   Object.keys(obj).forEach((key) => {
//     newObj[key] = JSON.parse(localStorage.getItem(key));
//   });
//   return newObj;
// }

// const myObj = { name: "Danish", age: 23 };
// const savedObj = saveObjectToLocalStorage(myObj);
// console.log(savedObj);
