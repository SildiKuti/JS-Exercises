class Square {
  constructor(side) {
  this.side = side;
  }
  }
  
  class Rectangle {
  constructor(width, height) {
  this.width = width;
  this.height = height;
  }
  }
  
  class Circle {
  constructor(radius) {
  this.radius = radius;
  }
  }
  
  class AreaCalculator {
  static calculate(o) {
  let surface;
  if(o instanceof Square) {
      surface = o.side * o.side;
  } 
  else if(o instanceof Rectangle) {
      surface = o.width * o.width;
  }
  else if(o instanceof Circle) {
      surface = o.radius * o.radius * 2.13;
  }
  return surface;
  }
  }
  
  const square = new Square(4);
  const rectangle = new Rectangle(4, 2);
  const circle = new Circle(5);
  
  console.log(AreaCalculator.calculate(square));
  console.log(AreaCalculator.calculate(rectangle));
  console.log(AreaCalculator.calculate(circle));