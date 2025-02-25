class Rectangle {
    constructor(width, height) {
      this.width = width;
      this.height = height;
    }
    calculateArea() {
      return this.width * this.height;
    }
    calculatePerimeter() {
      return 2 * (this.width + this.height);
    }
  }
  
  const myRectangle = new Rectangle(5, 10);
  const area = myRectangle.calculateArea();
  const perimeter = myRectangle.calculatePerimeter();
  
  console.log(`Площадь: ${area}`); 
  console.log(`Периметр: ${perimeter}`); 
  