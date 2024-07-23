class Shapes {
    //TODO: constructor function with color property set to empty string
    constructor() {
        this.color = '';
    }
    //TODO: set color method that sets the color property to the color passed in
    setColor(color) {
        this.color = color;
    }
}

class Circle extends Shapes {
    render() {
        return `<circle cx="150" cy="150" r="80" fill="${this.color}" />`
    }
}
//TODO: call a render method (defined in the svg class) that returns the circle with the color.
//`<circle cx="150" cy="150" r="80" fill="${this.color}" />`

class Rectangle extends Shapes {
    render() {
        return `<rect x="50" y="20" width="150" height="150" fill="${this.color}" />`
    }
}
//TODO: call a render method (defined in the svg class) that returns the rectangle with the color.
//`<rect x="50" y="20" width="150" height="150" fill="${this.color}" />`

class Triangle extends Shapes {
    render() {
        return `<polygon points="150,20 100,100 200,100" fill="${this.color}" />`
    }
}
//TODO: call a render method (defined in the svg class) that returns the triangle with the color.
//`<polygon points="150,20 100,100 200,100" fill="${this.color}" />`

//export the Circle, Rectangle, and Triangle classes
module.exports = { Circle, Rectangle, Triangle };