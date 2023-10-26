import { Shape } from "./shape.js";

export class Rectangle extends Shape {
    constructor(width, height) {
        super(width, height)
    }
    area() {
        return this.width * this.height;
    }
    perimeter() {
        return 2 * (this.width + this.height);
    }
}