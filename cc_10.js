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
  


// Task 3 - Created Inventory Class

class Inventory {
    constructor() {
      this.products = [];
    }
  
    addProduct(product) {
      this.products.push(product);
    }
  
    listProducts() {
      this.products.forEach(product => console.log(product.getDetails()));
    }
  }
  
  // Testing the Inventory class
  const inventory = new Inventory();
  inventory.addProduct(prod1);
  inventory.listProducts(); // Expected output: Product: Laptop, ID: 101, Price: $1200, Stock: 5
  


// Task 4: Implementing Order Management

class InventoryWithOrders extends Inventory {
    constructor() {
      super();
      this.orders = [];
    }
  
    placeOrder(orderId, product, quantity) {
      if (product.stock >= quantity) {
        const order = new Order(orderId, product, quantity);
        this.orders.push(order);
      } else {
        console.log(`Not enough stock for product ${product.name}`);
      }
    }
  
    listOrders() {
      this.orders.forEach(order => console.log(order.getOrderDetails()));
    }
  }
  
 // Test Task 4
  inventory.placeOrder(601, prod1, 2);
  inventory.listOrders(); // Expected: Order ID: 601, Product: Laptop, Quantity: 2, Total Price: $2400
  console.log(prod1.getDetails()); // Expected: Product: Laptop, ID: 101, Price: $1200, Stock: 3



// Task 5: Implementing Product Restocking
class InventoryWithRestocking extends InventoryWithOrders {
    restockProduct(productId, quantity) {
      const product = this.products.find(p => p.id === productId);
      if (product) {
        product.stock += quantity;
      } else {
        console.log(`Product with ID ${productId} not found`);
      }
    }
  }
  
  // Test Task 5
  inventory.restockProduct(101, 5);
  console.log(prod1.getDetails()); // Expected: Product: Laptop, ID: 101, Price: $1200, Stock: 8