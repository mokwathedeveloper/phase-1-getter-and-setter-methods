// Add your Circle class here
class Circle {
    #radius;
  
    constructor(radius) {
      this.#radius = radius;
    }
  
    // Getter for diameter
    get diameter() {
      return this.#radius * 2;
    }
  
    // Setter for diameter
    set diameter(value) {
      this.#radius = value / 2;
    }
  
    // Getter for circumference
    get circumference() {
      return Math.PI * this.diameter;
    }
  
    // Setter for circumference
    set circumference(value) {
      this.diameter = value / Math.PI;
    }
  
    // Getter for area
    get area() {
      return Math.PI * this.#radius ** 2;
    }
  
    // Setter for area
    set area(value) {
      this.#radius = Math.sqrt(value / Math.PI);
    }
  }
  
  // Example usage:
  const circle = new Circle(5);
  
  console.log(circle.diameter); // Output: 10
  console.log(circle.circumference); // Output: 31.41592653589793
  console.log(circle.area); // Output: 78.53981633974483
  
  // Setting values using setters
  circle.diameter = 12;
  console.log(circle.radius); // Output: 6
  console.log(circle.circumference); // Output: 18.84955592153876
  
  circle.area = 150;
  console.log(circle.radius); // Output: 6.123724356957946
  console.log(circle.circumference); // Output: 19.31471805599453
  