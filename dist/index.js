"use strict";
// src/index.ts
console.log("Hello, TypeScript!");
// Vars
const username = "JohnDoe";
const userAge = 30;
const isEmployed = true;
console.log(username, userAge, isEmployed);
// Functions, params, returns
function sum(a, b) {
    return a + b;
}
console.log(sum(5, 3));
function fullName(firstName, lastName) {
    return `${firstName} ${lastName}`;
}
console.log(fullName("Jane", "Doe"));
function isEven(num) {
    return num % 2 == 0;
}
console.log(isEven(4));
function createUser(user) {
    return user;
}
console.log(createUser({ id: 1, name: "John Doe" }));
function showProduct(product) {
    return `Product: ${product.name}, Type: ${product.type}, Price: $${product.price}`;
}
const myProduct = {
    id: 1,
    name: "TypeScript",
    price: 29.99,
    type: "book"
};
console.log(showProduct(myProduct));
