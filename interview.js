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

// length of a string
const string = 'virat kohli';
console.log(string.length);     // 11

// reverse of a string
const rev = 'Virat Kohli';
const str = rev.split('').reverse().join('');
console.log(str);           // ilhoK tariV

// count the characters of a string
const myString = "I am working in Wipro Limited Technology";
let count = {};

function countChar(str) {
    for (let char of str) {
        if (count[char]) count[char]++;
        else count[char] = 1;
    }
    return count;
}
console.log(countChar(myString));       // {I: 1, ' ': 6, a: 1, m: 2, w: 1, o: 4, r: 2, k: 1, i: 5, n: 3, g: 2, W: 1, p: 1, L: 1, t: 1,  e: 2, d: 1, T: 1, c: 1, h: 1, l: 1, y: 1}

// sum of a array number
const arrayNum = [1, 4, 2, 5, 6];
let sum = 0;
for (let i = 0; i < arrayNum.length; i++) {
    sum = sum + arrayNum[i]
}
console.log(sum);       // 18

// factorial of a number
const number = 5;
let i = 1;
let fact = 1
while (i <= number) {
    fact = fact * i;
    i++;
}
console.log(fact);      // 120

// even or add in an array
const evenOdd = [10, 3, 4, 5, 2];

for (let i = 0; i < evenOdd.length; i++) {
    let num = evenOdd[i];

    if (num % 2 === 0) {
        console.log('even : ', num);        // 10, 4, 2
    } else {
        console.log('odd : ', num);         // 3, 5
    }
}

// Maximum of a number
const maxNum = [1, 10, 5, 41, 35];
let max = maxNum[0];

for (let i = 1; i < maxNum.length; i++) {
    if (maxNum[i] > max) max = maxNum[i];
}
console.log(max);       // 41

// minimum of a number
const minNum = [1, 10, 5, 41, 35];
let min = minNum[0];

for (let i = 1; i < minNum.length; i++) {
    if (minNum[i] < min) min = minNum[i];
}
console.log(min);       // 1

// fibonacci number
const fibNum = 5;
let f = 0, f1 = 1, fib;
for (let i = 0; i < 5; i++) {
    console.log(f);         // 0 1 1 2 3
    fib = f + f1;
    f = f1;
    f1 = fib;
}

// display object where standard = 2
let students = [
    { id: 1, name: 'a', standard: 2 },
    { id: 2, name: 'b', standard: 3 },
    { id: 3, name: 'c', standard: 2 },
    { id: 4, name: 'd', standard: 1 },
    { id: 5, name: 'e', standard: 4 },
    { id: 6, name: 'f', standard: 2 },

]
//  2 : {id : 1, name : 'a', standard : 2},  {id : 3, name : 'c', standard : 2},

let arrayStudents = {};

// Iterate over the students array
students.forEach(student => {
    let standard = student.standard;
    if (!arrayStudents[standard]) {
        arrayStudents[standard] = [];
    }
    arrayStudents[standard].push(student);
});

// Specify the standard you are interested in
let targetStandard = 2;

// Check if the target standard exists in the grouped students and print
if (arrayStudents[targetStandard]) {
    let studentList = arrayStudents[targetStandard]
        .map(student => `{id: ${student.id}, name: '${student.name}', standard: ${student.standard}}`).join(', ');
    console.log(`${targetStandard} : ${studentList}`);
} else {
    console.log(`No students found for standard ${targetStandard}`);
}

// reverse string using array a(0)
const reverseString = function (s) {
    let arr = s.split('');
    let left = 0;
    let right = arr.length - 1;

    while (left < right) {
        [arr[left], arr[right]] = [arr[right], arr[left]];
        left++;
        right--;
    }
    return arr.join('');
};

console.log(reverseString('hello'));

// reverse the wods in sentence of a string
// input: "this is a TseT"
// output: "siht si a TesT"

const str1 = 'this is a TseT';

function myStr(str) {
    let result = '';
    let word = '';

    for (let i = 0; i < str.length; i++) {
        const char = str[i];

        if (char === ' ') {
            result += reverseString1(word) + ' ';
            word = '';
        } else {
            word += char;
        }
    }

    result += reverseString1(word);
    return result;
}

function reverseString1(s) {
    let reverse = '';

    for (let i = s.length - 1; i >= 0; i--) {
        reverse += s[i];
    }
    return reverse;
}

console.log(myStr(str1));       // siht si a TesT