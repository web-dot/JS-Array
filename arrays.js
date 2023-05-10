//file path -> D:\690\Javascript-snippets

//iterating over arrays
const colors = ["red", "green", "blue"];
colors.forEach((color) => console.log(color));

// concat()
let myArray = ["1","2","3"];
myArray = myArray.concat("a","b","c");
console.log(myArray);

// join()
const newArray = ["Wind","Rain","Fire"];
newArray.join("-");
console.log(newArray);

// push(), pop(), shift(), unshift()

// push - adds at the end, returns resulting length.
// pop - removes last element, and returns it.

// shift - removes first element, and returns it.
// unshift - adds one or more to the front, and returns the length

// pop-shift
// push-unshift

// slice()
let sliceArray = ["a","b","c","d","e","f","g","h"];
sliceArray = sliceArray.slice(1,4);
console.log(sliceArray);

// at()
let searchedArray = ["a","b","c","d","e"];
console.log(searchedArray.at(-2), " -> returns d, the second last element");

// splice() - removes elements from array and optionally replaces them
let spliceArray = ["1","2","3","4","5"];
console.log(spliceArray.splice(1,3,"a","b","c","d"));

// indexOf() - searches the array for searchElement, and returns index of first match
const a = ["a", "b", "a", "b", "a"];
console.log(a.indexOf("b"));

console.log(a.indexOf("b",2));
console.log(a.indexOf("z")); // -1 cause "z" was not found


// lastIndexOf() - works like indexOf(), but starts at the end and searches backwards
const c = ["a","b","c","d","a","b"];
console.log(c.lastIndexOf("b")); // 5

// ITERATIVE METHODS
 // forEach()
 // map()

// forEach() executes callback on every item and returns undefined
const e = ["a","b","c"];
e.forEach((element) => console.log(element));


// map() - return new array of the return value from executing callback on each item
const a1 = ["a","b","c"];
const a2 = a1.map((item) => item.toUpperCase());
console.log(a2); // [ 'A', 'B', 'C' ]




