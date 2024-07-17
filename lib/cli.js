const inquirer = require('inquirer');

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
                    message: 'circle, triangle, square',
                },
                {
                    type: 'input',
                    name: 'shapecolor',
                    message: 'please enter a color for the shape',
                },
            ])
            .then()
            .catch((error) => {
                 console.error('Error:', error);
             });
    };
};

module.exports = CLI;