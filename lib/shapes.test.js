const { Circle, Square, Triangle } = require('./shapes');

describe('Shape Classes', () => {
    describe('Circle', () => {
        it('should render with the correct attributes', () => {
            const circle = new Circle('blue');
            const expectedSVG = `<circle cx='100' cy='100' r='90' fill='blue' />`;
            expect(circle.render()).toEqual(expectedSVG);
        });
    });

    describe('Square', () => {
        it('should render with the correct attributes', () => {
            const square = new Square('red');
            const expectedSVG = `<rect x='10' y='10' width='200' height='200' fill='red' />`;
            expect(square.render()).toEqual(expectedSVG);
        });
    });

    describe('Triangle', () => {
        it('should render with the correct attributes', () => {
            const triangle = new Triangle('green');
            const expectedSVG = `<path d='M 100 50 L 200 200 L 0 200 Z' fill='green' />`;
            expect(triangle.render()).toEqual(expectedSVG);
        });
    });
});