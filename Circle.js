// khai bao lop
class Circle {
    radius; color;

    constructor(radius, color) {
        this.radius = radius;
        this.color = color;
    }

    getRadius(){
        return this.radius;
    }
    getArea(){
        let area = this.radius*this.radius*Math.PI;
        return area;
    }
}
