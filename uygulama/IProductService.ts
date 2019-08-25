import {Product} from './Product';

export interface IProductService{
    getById(id:number):Product; //ürün döndürüyor.
    getProducts():Array<Product>;
    saveProduct(product:Product):void;
    deleteProduct(product:Product):void;
}