// src/index.ts
console.log("Hello, TypeScript!");

// Vars
const username: string = "JohnDoe";
const userAge: number = 30;
const isEmployed: boolean = true;

console.log(username, userAge, isEmployed);

// Functions, params, returns
function sum(a: number, b: number): number {
   return a + b
}

console.log(sum(5, 3));

function fullName(firstName: string, lastName: string): string {
   return `${firstName} ${lastName}`;
}

console.log(fullName("Jane", "Doe"));

function isEven(num: number): boolean {
   return num % 2 == 0;
}

console.log(isEven(4));

// Interfaces
interface IUser {
   id: number;
   name: string;
}

function createUser(user: IUser): IUser {
   return user;
}

console.log(createUser({id: 1, name: "John Doe"}));

// Types
type ProductType = "book" | "furniture" | "electronics";

interface IProduct {
   id: number;
   name: string;
   price: number;
   type: ProductType;
}

function showProduct(product: IProduct): string {
   return `Product: ${product.name}, Type: ${product.type}, Price: $${product.price}`;
}

const myProduct: IProduct = {
   id: 1,
   name: "TypeScript",
   price: 29.99,
   type: "book"
};

console.log(showProduct(myProduct));
