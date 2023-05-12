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

// reverse() - transposes the elements of array, the first becomes the last, the last becomes first. Returns reference to array
const toReverse = ["1","2","3","4","5"];
console.log(toReverse.reverse());

// flat() - returns a new array with all the sub-array elements concatenated into it recursively upto the specified depth
let toFlat = [1,2,[3,4]];
toFlat = toFlat.flat();
console.log(toFlat);

// sort() - sorts the elements in place, returns a reference to the array
const toSort = ["Wind","Rain","Fire"];
toSort.sort();
console.log(toSort); // ["Fire", "Rain", "Wind"]

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

// flatMap() - runs map() followed by a flat() of depth 1
const a3 = ["a","b","c"];
const a4 = a3.flatMap((item) => [item.toUpperCase(), item.toLowerCase()]);
console.log(a4); // [ 'A', 'a', 'B', 'b', 'C', 'c' ]


// filter() - returns a new array containing the items for which callback returened `true`
const toFilter = ["a",10,"b",20,"c",30];
const filtered = toFilter.filter((item) => typeof item === "number");
console.log(filtered); // [ 10, 20, 30 ]


// find() - returns the first item for which callback returned true
const toFind = ["a",10,"b",20,"c",30];
const i = toFind.find((item) => typeof item === "number");
console.log(i); // 10

// findLast() - returns the last item for which the callback returned `true`
// const f1 = ["a",10,"b",20,"c",30];
// const j = f1.findLast((item) => typeof item === "number");
// console.log(j);


// findIndex() - returns index of first item for which the callback returned true
const arr = ["a",10,"b",20,"c",30];
const last = arr.findIndex((item) => typeof item === "number");
console.log(last); // 1

// every() - returns true if callback returns true for every item in array
isNumber = (value) => {return typeof value === "number"};
const arr1 = [1,2,3];
const arr2 = [1,"2",3];
console.log(arr1.every(isNumber)); // true
console.log(arr2.every(isNumber)); // false

// some() - returns true if callback returns true for at least one item
const arr3 = ["1","2","3"];
console.log(arr2.some(isNumber)); // true
console.log(arr3.some(isNumber)); // false


/***
 * reduce() - applies callback(accumulator, currentValue, currentIndex, array) for
 * each value in the array for the purpose of reducing the list of items down to a
 * single value.
 * The reduce function returns the final value returned by the callback function.
 *  */ 

const arr4 = [10,20,30];
const total = arr4.reduce(
    (accumulator, currentValue) => accumulator + currentValue, 
    0,
); 
console.log(total);



// Summary - 

// 1.concat()
// 2.join()
// 3.push(), pop(), shift(), unshift()
// 4.slice()
// 5.at()
// 6splice() - removes elements from array and optionally replaces them
// 7.reverse() - transposes the elements of array, the first becomes the last, the last becomes first. Returns reference to array
// 8.flat() - returns a new array with all the sub-array elements concatenated into it recursively upto the specified depth
// 9.sort() - sorts the elements in place, returns a reference to the array
// 10.indexOf() - searches the array for searchElement, and returns index of first match
// 11.lastIndexOf() - works like indexOf(), but starts at the end and searches backwards

// 12.forEach() executes callback on every item and returns undefined
// 13.map() - return new array of the return value from executing callback on each item
// 14.flatMap() - runs map() followed by a flat() of depth 1
// 15.filter() - returns a new array containing the items for which callback returened `true`
// 16.find() - returns the first item for which callback returned true
// 17.findIndex() - returns index of first item for which the callback returned true
// 18.every() - returns true if callback returns true for every item in array
// 19.some() - returns true if callback returns true for at least one item
// 20.reduce()


















