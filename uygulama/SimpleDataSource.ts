import { Product } from "./Product";

export class SimpleDataSource {

    private products:Array<Product>;

    constructor(){
        this.products=new Array<Product>(
            new Product(1,"samsung","telefon",1000),
            new Product(2,"sony","telefon",3000),
            new Product(3,"iphone","telefon",4000),
            new Product(4,"huawei","telefon",2200),
        );
    }

    getProducts() :Product[] {
        return this.products;
    }
}