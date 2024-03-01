// src/index.ts
console.log("Hello, TypeScript!");

// Variables with basic types
const username: string = "JohnDoe";
const userAge: number = 30;
const isEmployed: boolean = true;

console.log(username, userAge, isEmployed);

// Functions with typed parameters and return types
function sum(a: number, b: number): number {
    return a + b;
}
console.log(`Suma de 5 + 3: ${sum(5, 3)}`);

function fullName(firstName: string, lastName: string): string {
    return `${firstName} ${lastName}`;
}
console.log(`Nombre completo: ${fullName("Jane", "Doe")}`);

function isEven(num: number): boolean {
    return num % 2 === 0;
}
console.log(`¿Es 4 un número par? ${isEven(4)}`);

// Interfaces to define the structure of objects
interface IUser {
    id: number;
    name: string;
}

// Creating and using objects based on interfaces
const user: IUser = {
    id: 1,
    name: "John Doe"
};
console.log(`Usuario: ${user.name}`);

// Custom types and type unions
type ProductType = "book" | "furniture" | "electronics";

interface IProduct {
    id: number;
    name: string;
    price: number;
    type: ProductType;
}

function showProduct(product: IProduct): string {
    return `Producto: ${product.name}, Tipo: ${product.type}, Precio: $${product.price}`;
}

// Using custom types to create an object
const myProduct: IProduct = {
    id: 1,
    name: "Programming TypeScript",
    price: 49.99,
    type: "book"
};
console.log(showProduct(myProduct));
