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

// indexOf()
const a = ["a","b","c","d","e"];






