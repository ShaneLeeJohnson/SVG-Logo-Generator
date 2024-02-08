// imports the Circle, Square, and Triangle classes from the shapes.js file
const { Circle, Square, Triangle } = require('./shapes');

// Main test suite for the Shapes classes
describe('Shape Classes', () => {
    // test for the circle class
    describe('Circle', () => {
        it('should render with the correct attributes', () => {
            // creates a new circle object with the shapeColor set to blue
            const circle = new Circle('blue');
            // creates a variable equal to the circle svg code with fill equal to blue
            const expectedSVG = `<circle cx='100' cy='100' r='90' fill='blue' />`;
            // validates that the render method on the circle class equals the data from the expectedSVG variable
            expect(circle.render()).toEqual(expectedSVG);
        });
    });

    // test for the square class
    describe('Square', () => {
        it('should render with the correct attributes', () => {
            // creates a new square object with the shapeColor set to red
            const square = new Square('red');
            // creates a variable equal to the square svg code with fill equal to red
            const expectedSVG = `<rect x='10' y='10' width='200' height='200' fill='red' />`;
            // validates that the render method on the square class equals the data from the expectedSVG variable
            expect(square.render()).toEqual(expectedSVG);
        });
    });

    // test for the triangle class
    describe('Triangle', () => {
        it('should render with the correct attributes', () => {
            // creates a new triangle object with the shapeColor set to green
            const triangle = new Triangle('green');
            // creates a variable equal to the triangle svg code with fill equal to green
            const expectedSVG = `<path d='M 100 50 L 200 200 L 0 200 Z' fill='green' />`;
            // validates that the render method on the square class equals the data from the expectedSVG variable
            expect(triangle.render()).toEqual(expectedSVG);
        });
    });
});