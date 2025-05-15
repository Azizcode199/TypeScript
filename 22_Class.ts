// Example of Class
class Person2 {
  name: string;
  age: number;

  constructor(name: string, age: number) {
    this.name = name;
    this.age = age;
  }

  greet() {
    console.log(`Hallo, mein Name ist ${this.name}`);
  }
}

const person11 = new Person2("Anna", 30);
person11.greet(); // → "Hallo, mein Name ist Anna"


// 3. Define Data Type to Class Property and Functions
class Car {
  brand: string;
  speed: number;

  constructor(brand: string, speed: number) {
    this.brand = brand;
    this.speed = speed;
  }

  accelerate(value: number): void {
    this.speed += value;
  }
}


// Example of Class
class Product {
  productName: string;
  productPrice: number;
  productId: number;
  isInCart: boolean;

  constructor(productName: string, productPrice: number, productId: number, isInCart: boolean = false) {
    this.productName = productName;
    this.productPrice = productPrice;
    this.productId = productId;
    this.isInCart = isInCart;
  }

  addToCart(): void {
    if (!this.isInCart) {
      this.isInCart = true;
      console.log(`${this.productName} wurde dem Warenkorb hinzugefügt.`);
    } else {
      console.log(`${this.productName} ist bereits im Warenkorb.`);
    }
  }

  buyProduct(): void {
    if (!this.isInCart) {
      console.log(`${this.productName} muss zuerst in den Warenkorb gelegt werden.`);
      return;
    }
    console.log(`Produkt ${this.productName} gekauft für ${this.productPrice} €!`);
  }
}

const p = new Product("Bluetooth-Kopfhörer", 49.99, 301);

p.buyProduct();  // muss zuerst in den Warenkorb
p.addToCart();   // wurde hinzugefügt
p.buyProduct();  // jetzt gekauft

// -------------------------------------------
console.log("+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++")
