// *********************************************** 1 ***********************************************

// for (let i = 1; i <=5; i++) {
// let hello = document.querySelector('.container');
// hello.innerHTML += 'Hello world<br>';
// }





// *********************************************** 2 ***********************************************


// for(let i = 1; i <= 10; i++) {
// let hello = document.querySelector('.container');
// hello.innerHTML += `${i} <br>`
// }









// *********************************************** 3 ***********************************************


// let input = +prompt("Enter table here.");
// let h1 = document.querySelector('.h1');
// let table1 = document.querySelector(".container");
// let calculate = "";   
// for (let i = 1; i <= 15; i++) {
//     calculate += input + " x " + i + " = " + input * i + " <br> ";
//     table1.innerHTML = calculate;
//     h1.innerHTML = "Multiplication Table of " + input + "<br> length 15";
// }









// *********************************************** 4 ***********************************************



// let A = ["Nokia", "Samsung", "Apple", "Sony", "Huawei"];
// for (let i = 0; i < A.length; i++){
//     console.log(A[i]);
// }







// *********************************************** 5 ***********************************************





// let fruits = ["apple", "banana", "mango", "orange", "strawberry"];
// for (let i = 0; i < fruits.length; i++) {
//     console.log(fruits[i]);
// }
// for (let i = 0; i < fruits.length; i++) {
//     console.log(`Elements at index ${i} is ${fruits[i]}`);
// }














// *********************************************** 6 ***********************************************


// let item = +prompt(`Enter how much items you want`);
// let array = [];
// for (let i = 0  ; i < item; i++) {
//     let item1 = prompt(`Enter item ${i}:`);
//     array.push(item1);
// }
// console.log(`Number of items: ${item}`);
// console.log(`Items:`);
// console.log(array);























// *********************************************** 7 ***********************************************



// let h1 = document.querySelector('.h1');
// let container = document.querySelector(".container");


// for (let i = 1; i <= 15; i++) {
//     h1.innerHTML = "Counting :";
//     container.innerHTML += `${i} , `;
// }

// let h2 = document.querySelector('.h2');
// let container1 = document.querySelector(".container1");

// for (let i = 10; i >= 1; i--) {
//     h2.innerHTML = "Reverse Counting :";
//     container1.innerHTML += `${i} , `;
// }

// let h3 = document.querySelector('.h3');
// let container2 = document.querySelector(".container2");

// for (let i = 0; i <= 20; i += 2) {
//     h3.innerHTML = "Even : ";
//     container2.innerHTML += `${i} , `;
// }


// let h4 = document.querySelector('.h4');
// let container3 = document.querySelector(".container3");

// for (let i = 1; i <= 19; i += 2) {
//     h4.innerHTML = "Odd : ";
//     container3.innerHTML += `${i} , `;
// }

// let h5 = document.querySelector('.h5');
// let container4 = document.querySelector(".container4");

// for (let i = 2; i <= 20; i += 2) {
//     h5.innerHTML = "Series : ";
//     container4.innerHTML += `${i}K , `;
// }
















// *********************************************** 8 ***********************************************


// let A = ['cake', 'apple pie', 'cookie', 'chips', 'patties'];
// let input = prompt("Enter bakkery item:").toLowerCase();
// if (input === 'cake' || input === 'apple pie' || input === 'cookie' || input === 'chips' || input === ' patties') {
//     alert(`${input} found in the list`)
// } else {
//     alert(`${input} is not found in the list`)
// }



















// *********************************************** 9     ***********************************************


// let A = [24, 53, 78, 91, 12];
// let number = Math.max(...A);
// console.log(`Array Items: ${A}`);
// console.log(`The Largest number is : ${number}`);




























// *********************************************** 10 ***********************************************






// let A = [24, 53, 78, 91, 12];
// let number = Math.min(...A);
// console.log(`Array Items: ${A}`);
// console.log(`The smallest number is : ${number}`);


















// *********************************************** 11 ***********************************************



// let A = [24, 53, 78, 91, 12];
// let number1 = Math.max(...A);
// let number2 = Math.min(...A);
// console.log(`Array Items: ${A}`);
// console.log(`The Largest number is : ${number1}`);
// console.log(`The smallest number is : ${number2}`);





















// *********************************************** 12 ***********************************************

// let h1 = document.querySelector('.h1');
// for (let i = 5; i <=100; i += 5){
//     h1.innerHTML += i + " , ";
// }



























// *********************************************** 13 ***********************************************




// let students = ["Ali", "Sami", "Taha", "Inam"];
// let scores = [58, 73, 89, 90];
// let table = document.querySelector('.container table');
// let studentTable = `<thead><tr><th>Name</th><th>Score</th></tr></thead><tbody>`;
// for (let i = 0; i < students.length; i++) {
//   studentTable += `<tr><td>${students[i]}</td><td>${scores[i]}</td></tr>`;
// table.innerHTML = studentTable;
// }























// *********************************************** 14 ***********************************************


// *********************************************** Not comleted ***********************************************

// let score = [12, 45, 3, 22, 34, 50]
// let value = +prompt("enter value you want to stop");
// score.splice(value);
// console.log(score);
























// *********************************************** 15 ***********************************************

// var A = [[1, 2, 3], [4, 5, 6], [7, 8, 9]];
// for (var i = 0; i < 1; i++) {
//     for (var j = 0; j < 3; j++) {
//         console.log(A[j]);
//     }
// }



























// *********************************************** 16 ***********************************************


// Get the initial value from the user
// var num = +prompt("Enter a number:");
//     for (num > 0; num -= 0.5;) {
//         console.log(num);
//     }





// *********************************************** 17 ***********************************************


// for(i = 0; i <= 20; i++) {
//     if (i % 2 === 0) {
//         console.log(i + " is even");
//     } else {
//         console.log(i + " is odd");
//     }
// }


// *********************************************** 18 ***********************************************

// let product = 1;
// for (let i = 1; i <= 7; i += 2) {
//     product = product * i;
// }
// console.log("The product of the odd integers from 1 to 7 is: " + product);



// *********************************************** 19 ***********************************************


// let stars = +prompt("Enter the initial number of stars:");
// let line = "";
// for (let i = stars; i >= 1; i--) {
//     line += "*";
//     console.log(line);
// }



// *********************************************** 20 ***********************************************


// *********************************************** not solve ***********************************************
