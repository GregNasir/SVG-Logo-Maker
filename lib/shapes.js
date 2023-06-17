// Shape class with a  constructor to define shapes
class Shape {
    constructor() {
      this.color = "";
    }
    // addColor extends the shape class
    addColor(colorVar) {
      this.color = colorVar;
    }
  }
  
  // sets triangle shape and inherits settings from Shape function
  class Triangle extends Shape {
    render() {
      // Produces polygon and add color
      return `<polygon points="150, 18 244, 182 56, 182" fill="${this.color}" />`;
    }
  }
  
  // sets square shape and inherits settings from Shape function
  class Square extends Shape {
    render() {
      // Produces polygon and add color
      return `<rect x="73" y="40" width="160" height="160" fill="${this.color}" />`;
    }
  }
  
  // sets circle shape and inherits settings from Shape function
  class Circle extends Shape {
    render() {
      // Produces polygon and add color
      return `<circle cx="150" cy="115" r="80" fill="${this.color}" />`;
    }
  }
  
  // Exports classes (Square, Triangle, Circle)
  module.exports = { Triangle, Square, Circle };