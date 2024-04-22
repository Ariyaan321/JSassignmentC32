
// 1. Variable Declaration and Initialization:
let name = "Ariyaan";
let age;
let favcol;
age = 20
favcol = "red"
console.log(`name ${name} , age ${age} , favorite colour ${favcol} `)



// 2. Data Types and Operators:

let bage = new Date();
let inputdate = prompt("enter year of birth")
let currdate = bage.getFullYear()
console.log("your age is: ", currdate - inputdate)

let num1;
let num2;
num1 = 5;
num2 = 7;
console.log("addition of two numbers is: ", num1 + num2);
console.log("multiplication of two numbers is: ", num1 * num2);
console.log("subtraction of two numbers is: ", num1 - num2);
console.log("division of two numbers is: ", (num1 / num2).toFixed(2));

let sc = "ab"
let sc2 = "cd"
console.log("after concatenation: ", sc + sc2)

// 3. Control Structures:  <==============>
let eveod3 = prompt("Enter number")
if (eveod3 % 2 == 0) {
    console.log("Even")
}
else {
    console.log("Odd")
}


function revs(ss) {
    if (ss == ss.split('').reverse().join('')) {
        console.log("Yes Palindrome")
    }
    else {
        console.log("Not Palindrome")

    }
}
s = prompt("Enter string: ")
revs(s)



// 4. Functions:

let recarea = (l, b) => {
    console.log("Area is: ", l * b)
}

function circum(r) {
    console.log("Circumference of a circle is: ", 2 * 3.14 * r)
}

function celfar(a) {
    console.log("farenheit is: ", a + 32)
}

let ll = prompt("Enter length of rectangle: ")
let bb = prompt("Enter breadth of rectangle: ")
recarea(ll, bb)

let r = prompt("Enter radius of cricle")
circum(r)

let celsius = prompt("Enter celsius")
celfar(celsius)
