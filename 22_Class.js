// Example of Class
var Person2 = /** @class */ (function () {
    function Person2(name, age) {
        this.name = name;
        this.age = age;
    }
    Person2.prototype.greet = function () {
        console.log("Hallo, mein Name ist ".concat(this.name));
    };
    return Person2;
}());
var person11 = new Person2("Anna", 30);
person11.greet(); // → "Hallo, mein Name ist Anna"
// 3. Define Data Type to Class Property and Functions
var Car = /** @class */ (function () {
    function Car(brand, speed) {
        this.brand = brand;
        this.speed = speed;
    }
    Car.prototype.accelerate = function (value) {
        this.speed += value;
    };
    return Car;
}());
// Example of Class
var Product = /** @class */ (function () {
    function Product(productName, productPrice, productId, isInCart) {
        if (isInCart === void 0) { isInCart = false; }
        this.productName = productName;
        this.productPrice = productPrice;
        this.productId = productId;
        this.isInCart = isInCart;
    }
    Product.prototype.addToCart = function () {
        if (!this.isInCart) {
            this.isInCart = true;
            console.log("".concat(this.productName, " wurde dem Warenkorb hinzugef\u00FCgt."));
        }
        else {
            console.log("".concat(this.productName, " ist bereits im Warenkorb."));
        }
    };
    Product.prototype.buyProduct = function () {
        if (!this.isInCart) {
            console.log("".concat(this.productName, " muss zuerst in den Warenkorb gelegt werden."));
            return;
        }
        console.log("Produkt ".concat(this.productName, " gekauft f\u00FCr ").concat(this.productPrice, " \u20AC!"));
    };
    return Product;
}());
var p = new Product("Bluetooth-Kopfhörer", 49.99, 301);
p.buyProduct(); // muss zuerst in den Warenkorb
p.addToCart(); // wurde hinzugefügt
p.buyProduct(); // jetzt gekauft
// -------------------------------------------
console.log("+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++");
