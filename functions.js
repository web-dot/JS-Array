// function expression

const getRectArea = function(width, height){
    return width*height;
};

console.log(getRectArea(2, 4)); // 8


// function declaration
function calcRectArea(width, height){
    return width*height;
}

console.log(calcRectArea(4, 5)); // 20


// arrow expression
const getRectAreaArrow = (width, height) => {return width*height}; 
console.log(getRectAreaArrow(10, 20)); // 200