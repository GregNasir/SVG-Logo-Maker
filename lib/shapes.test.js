// Importing Triangle, Square, Circle classes from ./shapes.js
const { Triangle, Square, Circle } = require("./shapes.js");

// Unit testing -> testing for a triangle 
describe("Triangle test", () => {
  test("test for a triangle with a red background", () => {
    const shape = new Triangle();
    shape.setColor("red");
    expect(shape.render()).toEqual(
      '<polygon points="150, 18 244, 182 56, 182" fill="red" />'
    );
  });
});

// Unit testing -> testing for a square 
describe("Square test", () => {
  test("test for a square with a blue background", () => {
    const shape = new Square();
    shape.setColor("blue");
    expect(shape.render()).toEqual(
      '<rect x="73" y="40" width="160" height="160" fill="blue" />'
    );
  });
});

// Unit testing -> testing for a circle 
describe("Circle test", () => {
  test("test for a circle with a #FFFF00 background", () => {
    const shape = new Circle();
    shape.setColor("#FFFF00");
    expect(shape.render()).toEqual(
      '<circle cx="150" cy="115" r="80" fill="#FFFF00" />'
    );
  });
});