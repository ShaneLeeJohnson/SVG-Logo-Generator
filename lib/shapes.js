class Shape {
    constructor(shapeColor, text, textColor) {
        this.shapeColor = shapeColor;
        this.text = text;
        this.textColor = textColor;
    }

    getSVG() {
        throw new Error('getSVG() is not implemented in Shape class.');
    }

    createTag(tagName, attributes) {
        let tag = `<${tagName}`;
        for (const [key, value] of Object.entries(attributes)) {
            tag += `${key}=${value}`
        }
        tag += '>'
        return tag;
    }
}

class Circle extends Shape {
    constructor(shapeColor, text, textColor, radius) {
        super(shapeColor, text, textColor)
        this.radius = radius;
    }

    render() {
        return `<circle cx='100' cy='100' r='${this.radius}' fill='${this.shapeColor}' />`
    }

    getSVG() {
        const svg = `
        <svg version='1.1' width='300' height='200' xmlns='http://www.w3.org/2000/svg'> 
            ${this.render()}
            <text x='33%' y='60%' font-size='60' text-anchor='middle' fill='${this.textColor}'>${this.text}</text>
        </svg>`;
        return svg;
    }
}

module.exports = { Circle };