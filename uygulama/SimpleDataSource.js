"use strict";
exports.__esModule = true;
var Product_1 = require("./Product");
var SimpleDataSource = /** @class */ (function () {
    function SimpleDataSource() {
        this.products = new Array(new Product_1.Product(1, "samsung", "telefon", 1000), new Product_1.Product(2, "sony", "telefon", 3000), new Product_1.Product(3, "iphone", "telefon", 4000), new Product_1.Product(4, "huawei", "telefon", 2200));
    }
    SimpleDataSource.prototype.getProducts = function () {
        return this.products;
    };
    return SimpleDataSource;
}());
exports.SimpleDataSource = SimpleDataSource;
