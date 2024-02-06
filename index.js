const inquirer = require('inquirer');
const fs = require('fs');
const { Circle } = require('./lib/shapes');

const questions = [
    {
        type: 'input',
        name: 'color',
        message: 'Enter shape color'
    }
]

function init() {
    inquirer.prompt(questions)
        .then((answers) => {
            const circle = new Circle(answers.color, 'SVG', 'white', 80);

            const svg = circle.getSVG();;

            fs.writeFileSync('circle.svg', svg);
            console.log('Generated circle.svg');
        })
        .catch((err) => {
            console.error(err.message);
        })
}

init();