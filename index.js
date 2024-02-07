const inquirer = require('inquirer');
const fs = require('fs');
const { Circle, Square, Triangle } = require('./lib/shapes');

const questions = [
    {
        type: 'list',
        name: 'shape',
        message: 'Please choose a shape',
        choices: ['Circle', 'Square', 'Triangle']
    },
    {
        type: 'input',
        name: 'shapeColor',
        message: 'Enter shape color'
    },
    {
        type: 'input',
        name: 'text',
        message: 'Please enter up to 3 characters'
    },
    {
        type: 'input',
        name: 'textColor',
        message: 'Please enter the text color'
    }
]

function init() {
    inquirer.prompt(questions)
        .then((answers) => {
            const ShapeClass = answers.shape === 'Circle'
                ? Circle
                : answers.shape === 'Triangle'
                ? Triangle
                : Square;

            const shape = new ShapeClass(answers.shapeColor, answers.text, answers.textColor)
            const svg = shape.getSVG();

            fs.writeFileSync(`./examples/${answers.shape}.svg`, svg);
            console.log(`Generated ${answers.shape}.svg`);
        })
        .catch((err) => {
            console.error(err.message);
        })
}

init();