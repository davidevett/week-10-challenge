class SVG {
    constructor(width, height, shapeColor) {
      this.width = width;
      this.height = height;
      this.color = shapeColor;
      this.svgElement.setAttribute('width', this.width);
      this.svgElement.setAttribute('height', this.height);
    }

    addCircle(cx, cy, r) {
        const circle = document.createElementNS('http://www.w3.org/2000/svg', 'circle');
        circle.setAttribute('cx', cx);
        circle.setAttribute('cy', cy);
        circle.setAttribute('r', r);
        circle.setAttribute('fill', shapeColor);
        this.svgElement.appendChild(circle);
    }
    
    addRect(x, y, width, height, shapeColor) {
        const rect = document.createElementNS('http://www.w3.org/2000/svg','rect');
        rect.setAttribute('x', x);
        rect.setAttribute('y', y);
        rect.setAttribute('width', width);
        rect.setAttribute('height', height);
        rect.setAttribute('fill', shapeColor);
        this.svgElement.appendChild(rect);
    }

    createTriangleSVG(width, height, color, x, y) {
        const triangle = document.createElementNS("http://www.w3.org/2000/svg", "polygon");
        triangle.setAttribute("width", width);
        triangle.setAttribute("height", height);
        const halfWidth = width / 2;
        const points = `${x},${y} ${x + width},${y} ${x + halfWidth},${y + height}`;
        triangle.setAttribute("points", points);
        triangle.setAttribute("fill", shapeColor);
        this.svgElement.appendChild(triangle);
    }
}