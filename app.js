$('.squareBtn').click(() => {
    let side = $('.sqInput').val();
    new Square(side);
    $('.sqInput').val('');
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
    // remove() {
    //     this.div.click();
    // }
    // describe() {
    //     this.div.dblclick();
    // }

};

class Square extends Shape {
    constructor(side) {
        super(side, side);
        this.div.attr('id', 'square');
    }
};

class Rect extends Shape {
    constructor(height, width) {
        super(height, width);
        this.div.attr('id', 'rect');
    }
}

class Circle extends Shape {
    constructor (radius) {
        super(2 * radius, 2 * radius);
        this.div.attr('id', 'circle');
    }
}

class Triangle extends Shape {
    constructor (height) {
        super(height, height);
        this.div.attr('id', 'tri');
        this.div.css({
            'border-right-width': `${this.height}px`,
            'border-bottom-width': `${this.height}px`,
            'border-right-style': 'solid',
            'border-bottom-style': 'solid',
            'border-color': 'yellow'
        })
        console.log(this.div.css);
    }
}


