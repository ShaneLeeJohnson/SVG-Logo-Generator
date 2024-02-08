// imports inquirer which is used to prompt the user with questions and save their feedback as answers
const inquirer = require('inquirer');
// imports the file system which will be used to write the svg files
const fs = require('fs');
// imports the circle, square, and triangle classes from the shapes.js file
const { Circle, Square, Triangle } = require('./lib/shapes');

// function that tests to make sure that the user doesn't type in more than 3 characters when creating the text.
function validateTextLength(value) {
    if (value.length > 3) {
        return 'Please enter no more than 3 characters.';
    }
    return true;
}

// function that tests if the named color or hex code that the user enters is a valid color.
const colorList = ['red', 'green', 'blue', 'black', 'white', 'yellow', 'purple', 'orange', 'pink', 'gray', 'silver', 'gold', 'teal', 'aqua', 'lime', 'maroon', 'olive', 'navy'];
function isValidColor(color) {
    if(/^#[0-9a-f]{3,6}$/i.test(color)) {
        return true;
    } else if (colorList.includes(color.toLowerCase())) {
        return true;
    } else {
        return 'Please enter a correct hexcode (e.g., #FF0000) or a color from this list [red|green|blue|black|white|yellow|purple|orange|pink|gray|silver|gold|teal|aqua|lime|maroon|olive|navy]';
    }
}

// The questions that the user will be prompted with from inquirer.
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
        message: 'Enter shape color',
        validate: isValidColor
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
        message: 'Please enter the text color',
        validate: isValidColor
    }
]

// Function that initializes inquirer to prompt the user with the questions and saves their responses as answers
function init() {
    inquirer.prompt(questions)
        .then((answers) => {
            // creates a ShapeClass variable that is equal to the shape the user selected from the list
            const ShapeClass = answers.shape === 'Circle'
                ? Circle
                : answers.shape === 'Triangle'
                    ? Triangle
                    : Square;

            // creates a shape variable that is equal to a new ShapeClass object and sets the shapeColor, 
            // text, and textColor properties to what the user answered.
            const shape = new ShapeClass(answers.shapeColor, answers.text, answers.textColor)
            // creates a variable that stores the svg code generated from the specific shape that the
            // shape variable is equal to. e.g. shape = Circle
            const svg = shape.getSVG();

            // creates the svg file using the svg data stored in the svg variable
            fs.writeFileSync(`logo.svg`, svg);
            console.log(`Generated logo.svg`);
        })
        .catch((err) => {
            console.error(err.message);
        })
}

// Calls the init function
init();