// 16.find() - returns the first item for which callback returned true

let feeComponents = [
    {id: "1010", feeName: "hostel-fee"}, 
    {id: "1011", feeName: "tution-fee"},
    {id: "1012", feeName: "admission-fee"},
    {id: "1013", feeName: "caution-deposit"},
    {id: "1014", feeName: "campus-automation"}
];
let removedFeeId = "1011";

let removedFee = feeComponents.find((item) => item.id == removedFeeId)
console.log(removedFee);
