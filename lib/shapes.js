// Creates the basic Shape class that the other shapes will inherit from
class Shape {
    constructor(shapeColor, text, textColor) {
        this.shapeColor = shapeColor;
        this.text = text;
        this.textColor = textColor;
    }

    // The getSVG function that the other shapes will inherit. In this case it throws an error 
    // since it's not actually used in the Shape class
    getSVG() {
        throw new Error('getSVG() is not implemented in Shape class.');
    }
}

// The class for the Circle shape. It inherits shapeColor, text, and textColor from the Shape class
class Circle extends Shape {
    constructor(shapeColor, text, textColor) {
        super(shapeColor, text, textColor)
    }

    // The render function creates the svg code for the circle shape and sets the fill color to the shapeColor that the user types in
    render() {
        return `<circle cx='100' cy='100' r='90' fill='${this.shapeColor}' />`
    }

    // The getSVG function is modified from the Shape class version and is used to generate the specific
    // svg code for the circle shape and the text that will go inside it. 
    getSVG() {
        const svg = `
        <svg version='1.1' width='300' height='200' xmlns='http://www.w3.org/2000/svg'> 
            ${this.render()}
            <text x='33%' y='60%' font-size='60' text-anchor='middle' fill='${this.textColor}'>${this.text}</text>
        </svg>`;
        return svg;
    }
}

// The class for the Square shape. It inherits shapeColor, text, and textColor from the Shape class
class Square extends Shape {
    constructor(shapeColor, text, textColor) {
        super(shapeColor, text, textColor)
    }

    // The render function creates the svg code for the square shape and sets the fill color to the shapeColor that the user types in
    render() {
        return `<rect x='10' y='10' width='200' height='200' fill='${this.shapeColor}' />`
    }

    // The getSVG function is modified from the Shape class version and is used to generate the specific
    // svg code for the square shape and the text that will go inside it.
    getSVG() {
        const svg = `
        <svg version='1.1' width='300' height='200' xmlns='http://www.w3.org/2000/svg'>
            ${this.render()}
            <text x='36%' y='65%' font-size='60' text-anchor='middle' fill='${this.textColor}'>${this.text}</text>
        </svg>`;
        return svg;
    }
}

// The class for the Triangle shape. It inherits shapeColor, text, and textColor from the Shape class
class Triangle extends Shape {
    constructor(shapeColor, text, textColor) {
        super(shapeColor, text, textColor)
    }

    // The render function creates the svg code for the triangle shape and sets the fill color to the shapeColor that the user types in
    render() {
        return `<path d='M 100 50 L 200 200 L 0 200 Z' fill='${this.shapeColor}' />`
    }

    // The getSVG function is modified from the Shape class version and is used to generate the specific
    // svg code for the triangle shape and the text that will go inside it.
    getSVG() {
        const svg = `
        <svg version='1.1' width='300' height='200' xmlns='http://www.w3.org/2000/svg'>
            ${this.render()}
            <text x='33%' y='90%' font-size='45' text-anchor='middle' fill='${this.textColor}'>${this.text}</text>
        </svg>`;
        return svg;
    }
}

// exports the circle, square, and triangle classes
module.exports = { Circle, Square, Triangle };