// Shape - superclass
// x,y: location of shape's bounding rectangle
function Shape(x, y) {
    this.x = x;
    this.y = y;
}

// Superclass method
Shape.prototype.move = function (x, y) {
    this.x += x;
    this.y += y;
}

// Circle - subclass
function Circle(x, y, r) {
    // Call constructor of superclass to initialize superclass-derived members.
    Shape.call(this, x, y);

    // Initialize subclass's own members
    this.r = r;
}

// Circle derives from Shape
Circle.prototype = Object.create(Shape.prototype);
Circle.prototype.constructor = Circle;

// Subclass methods. Add them after Circle.prototype is created with
// Object.create
Circle.prototype.area = function () {
    return this.r * 2 * Math.PI;
}

Circle.prototype = Object.create(Shape.prototype);
Circle.prototype.constructor = Circle;