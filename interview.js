// What will be the output of the below code:
const array = [10, 20, 30, 40];
const result = array.map((num) => num / 2).filter((num) => num >= 15);
console.log(result);    // [15, 20]

//Find the issue in the below code snippet.
let counter = 0;
for (let i = 1; i <= 10; i++) {
    counter += i;
}
console.log(counter);       // 55
// console.log(i);          // error

//Analyze the below code. Do you see any issue? If yes, what is that issue?
const object1 = {
    a: 10,
    b: 20,
    c: function () {
        console.log(this.a + this.b); // NAN
    },
};
const func = object1.c;
func();

// What will be the output of below code snippet:
function greetHello(name) {
  return `Hello, ${name}!`;
}
console.log(greetHello("Brian"));       // Hello, Brian

