// Import inquirer
const inquirer = require("inquirer");

// Import File System
const fs = require("fs");

// Importing polygon classes
const { Triangle, Square, Circle } = require("./lib/shapes");

// wrtites SVG file
function writeToFile(fileName, answers) {
  let svgString = "";
  // Sets width and height
  svgString =
    '<svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg">';
  // <g> tag wraps <text> tag so that user font input layers on top of polygon -> not behind
  svgString += "<g>";
  // User input defines shape
  svgString += `${answers.shape}`;

  // Conditional check takes users input from choices array and then adds polygon properties and shape color to SVG string
  let shapeChoice;
  if (answers.shape === "Triangle") {
    shapeChoice = new Triangle();
    svgString += `<polygon points="150, 18 244, 182 56, 182" fill="${answers.shapeBackgroundColor}"/>`;
  } else if (answers.shape === "Square") {
    shapeChoice = new Square();
    svgString += `<rect x="73" y="40" width="160" height="160" fill="${answers.shapeBackgroundColor}"/>`;
  } else {
    shapeChoice = new Circle();
    svgString += `<circle cx="150" cy="115" r="80" fill="${answers.shapeBackgroundColor}"/>`;
  }

  // takes text and makes default size 40px
  svgString += `<text x="150" y="130" text-anchor="middle" font-size="40" fill="${answers.textColor}">${answers.text}</text>`;
  // Closing </g> tag
  svgString += "</g>";
  // Closing </svg> tag
  svgString += "</svg>";

  // Using file system module to generate svg file 
  fs.writeFile(fileName, svgString, (err) => {
    err ? console.log(err) : console.log("Generated logo.svg");
  });
}

// prompts questions in terminal
function promptUser() {
  inquirer
    .prompt([
      // asking for text desired
      {
        type: "input",
        message:
          "What text would you like you logo to display? (Enter up to three characters)",
        name: "text",
      },
      // asking for text color desired
      {
        type: "input",
        message:
          "Choose text color (Enter color keyword OR a hexadecimal number)",
        name: "textColor",
      },
      // asking for shape desired
      {
        type: "list",
        message: "What shape would you like the logo to render?",
        choices: ["Triangle", "Square", "Circle"],
        name: "shape",
      },
      // Shape color 
      {
        type: "input",
        message:
          "Choose shapes color (Enter color keyword OR a hexadecimal number)",
        name: "shapeBackgroundColor",
      },
    ])
    .then((answers) => {
      // Test to ensure no more than 3 characters
      if (answers.text.length > 3) {
        console.log("Must enter a value of no more than 3 characters");
        promptUser();
      } else {
        // generate SVG file
        writeToFile("logo.svg", answers);
      }
    });
}

// Calling promptUser function 
promptUser();