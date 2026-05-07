// section-1
var a = 10;
a = 15;
console.log(a);
//output hereis 15
let b = 20;
let b = 30;
// SyntaxError: Identifier 'b' has already been declared
const c = 50;
console.log(c);
//ouput here is 50
// const x = 10;
// x = 20;
// output is error
var p = 5;
var p = 10;
console.log(p);
// output here is 10
let q = 25;
q = q + 10;
console.log(q);
// ouput here is 35
const r = 7;
console.log(r);
// output here is 7
_a = 10;
// output here is int
// section-2
// console.log("hello world");
// console.warn("hello world");
// console.error("hello world");
// console.clear();
// section - 3
let a = "hello";
console.log(typeof a);
//  output here is String
let b = 100;
console.log(typeof b);
//  output here is 100
let c = false;
console.log(typeof c);
//  output here is Boolean
let d;
console.log(d);
//  output is undefined
let a = null;
// console.log(typeof a);
// console.log(typeof "25");
// section-4
let fruits = ["apple", "orange", "grapes"];
// console.log(fruits);
let arr = ["a", "b", "c"];
console.log(arr[1]);
// here the output is b
let arr = ["x", "y", "z"];
console.log(arr[arr.length - 1]);
// here the length is 2
let arr = ["x", "y", "z"];
// console.log(arr[0]);
let arr = ["apple", "banana",];
console.log(arr[arr.length]);
// here the output is 2
let fruits = ("apple", "banana");
// fruits.push("mango");
// console.log("fruits");
// section-5
let person = {
    name: "venkatesh",
    age: 26
}
console.log(person);
let obj = { name: "naveen" };
console.log(obj.name);
// here the output is naveen
let obj = {
    fruits: ["apple", "banana"]
};
console.log(obj.fruits[1]);
// here the output is banana
let fruits = ("apples", "banana", "grapes", "pineapple");
// console.log(fruits[fruits.length-1]);
// section-6
console.log(5 + 3);
// here the output is 8
console.log(10 % 3);
// here the output is 1
console.log(2 ** 3);
// here the output is 8
console.log(10 / 2);
// here the output is 5
// section-7
let a = 5;
a++;
console.log(a);
// here the output is 6
let b = 5;
let c = b++;
console.log(b, c);
// here the output is 6,5
let x = 5;
let y = ++x;
console.log(x, y);
// here the output is 6,6
let m = 3;
let n = m--;
console.log(m, n);
// here the output is 2,3
// section-8
console.log(5 == "5");
// here the output is true
console.log(5 === "5");
// here the output is false
console.log(true && false || true);
// here the output is true
// section-9
5 > 3
console.log("yes");
console.log("no");
// here the output is yes