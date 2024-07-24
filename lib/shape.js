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
        return `<circle cx="155" cy="110" r="80" fill="${this.color}" />`
    }
}
//TODO: call a render method (defined in the svg class) that returns the circle with the color.
//`<circle cx="150" cy="150" r="80" fill="${this.color}" />`

class Square extends Shapes {
    render() {
        return `<rect x="80" y="30" width="150" height="150" fill="${this.color}" />`
    }
}
//TODO: call a render method (defined in the svg class) that returns the rectangle with the color.
//`<rect x="50" y="20" width="150" height="150" fill="${this.color}" />`

class Triangle extends Shapes {
    render() {
        return `<polygon points="160,20,70,150,240,150" fill="${this.color}" />`
    }
}
//TODO: call a render method (defined in the svg class) that returns the triangle with the color.
//`<polygon points="150,20 100,100 200,100" fill="${this.color}" />`

//export the Circle, Square, and Triangle classes
module.exports = { Circle, Square, Triangle };