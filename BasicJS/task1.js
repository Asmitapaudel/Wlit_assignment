// Write a program to find the area of a cylinder using JavaScript objects (radius, height and the area function should be in the object).
// (Area of a Cylinder= pi*r^2*h) 

const cylinder = {
  radius: 5,      
  height: 10,     
  area: function() {
    const pi = Math.PI;
    return pi * this.radius * this.radius * this.height;
  }
};

console.log("Area of the cylinder:", cylinder.area().toFixed(2));
