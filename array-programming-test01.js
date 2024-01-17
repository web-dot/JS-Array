
class AdmissionAcademicYear{
    id;
    academicYear;
    currentAcademicYear;

    constructor(academicYear){
        this.academicYear = academicYear;
    }
}


const academicInfo1 = new AdmissionAcademicYear("2021");
const academicInfo2 = new AdmissionAcademicYear("2022");
const academicInfo3 = new AdmissionAcademicYear("2023");
const academicInfo4 = new AdmissionAcademicYear("2024");

const academicDropdown = [academicInfo1, academicInfo2, academicInfo3, academicInfo4];

// map
const yearList = academicDropdown.map(info => info.academicYear);

console.log(yearList);


// slice
const animals = ['ant', 'bison', 'camel', 'duck', 'elephant'];
const lastTwo = animals.slice(-2);
console.log(lastTwo);

// copy array
const animalsCopy = Array.from(animals);
console.log("copy", animalsCopy);

// find
// returns the first element in the provided array that satisfies the provided
// testing function

const aquatic = "duck";
const isFound = animals.find(animal => animal === aquatic)
console.log("find: ", isFound);


// findIndex
const index = animals.findIndex(animal => animal == aquatic)
console.log("findIndex: ", index);


// using find


const degreeList = [
    { degreeId: 1, degreeName: "Bachelor of Science" },
    { degreeId: 3, degreeName: "Master of Science" }
    // { degreeId: 2, degreeName: "Bachelor of Arts" },
]

// using filter()
// filterDegree will be an array containing the degree if the degree is found.
// if the length is greater than 0, it means the degree was found
const degreeToFind = 2;
const filteredDegrees = degreeList.filter(deg => deg.degreeId === degreeToFind);
console.log(filteredDegrees);
if(filteredDegrees.length){
    const currentDegree = filteredDegrees[0];
    console.log(currentDegree);
}
else{
    console.log("Degree not found");
}


// using find()
const foundDegree = degreeList.find(deg => deg.degreeId === degreeToFind);
if(foundDegree){
    console.log("Degree Found");
}
else{
    console.log("Degree not found");
}



// using indexOf() to splice()
const mappedRecieptTemplateComponentObject = {
    templateComponent: ["A", "B", "C", "D", "E"]
}

const mappedcomp = ["C"];


const indexOfC = mappedRecieptTemplateComponentObject.templateComponent.indexOf(mappedcomp[0]);
console.log(indexOfC);
if(indexOfC !== -1){
    mappedRecieptTemplateComponentObject.templateComponent.splice(indexOfC, 1);
}
console.log(mappedRecieptTemplateComponentObject.templateComponent);


// filter() -> new array containing only the items that match the test
const food = ["apple", "tea", "bread", "egg", "jam", "butter"];
const triads = food.filter(item => item.length === 3);
console.log(triads);



// map() -> do same thing to each item in array, leaving you with an array containing the changed items
const nums = [2,5,4,7];
const doubled = nums.map(number => number * 2);
console.log(doubled);

// using map() and filter()
const numbers = [1,2,3,4,5,6,7,8,9,10];
const squaresOfEvens = numbers
.filter(number => number % 2 == 0)
.map(even => even * even);
console.log("by map-filter ", squaresOfEvens);

// using reduce() in place of map() and filter()
const squaresOfEvensByReduce = numbers.reduce((accumulator, item) => {
    if(item % 2 == 0){
        accumulator.push(item * item);
    } 
    return accumulator;
}, [])

console.log("by reduce ", squaresOfEvensByReduce);


// using reduce() and Map to remove duplicates from array

class StudentProfileDto {
    studentId;
    candidateId;
    studentName;
    studentUsn;

    constructor(studentId, studentName, studentUsn){
        this.studentId = studentId;
    }
}


this.coursesOptions = Array.from(
    this.coursesOptions.reduce((map, course) => {
        map.set(course.id, course)
    }, new Map()).values()
);

// Assuming this.coursesOptions is already defined as an array
this.coursesOptions = Array.from(
    this.coursesOptions.reduce(function(map, course) {
        return map.set(course.id, course);
    }, new Map()).values()
);













