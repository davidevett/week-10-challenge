class SVG {
  //TODO: In the constructor, we only need to declare the textElement and shapeElement properties. We are not passing any arguments to the constructor.
  constructor(textElement, shapeElement) {
    this.textElement = "";
    this.shapeElement = "";
  };
  //TODO: create a render method that returns the svg. The svg should contain the text and shape elements.
  render() {
    return `<svg version="1.1 "width="300" height="200" xmlns="http://www.w3.org/2000/svg">${this.shapeElement}${this.textElement}</svg>`
  };
  //TODO:  create a setText method that takes in a message and color and sets the textElement property to the text element with the message and color.
  setText(message, color) {
    if (message > 3) {
      throw new Error("Message should be less than or equal to 3 characters");
    }
    this.textElement = `<text x="150" y="125" font-size="60" text-anchor="middle" fill="${color}">${message}</text>`;
  };
  //TODO: create a setShape method that takes in a shape and sets the shapeElement property. render the shape element.
  setShape(shape) {
    this.shapeElement = shape.render();
  };
}
module.exports = SVG;