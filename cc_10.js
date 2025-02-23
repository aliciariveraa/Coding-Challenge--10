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



// Task 2 - Created Order Class

class Order {
    constructor(orderId, product, quantity) {
      this.orderId = orderId;
      this.product = product;
      this.quantity = quantity;
      // Reduce stock when order is placed
      this.product.updateStock(quantity);
    }
  
    getOrderDetails() {
      const totalPrice = this.product.price * this.quantity;
      return `Order ID: ${this.orderId}, Product: ${this.product.name}, Quantity: ${this.quantity}, Total Price: $${totalPrice}`;
    }
  }
  
  // Testing the Order class
  const order1 = new Order(501, prod1, 2);
  console.log(order1.getOrderDetails()); // Expected output: Order ID: 501, Product: Laptop, Quantity: 2, Total Price: $2400
  
  console.log(prod1.getDetails()); // Expected output: Product: Laptop, ID: 101, Price: $1200, Stock: 5 (Stock reduced)
  