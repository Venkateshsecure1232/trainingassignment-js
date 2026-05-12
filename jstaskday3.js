// 1. Print Numbers
// Print numbers from 1 to 20 using a for loop

for (let i = 1; i <= 20; i++) {
    console.log(i);
}
// 2. Odd Numbers
// Print all odd numbers from 1 to 50

for (let i = 1; i <= 50; i++) {
    if (i % 2 !== 0) {
        console.log(i);
    }
}
// 3. Multiplication Table
// Print multiplication table of 7

for (let i = 1; i <= 10; i++) {
    console.log("7 x " + i + " = " + (7 * i));
}
7 x 1 = 7
7 x 2 = 14
7 x 3 = 21
...
7 x 10 = 70
// 4. Reverse Counting
// Using while loop, print numbers from 20 to 1

let i = 20;

while (i >= 1) {
    console.log(i);
    i--;
}
// 5. Sum of Numbers
// Find the total sum of numbers from 1 to 100

let sum = 0;

for (let i = 1; i <= 100; i++) {
    sum = sum + i;
}

console.log("Total Sum =", sum);
// 6. Array Loop
// Print all array values

let fruits = ["apple", "banana", "orange", "grapes"];

for (let i = 0; i < fruits.length; i++) {
    console.log(fruits[i]);
}
// 7. Count Even Numbers
// Count even numbers between 1 to 50

let count = 0;

for (let i = 1; i <= 50; i++) {
    if (i % 2 === 0) {
        count++;
    }
}

console.log("Even Numbers Count =", count);
// 8. Star Pattern

for (let i = 1; i <= 5; i++) {
    let stars = "";

    for (let j = 1; j <= i; j++) {
        stars = stars + "*";
    }

    console.log(stars);
}
*
**
***
****
*****
    // 9. Simple Function

    function welcome() {
        console.log("Welcome to JavaScript");
    }

welcome();
// 10. Function with Parameter

function greet(name) {
    console.log("Hello " + name);
}

greet("Naveen");
// 11. Add Two Numbers

function add(a, b) {
    return a + b;
}

console.log(add(10, 20));
30
// 12. Salary Bonus

function totalSalary(salary, bonus) {
    return salary + bonus;
}

console.log(totalSalary(50000, 5000));
55000
// 13. Object Loop

let student = {
    name: "Rahul",
    course: "JavaScript",
    marks: 95
};

for (let key in student) {
    console.log(key + " : " + student[key]);
}
// 14. Find Largest Number

function largest(a, b) {
    if (a > b) {
        return a;
    } else {
        return b;
    }
}

console.log(largest(10, 50));
50
// 15. Mini Employee Task

let employee = {
    name: "Ravi",
    department: "IT",
    salary: 40000
};

function addBonus(salary, bonus) {
    return salary + bonus;
}

console.log("Employee Name:", employee.name);
console.log("Department:", employee.department);
console.log("Salary:", employee.salary);

let finalSalary = addBonus(employee.salary, 5000);

console.log("Salary after bonus:", finalSalary);