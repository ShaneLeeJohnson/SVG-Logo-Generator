const inquirer = require('inquirer');
const fs = require('fs');
const { Circle, Square, Triangle } = require('./lib/shapes');

function validateTextLength(value) {
    if (value.length > 3) {
        return 'Please enter no more than 3 characters.';
    }
    return true;
}

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
        message: 'Please enter up to 3 characters',
        validate: validateTextLength
    },
    {
        type: 'input',
        name: 'textColor',
        message: 'Please enter the text color'
    }
]

function isValidColor(color) {
    return /^#[0-9a-f]{3,6}$/i.test(color) || /(red|green|blue|black|white|yellow|purple|orange|pink|gray|silver|gold|teal|aqua|lime|maroon|olive|navy)/i.test(color);
}

function init() {
    inquirer.prompt(questions)
        .then((answers) => {
            const ShapeClass = answers.shape === 'Circle'
                ? Circle
                : answers.shape === 'Triangle'
                    ? Triangle
                    : Square;

            if (!isValidColor(answers.shapeColor)) {
                throw new Error('Invalid shape color');
            }
            if (!isValidColor(answers.textColor)) {
                throw new Error('Invalid text color');
            }

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