const inquirer = require('inquirer');
const SVG = require('./SVG.js');
const { Circle, Triangle, Square, Rectangle } = require('./shape.js');
const { writeFile } = require('fs/promises');

class CLI {
  run() {
    return (
      inquirer
        .prompt([
          {
            type: 'input',
            name: 'message',
            message: 'Please enter 3 letters',
            //add validation to check if the input is exactly 3 letters(note the requirement is actually that it be NO MORE THAN 3 letters)
          },
          {
            type: 'input',
            name: 'color',
            message: 'Please enter a color',
          },
          {
            type: 'list',
            name: 'shape',
            message: 'Choose a shape',
            choices: ['circle', 'triangle', 'rectangle'],
          },
          {
            type: 'input',
            name: 'shapeColor',
            message: 'please enter a color for the shape',
          },
        ])
        //should be shapeColor not shapecolor
        .then(({ message, color, shape, shapeColor }) => {
          //TODO: add a switch case to determine the shape

          //switch case should declare a shape variable and set it to a new instance of the shape class
          //the shape class should be imported from shape.js
          //the shape class should be Circle, Triangle, or Square
          //example of a switch:

          let item;

          switch (shape) {
            case "circle":
              item = new Circle();
              break;
            case "triangle":
              item = new Triangle();
              break;
            case "rectangle":
              item = new Rectangle();
              break;
            default:
          }

          //TODO: call the setColor method on the shape object. This method is defined in the shape class.
          item.setColor(shapeColor);
          //////////////////////////////////////////////////////////////////
          //OLD CODE
          // we do not need to pass anything to the new svg instance. we will use the methods defined in our svg class
          //   let svg = new SVG(logo, color, shape, shapecolor);
          //   const svgString = svg.render();
          //   return writeFile('logo.svg', svgString);
          ////////////////////////////////////////////////////////////////////

          //New code:
          // create a new instance of the SVG class
          const svg = new SVG();
          //set the text property of the svg instance to the logo text using the method defined in the svg class
          svg.setText(message, color);
          //set the shape of the svg instance to the shape using the method defined in the svg class
          svg.setShape(item);
        })
        .then(() => {
          //write a console log to tell the user the logo is generated)
          console.log('Logo generated successfully!');
        })
        .catch((error) => {
          console.error('Error:', error);
        })
    );
  }
}

module.exports = CLI;
