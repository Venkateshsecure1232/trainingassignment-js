// Task 1 — Basic Function

function welcomeUser(name) {
    console.log("Welcome " + name);
}

welcomeUser("venkatesh");



// Task 2 — Parameter + Return

function squareNumber(num) {
    return num * num;
}

console.log(squareNumber(5));



// Task 3 — Object Function

const employee = {
    name: "Rahul",
    salary: 50000,

    employeeBonus: function (bonus) {
        console.log(this.name);
        console.log(this.salary + bonus);
    }
};

employee.employeeBonus(5000);



// Task 4 — Scope Checking

function checkScope() {

    if (true) {

        var a = 10;
        let b = 20;
        const c = 30;

        console.log(a);
        console.log(b);
        console.log(c);
    }

    console.log(a);

    // console.log(b); throws Error
    // console.log(c); 
}

checkScope();



// Task 5 — Arrow Function

const add = (a, b) => {
    console.log(a + b);
};

add(5, 3);



// Task 6 — Callback Function

function multiply(a, b) {
    return a * b;
}

function calculator(callback, num1, num2) {
    console.log(callback(num1, num2));
}

calculator(multiply, 5, 2);



// Task 7 — Generator Function

function* offers() {

    yield "50% OFF";
    yield "Free Delivery";
    yield "Cashback";
}

const offer = offers();

console.log(offer.next().value);
console.log(offer.next().value);
console.log(offer.next().value);



// Task 8 — Default Parameter

function student(name, course = "JavaScript") {

    console.log("Name:", name);
    console.log("Course:", course);
}

student("venkatesh");

student("Rahul", "React");



// Task 9 — Currying

function multi(a) {

    return function (b) {

        return function (c) {

            return a * b * c;
        };
    };
}

console.log(multi(2)(3)(4));



// Task 10 — Spread Operator

const arr1 = [1, 2, 3];
const arr2 = [4, 5, 6];

const mergedArray = [...arr1, ...arr2];

console.log(mergedArray);



// Task 11 — Object Spread

const obj1 = {
    name: "Navi"
};

const obj2 = {
    role: "Developer"
};

const mergedObject = {
    ...obj1,
    ...obj2
};

console.log(mergedObject);



// Task 12 — Rest Operator

function numbers(...num) {

    console.log(num);

    let sum = 0;

    for (let n of num) {
        sum += n;
    }

    console.log(sum);
}

numbers(1, 2, 3, 4);



// Mini Challenge — Student Management System

const students = [];

function addStudent(...newStudents) {

    students.push(...newStudents);
}

function printStudents() {

    console.log(students);
}

function addBonus(marks) {

    return marks + 10;
}

function calculateMarks(callback, marks) {

    return callback(marks);
}

addStudent(
    { name: "Rahul", marks: 80 },
    { name: "Navi", marks: 70 }
);

printStudents();

console.log(calculateMarks(addBonus, 80));