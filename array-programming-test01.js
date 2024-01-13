
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





