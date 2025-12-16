console.log("JavaScript started");

let name = "FrozenBull";
const age = 24;
let isLearning = true;
let city;
let score = null;
let a = 10;
let b = 3;
let c = 12;




console.log(name);
console.log(age);
console.log(isLearning);

console.log(typeof name);
console.log(typeof age);
console.log(typeof isLearning);
console.log(typeof city);
console.log(score);

console.log(a + b);
console.log(a - b);
console.log(a * b);
console.log(a / b);
console.log(a % b);
console.log((a + b) * c);

let marks = 20;

if(marks >= 75)
    {console.log("Distinction");
}else if (marks >= 60){
    console.log("First class");
}else if (marks >= 35){
    console.log("Pass");
}else{
    console.log("Fail");
}   

for (let i = 1; i<=5; i++) {
    console.log("Count:", i);
}

for (let i = 1; i <= 10; i++) {
    if (i % 2 === 0){
        console.log(i, "is even");
    } else {
        console.log(i, "is odd");
    }
}

let count = 5;

while (count > 0) {
    console.log("Countdown:", count);
    count--;
}