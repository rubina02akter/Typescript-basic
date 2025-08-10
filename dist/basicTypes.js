"use strict";
// Task 3: Basic Types Practice*****************
let nam = "Hasu afa";
let id = 123789;
let student = false;
let emptyValue = null;
// any
let info;
info = 'string';
info = 12345;
info = true;
info = [10, 12];
// void
function greet() {
    console.log("Hello, Rubina!");
}
greet();
// Task 4: Arrays & Tuples*********************
let fruits = ["Mango", "Apple", "Lichi", "Orange"];
let userInfo = [987, "Rubina"];
console.log("Fruits Array:", fruits);
console.log("User Info Tuple:", userInfo);
// Task 5: Enum *********************
// Enum declaration: enum type: numeric, string, hetergenous
// numeric enum
var Status;
(function (Status) {
    Status[Status["Success"] = 0] = "Success";
    Status[Status["NotFound"] = 1] = "NotFound";
    Status[Status["ServerError"] = 2] = "ServerError";
})(Status || (Status = {}));
console.log(Status.Success);
// string enum
var Directions;
(function (Directions) {
    Directions["Up"] = "UP";
    Directions["Down"] = "DOWN";
    Directions["Left"] = "LEFT";
    Directions["Right"] = "RIGHT";
})(Directions || (Directions = {}));
console.log(Directions.Up);
console.log(Directions.Right);
// mixed or hetergenous enum
var Mixed;
(function (Mixed) {
    Mixed["Yes"] = "YES";
    Mixed[Mixed["No"] = 0] = "No";
    Mixed[Mixed["Maybe"] = 1] = "Maybe";
})(Mixed || (Mixed = {}));
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
let boyosh = 22;
let fullName = "Rubina Akter";
let isStudent = true;
// Task 8: Union Types***************
let strOrNum;
strOrNum = "Rubi";
strOrNum = 888;
const printValue = (value) => {
    console.log(value);
};
printValue("Rubi");
printValue(888);
const typeAlias = {
    name: "ruhi",
    age: 22,
};
// Task 10: Literal Types****************
let answer = "yes";
if (answer === "yes") {
    console.log("You said YES");
}
else {
    console.log("You said NO!");
}
