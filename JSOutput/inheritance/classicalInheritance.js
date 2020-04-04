class Shoe {
    constructor(size, material, color) {
        this.size = size;
        this.material = material;
        this.color = color;
    }

    changeColor(color) {
        this.color = color;
    }
}

class Boots extends Shoe {
    constructor(size, material, color, length) {
        super(size, material, color);
        this.length = length;
    }

    changeLength(length) {
        this.length = length;
    }
}

let shoe = new Shoe(8, 'canvas', 'white');

console.log('Shoe object ->', shoe);
shoe.changeColor('red');
console.log('Changed color ->', shoe);

let boot = new Boots(8, 'leather', 'brown', 20);
console.log('Boot Object ->', boot);
boot.changeColor('black');
boot.changeLength(15);
console.log('Changes color & length ->', boot);