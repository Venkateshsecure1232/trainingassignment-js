// Task 1 — Student Registration Form

let student_name = prompt("Enter Student Name")
let student_department = prompt("Enter Department")
let student_age = prompt("Enter Age")

console.log(`Welcome ${student_name}`)
console.log(`Department: ${student_department}`)
console.log(`Age: ${student_age}`)


// Task 2 — ATM Withdrawal System

let balance = 10000
let withdraw_amount = Number(prompt("Enter Withdrawal Amount"))

if (withdraw_amount >= 100 && withdraw_amount <= balance) {
    console.log("Transaction Successful")
} else if (withdraw_amount < 100) {
    console.log("Minimum Withdrawal is 100")
} else {
    console.log("Insufficient Balance")
}


// Task 3 — Swiggy Discount Checker

let order_amount = Number(prompt("Enter Order Amount"))

let message = order_amount > 499
    ? "Free Delivery Available"
    : "Delivery Charges Applied"

console.log(message)


// Task 4 — Instagram Login System

let user_name = prompt("Enter Username")

if (user_name === "admin") {

    let password = prompt("Enter Password")

    if (password === "1234") {
        console.log("Login Success")
    } else {
        console.log("Wrong Password")
    }

} else {
    console.log("Invalid Username")
}


// Task 5 — Traffic Signal System

let signal = prompt("Enter Signal")

switch (signal) {

    case "red":
        console.log("STOP")
        break

    case "yellow":
        console.log("READY")
        break

    case "green":
        console.log("GO")
        break

    default:
        console.log("Invalid Signal")
}


// Task 6 — Employee Salary Calculator

function salary_calculation(basic_salary, bonus) {

    let total_salary = basic_salary + bonus

    return total_salary
}

let result = salary_calculation(25000, 5000)

console.log(result)


// Task 7 — E-Commerce Cart Total

let prices = [100, 200, 300, 400]

let total_price = 0

for (let i = 0; i < prices.length; i++) {

    total_price = total_price + prices[i]
}

let average_price = total_price / prices.length

console.log("Total Price:", total_price)
console.log("Average Price:", average_price)


// Task 8 — WhatsApp Contact Book

let contact = {
    name: "Naveen",
    phone: "9876543210",
    status: "Online"
}

for (let key in contact) {

    console.log(key, contact[key])
}


// Task 9 — Movie Ticket Booking

function payment() {

    console.log("Payment Done")
}

function book_ticket(callback) {

    console.log("Ticket Booked")

    callback()
}

book_ticket(payment)


// Task 10 — Food Delivery Time Tracker

function* order_status() {

    yield "Order Confirmed"
    yield "Preparing Food"
    yield "Out for Delivery"
    yield "Delivered"
}

let food = order_status()

console.log(food.next().value)
console.log(food.next().value)
console.log(food.next().value)
console.log(food.next().value)