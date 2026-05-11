// Task 1-type casting and flow control
console.log("10" + 5);
console.log(typeof ("10" + 5));
// output is 105
// data type is string
console.log(10 + true)
console.log(typeof (10 + true));
// output is 11
// data type is number
console.log(false + null)
console.log(typeof (false + null));
// output is zero
// data type is number
console.log("Hello" + undefined)
console.log(typeof ("Hello" + undefined));
// hello undefined
// data type is string
console.log([1, 2] + 5)
console.log(typeof ([1, 2] + 5));
// output is 1,25
// data type is string
// Task 2 – Implicit Type Casting
// String + Number
console.log(typeof ("5" + 5));
// Boolean + Number
console.log(typeof (true + 5));
// array+string
console.log(typeof ([1, 2, 3] + "venkatesh"));
// null+number
console.log(typeof (null + 6));
// Explicit Type Casting to Number
console.log(Number("500"));   // 500
console.log(Number(true));    // 1
console.log(Number(false));   // 0
console.log(Number(null));    // 0
console.log(Number("abc"));   // NaN
console.log(Number([100]));   // 100
// Boolean Constructor Check

console.log(Boolean(""));            // false
console.log(Boolean("javascript"));  // true
console.log(Boolean(0));             // false
console.log(Boolean(1));             // true
console.log(Boolean(null));          // false
console.log(Boolean(undefined));     // false
console.log(Boolean([]));            // true
console.log(Boolean({}));            // true
// Task 5 – Stdent Pass or Fail

let mark = 45;

if (mark > 35) {
    console.log("Pass");
} else {
    console.log("Fail");
}


// Task 6 – Voting Eligibility

let age = 20;

if (age >= 18) {
    console.log("Eligible");
} else {
    console.log("Not Eligible");
}


// Task 7 – Greatest Number

let a = 50;
let b = 80;
let c = 30;

if (a > b && a > c) {
    console.log("a is greatest");
} else if (b > a && b > c) {
    console.log("b is greatest");
} else {
    console.log("c is greatest");
}


// Task 8 – Traffic Light System

let signal = "red";

switch (signal) {
    case "red":
        console.log("Stop");
        break;

    case "yellow":
        console.log("Ready");
        break;

    case "green":
        console.log("Go");
        break;

    default:
        console.log("Invalid Signal");
}


// Task 9 – Login Systen

let username = "admin";
let password = "1234";

if (username === "admin") {


    if (password === "1234") {
        console.log("Login Success");
    } else {
        console.log("Invalid Password");
    }

} else {
    console.log("Invalid Username");
}


// Task 10 – Session Finder

let hour = 14;

if (hour >= 1 && hour <= 12) {
    console.log("Morning");
} else if (hour >= 13 && hour <= 15) {
    console.log("Afternoon");
} else if (hour >= 16 && hour <= 19) {
    console.log("Evening");
} else if (hour >= 20 && hour <= 24) {
    console.log("Night");
} else {
    console.log("Invalid Hour");
}


// Bonus Challenge

console.log(true + true);        // 2
console.log("5" - 2);            // 3
console.log("5" + 2);            // 52
console.log(null + 1);           // 1
console.log(undefined + 1);      // undefined
console.log(Boolean(" "));       // true
console.log(Number(true));       // 1