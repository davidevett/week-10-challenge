const inquirer = require('inquirer');
const SVG = require('./SVG.js');
const { Circle, Triangle, Square } = require('./shape.js');
const { writeFile } = require('fs/promises');

class CLI {
    run() {
        return inquirer
            .prompt([
                {
                    type: 'input',
                    name: 'logo',
                    message: 'Please enter 3 letters',
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
                    choices: ['circle', 'triangle', 'square']
                },
                {
                    type: 'input',
                    name: 'shapeColor',
                    message: 'please enter a color for the shape',
                },
            ])
            .then(({ logo, color, shape, shapecolor }) => {
                //here you define your switch cases for shape, set the shape color, the text, the shape, and then define your return(write the file)
                let svg = new SVG(logo, color, shape, shapecolor);
                const svgString = svg.render();
                return writeFile('logo.svg', svgString); 
            })
            .then(() => {
                //write a console log to tell the user the logo is generated)
                console.log('Logo generated successfully!');
            })
            .catch((error) => {
                console.error('Error:', error);
            });
    };
};

module.exports = CLI;