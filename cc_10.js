// Task 1 - Created Product Class

class Product {
    constructor(name, id, price, stock) {
      this.name = name;
      this.id = id;
      this.price = price;
      this.stock = stock;
    }
  
    getDetails() {
      return `Product: ${this.name}, ID: ${this.id}, Price: $${this.price}, Stock: ${this.stock}`;
    }
  
    updateStock(quantity) {
      this.stock -= quantity;
    }
  }
  
  // Testing Task 1
  const prod1 = new Product("Laptop", 101, 1200, 10);
  console.log(prod1.getDetails()); 
  // Expected output: "Product: Laptop, ID: 101, Price: $1200, Stock: 10"
  
  prod1.updateStock(3);
  console.log(prod1.getDetails()); 
  // Expected output: "Product: Laptop, ID: 101, Price: $1200, Stock: 7"