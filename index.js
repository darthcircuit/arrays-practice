// Homework 2/23/2023 //

// 1) Given an array, return a new array where the first and last elements from the original array are removed.
// I want this done in a function.
// If there's less than 3 elements, it shouldn't remove the items.

function removeOuter(arrayToTrim) {
  if (arrayToTrim.length < 3) {
    return [...arrayToTrim];
  } else {
    return [...arrayToTrim].slice(1, [...arrayToTrim].at(-2));
  }
}

const arrayOne = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const newArray = removeOuter(arrayOne);

console.log("Array One");
console.log("---------");
console.log("Original Array: " + arrayOne);
console.log("New Array: " + newArray);
console.log();

const arrayTwo = [1, 2];
const newArrayTwo = removeOuter(arrayTwo);

console.log("Array Two");
console.log("---------");
console.log("Original Array: " + arrayTwo);
console.log("New Array: " + newArrayTwo);
console.log();

// 2) Build a heading generator.
// IE:
// heading = 6
// content = "hey there, I'm a header"
// => '<h6>hey there, I'm a header</h6>'
// Keep in mind, valid heading tags are only 1-6

function headingGenerator(size, content) {
  if (size >= 1 && size <= 6) {
    return `<h${size}>${content}</h${size}>`;
  } else {
    return `header size ${size} is invalid`;
  }
}

const heading = 6;
const content = "hey there, I'm a header";

console.log(headingGenerator(heading, content));

const headingTwo = 7;
const contentTwo = "hey there, I'm an invalid header";

console.log(headingGenerator(headingTwo, contentTwo));

// 3) Swap the first and last characters of a string.
// IE: "ryan" => "nyar"
