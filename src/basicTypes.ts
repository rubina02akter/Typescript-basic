// Task 3: Basic Types Practice*****************

let nam: string = "Hasu afa";
let id: number = 123789;
let student: boolean = false;
let emptyValue: null = null;

// any

let info:any;
 info = 'string';
 info = 12345;
 info = true;
 info = [10,12];

// void
function greet(): void {
  console.log("Hello, Rubina!");
}

greet(); 

// Task 4: Arrays & Tuples*********************

let fruits: string[] = ["Mango", "Apple", "Lichi", "Orange"];
let userInfo: [number, string] = [987, "Rubina"];

console.log("Fruits Array:", fruits);
console.log("User Info Tuple:", userInfo);

// Task 5: Enum *********************
// Enum declaration: enum type: numeric, string, hetergenous
// numeric enum
enum Status {
  Success ,
  NotFound ,
  ServerError 
}
console.log(Status.Success); 
// string enum
enum Directions {
  Up = "UP",
  Down = "DOWN",
  Left = "LEFT",
  Right = "RIGHT"
}
console.log(Directions.Up);
console.log(Directions.Right); 
// mixed or hetergenous enum
enum Mixed {
  Yes = "YES",
  No = 0,
  Maybe = 1
}

console.log(Mixed.Yes); 
console.log(Mixed.No); 

//--------------------------
// 📘 Part 3: Type System
// --------------------------

// Task 6: Type Inference*****************

let city = "Dhaka";
let population = 22222220000; 
let isCapital = true; 

// Task 7: Type Annotation***********

let boyosh: number = 22;
let fullName: string = "Rubina Akter";
let isStudent: boolean = true;

// Task 8: Union Types***************

let strOrNum: string | number;
strOrNum = "Rubi";
strOrNum = 888;

const printValue = (value: string | number) => {
  console.log(value);
};

printValue("Rubi");
printValue(888);


// Task 9: Type Alias*************

type userName = string;
type userAge = number;
type userMarriage = boolean;
type userInfo = any;

type UsersData = {
  name: userName;
  age: userAge;
};

const typeAlias: UsersData = {
  name: "ruhi",
  age: 22,
};

// Task 10: Literal Types****************

let answer: "yes" | "no"="yes";

if (answer === "yes") {
  console.log("You said YES");
} else {
  console.log("You said NO!");
}