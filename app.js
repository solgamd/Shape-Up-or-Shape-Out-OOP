$('.squareBtn').click(() => {
    let side = $('.sqInput').val();
    new Square(side);
   // $('.sqInput').val('');
});

$('.rectBtn').click(() => {
    let height = $('.rectInputH').val();
    let width = $('.rectInputW').val()
    new Rect(height, width);
  //  $('.rectInputH').val('');
  //  $('.rectInputW').val('');
});

$('.circleBtn').click(() => {
    let radius = $('.circleInput').val();
    new Circle(2 * radius, 2 * radius);
   // $('.circleInput').val('');
});

$('.triBtn').click(() => {
    let height = $('.triInput').val();
    new Triangle(height, height);
   // $('.triInput').val('');
});

const shapeSpot = (value) => Math.floor(Math.random() * (600 - value));

class Shape {
    constructor(height, width) {
        this.height = height;
        this.width = width;
        this.div = $('<div class="shape"></div>');
        this.div.css({
            height: this.height,
            width: this.width,
        });
        this.draw();
        this.remove();
    }
    draw() {
        let newX = shapeSpot(this.width);
        let newY = shapeSpot(this.height);
        this.div.css({
            top: newY,
            left: newX,
        })
        $('#canvas').append(this.div);
    }
    remove() {
        this.div.dblclick(() => {
            this.div.remove();
        });
    }
    

};

class Square extends Shape {
    constructor(side) {
        super(side, side);
        this.div.attr('id', 'square');
        this.describeSq();
    }

    describeSq() {
        this.div.click(() => {
        $('#descName').val('square');
        $('#descWidth').val(this.width + ' px');
        $('#descHeight').val(this.height + ' px');
        $('#descRadius').val('It\'s a square, silly!');
        $('#descArea').val(this.height * 2 + ' px');
        $('#descPeri').val(this.height * 4 + ' px');
        });
    }
};


class Rect extends Shape {
    constructor(height, width) {
        super(height, width);
        this.div.attr('id', 'rect');
        this.describeRect();
    }
    describeRect() {
        this.div.click(() => {
        $('#descName').val('rectangle');
        $('#descWidth').val(`${this.width} px`);
        $('#descHeight').val(`${this.height} px`);
        $('#descRadius').val('It\'s a rectangle, silly!');
        $('#descArea').val(this.height * this.width + ' px');
        $('#descPeri').val((this.height * this.width) * 2 + ' px');
        });
    }
}

class Circle extends Shape {
    constructor (radius) {
        super(2 * radius, 2 * radius);
        this.radius = radius;                  
        this.div.attr('id', 'circle');
        this.describeCircle();

    }
    describeCircle() {
        this.div.click(() => {
        let radiusX = (this.height / 4);
        $('#descName').val('circle');
        $('#descWidth').val(this.width / 2 + ' px');
        $('#descHeight').val(this.height / 2 + ' px');
        $('#descRadius').val(this.height / 4 + ' px');
        $('#descArea').val(Math.PI * Math.pow(radiusX, 2) + ' px'); 
        $('#descPeri').val((radiusX * 2 * Math.PI) + ' px');
        });
    }
}
// When you make a new triangle you were passing in 2 * the input value
// Then you super functioned up 2 * the constructed radius which was already multiplied by 2.
// So your height / 2 was still double your original input value
class Triangle extends Shape {
    constructor (height) {
        super(height, height);
        this.div.css({
            height: 0,
            width: 0,
            borderBottom: `${this.height}px solid yellow`,
            borderRight: `${this.height}px solid transparent`,
        })
        this.describeTri();
    }
    describeTri() {
        this.div.click(() => {
        $('#descName').val('triangle');
        $('#descWidth').val(`${this.height} px`);
        $('#descHeight').val(`${this.height} px`);
        $('#descRadius').val('It\'s a triangle, silly!');
        $('#descArea').val(this.height * 0.5 * this.height + ' px');
        $('#descPeri').val((2 * this.height + Math.sqrt(2) * this.height) + ' px');
        });
    }
}


