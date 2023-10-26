import { Shape } from "./shape.js";

export class Circle extends Shape {
    constructor(radius) {
        super(radius, radius)
        this.radius = radius;
    }
    area() {
        return Math.PI * this.radius *this.radius;
    }
    perimeter() {
        return 2 * Math.PI * this.radius;
    }
}