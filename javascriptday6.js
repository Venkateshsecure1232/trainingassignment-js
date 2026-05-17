// 1. Student Attendance System

let present_students = ["Rahul", "Sneha", "Kiran"]

let absent_students = ["Ajay", "Priya"]

let final_students = [...present_students, ...absent_students]

final_students.push("Ramesh")

console.log(final_students)



// 2. E-Commerce Cart

let mobile = {
    brand: "Samsung",
    model: "S24",
    price: 70000
}

let charger = {
    charger_type: "Fast Charger",
    watt: 45
}

let product_details = {
    ...mobile,
    ...charger,
    deliveryDate: "20-May-2026"
}

console.log(product_details)



// 3. Food Delivery App

function orderFood(...items) {
    console.log("Total items ordered:", items.length)

    console.log("First item:", items[0])

    console.log("Last item:", items[items.length - 1])
}

orderFood("Pizza", "Burger", "Momos", "Pasta")



// 4. Employee Salary Filter

let employees = [

    {
        name: "Arjun",
        salary: 45000
    },

    {
        name: "Meena",
        salary: 65000
    },

    {
        name: "Ravi",
        salary: 72000
    }

]

let filtered_employees = employees.filter(function (emp) {
    return emp.salary > 50000
})

console.log(filtered_employees)



// 5. Online Game Score Board

let scores = [120, 200, 150, 170, 100]

let total_score = scores.reduce(function (total, score) {
    return total + score
}, 0)

console.log("Total Score:", total_score)