// *********************************    IF…ELSE	& ELSE IF STATEMENTS,	*********************************
// *********************************    TESTING	SET	OF CONDITIONS &	    *********************************
// ********************************     SWITCH STATEMENTS               *********************************




// *********************************************** 1 ***********************************************


// let inputNumber = +prompt("Enter number Here");
// if(inputNumber % 3 === 0){
//     alert("The given input number is divisible by 3");
// } else{
//     alert("Number is not divisible by");
// }







// *********************************************** 2 ***********************************************


// let inputNumber = +prompt("Enter number Here");
// if(inputNumber % 2 === 0){
//     alert("Even number");
// } else{
//     alert("Odd number");
// }










// *********************************************** 3 ***********************************************


// let inputNumber = +prompt("Enter Age Here");
// if(inputNumber > 18){
//     alert("Old enough");
// } else{
//     alert("Too Young");
// }







// *********************************************** 4 *********************************************** 


// let inputNumber = prompt("Enter Name Here").toLowerCase();
// let inputNumber2 = prompt("Enter others Name Here").toLowerCase();
// if(inputNumber === inputNumber2){
//     alert("Your name is match with my name please apny parents walon se bolo apka nam change kren");
// }






// *********************************************** 5 ***********************************************


// let inputNumber = +prompt("Enter number Here");
// if(inputNumber % 3 === 0){
//     alert("The given input number is divisible by 3");
// } else{
//     alert("Number is not divisible by");
// }









// *********************************************** 6 ***********************************************



// let input = prompt("Enter number or letter Here");
// if(!isNaN(input)){
//     alert("Input is a number");
// } else if(input >= 'A' && input <= 'Z'){
//     alert("Input is a uppercase letter");;
// } else if(input >= 'a' && input <= 'z'){
//     alert("Input is a lowercase letter");
// } else{
//     alert("Error")
// }






// *********************************************** 7 ***********************************************




// let inputFirstNumber = +prompt("Enter First Number");
// let operator = prompt("+ , - , / , * , %");
// let inputSecondNumber = +prompt("Enter Second Number");
// let add = inputFirstNumber + inputSecondNumber;
// let subtract = inputFirstNumber - inputSecondNumber;
// let divide = inputFirstNumber / inputSecondNumber;
// let multiply = inputFirstNumber * inputSecondNumber;
// let modulus = inputFirstNumber % inputSecondNumber;
// if (operator === "+") {
//     console.log(`The result of Addition is ${add}`);
// } else if (operator === "-") {
//     console.log(`The result of Subtraction is ${subtract}`);
// } else if (operator === "/") {
//     console.log(`The result of Division is ${divide}`);
// } else if (operator === "*") {
//     console.log(`The result of Multiplication is ${multiply}`);
// } else if (operator === "%") {
//     console.log(`The result of Modulus is ${modulus}`);
// } else {
//     console.log(`Please enter a number`);
// }











// *********************************************** 8 ***********************************************



// let input = +prompt("24 hours clock format like: 1900 = 7pm")
// let time = input;
// if (time >= 0 && time < 1200) {
//     alert(" Good Morning ");
// } else if (time >= 1200 && time < 1700) {
//     alert(" Good Afternoon");
// } else if (time >= 1700 && time < 2100) {
//     alert("Good Evening");
// } else if (time >= 2100 && time < 2359) {
//     alert("Good night");
// }else{
//     alert("Enter hour")
// }





















// *********************************************** 9 ***********************************************



// *********************************************** Not Solve ***********************************************














// *********************************************** 10 ***********************************************


// let correctPassword = "patanahi".toLowerCase();
// let inputPassword = prompt("Enter your password");
// if(inputPassword === ""){
//     alert("Please enter your password");
// }else if(inputPassword === correctPassword){
//     alert("Correct! The password you entered matches the original password");
// }else{
//     alert("Incorrect password")
// }















// *********************************************** 11 ***********************************************

// let firstName = "Ali";
// if (firstName === "Fahad") {
//  document.write("Hello Fahad!");
// }else{
//  document.write("You are not Fahad");
// }










// *********************************************** 12 ***********************************************

// let greeting;
// let hour = 13;
// if (hour < 18) {
//     greeting = "Good day";
// } else {
//     greeting = "Good evening";
// }
// console.log(greeting);









// *********************************************** 13 ***********************************************



// let firstNumber = +prompt(`Enter First integer`);
// let secondNumber = +prompt(`Enter Second integer`);
// if(firstNumber > secondNumber){
//     console.log("Larger number is " + firstNumber);
// }else if (firstNumber < secondNumber){
//     console.log("Larger number is " + secondNumber);
// }else if (firstNumber === secondNumber){
//     console.log("Both numbers are equal");
// }







// *********************************************** 14 ***********************************************

// let number = +prompt("Enter Number");
// if(number > 0){
//     console.log(`Positive Number : ${number}`);
// }else if(number < 0){
//     console.log(`Negative Number : ${number}`);
// }else if(number === 0){
//     console.log(`Number is Zero : ${number}`);
// }else{
//     console.log(`Enter Only numbers`);
// }








// *********************************************** 15 ***********************************************


// let hour = prompt(`Store the hour in 24 hours clock format i.e. 14 for 2pm , 15 for 3pm`);
// if(hour => 6 && hour <= 9 ){
//     console.log("Breakfast is served");
// }else if(hour => 11 && hour <= 1 ){
//     console.log("Time for lunch.");
// }else if(hour => 5 && hour <= 8 ){
//     console.log("It's dinner time");
// }else{
//     console.log(`Sorry, you'll have to wait, or go get a snack`);
//}







// *********************************************** 16 ***********************************************

// let variables = 10;
// if(typeof variables === "number"){
//     console.log(`The type of that variable is number`);
// }else if(typeof variables === "string"){
//     console.log(`The type of that variable is string`);
// }else if(typeof variables === "boolean"){
//     console.log(`The type of that variable is boolean`);
// }else if(typeof variables === "undefined"){
//     console.log(`The type of that variable is undefined`);
// }








// *********************************************** 17 ***********************************************

// let vowel = prompt("Enter vowels here").toLowerCase();
// if(vowel === "a" || vowel ===  "e"  || vowel ===  "i" || vowel ===  "o" || vowel ===  "u" ){
//     console.log("it's a vowel")
// }else if(vowel){
//     console.log("it's not a vowel");
// }else{
//     console.log("invalid");
// }















// *********************************************** 18 ***********************************************

// let num1 = 10;
// if(num1 !== 8){
//     console.log("True");
// }else{
//     console.log("False");
// }














// *********************************************** 19 ***********************************************



// let month = +prompt("Enter a number of month");
// if(month === 1){
//     alert("January");
// }else if(month === 2){
//     alert("February");
// }else if(month === 3){
//     alert("March");
// }else if(month === 4){
//     alert("April");
// }else if(month === 5){
//     alert("May");
// }else if(month === 6){
//     alert("June");
// }else if(month === 7){
//     alert("July");
// }else if(month === 8){
//     alert("August");
// }else if(month === 9){
//     alert("September");
// }else if(month === 10){
//     alert("October");
// }else if(month === 11){
//     alert("November");
// }else if(month === 12){
//     alert("December");
// }else{
//     alert("Invalid month");
// }








// *********************************************** 20 ***********************************************

// let age = +prompt(`Enter age here`)
// age = age<18 ? "Too young" : "Old enough";
// console.log(age);
