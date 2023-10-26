export class Shape {
    constructor(width, height) {
        this.width = width;
        this.height = height;
    }
    area() { } 
    perimeter() { } 
    print() {
        console.log(` area => ${this.area()} and  perimeter => ${this.perimeter()}`)
    }
}