// Write a program to find the area of a square and a rectangle using JavaScript objects with a common areafunction.
// Each Shape should be represented by a seperate object
// Use this keyword within the area() function to access the dimensions of the shape
// Use the formula: Area = Length \* Breadth

function area() {
  return this.length * this.breadth;
}

const rectangle = {
  length: 10,
  breadth: 5,
  area: area
};


const square = {
  length: 7,
  breadth: 7,
  area: area
};


console.log("Area of Rectangle:", rectangle.area());
console.log("Area of Square:", square.area());
