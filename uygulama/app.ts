import { ProductService } from './ProductService';
import { Product } from './Product';


let _productService = new  ProductService();


let result;

result= _productService.getProducts();

result= _productService.getById(3);

console.log(result);



let p = new Product();
p.name="yenii";
p.category="bilk";
p.price=222;

_productService.saveProduct(p);

result=_productService.getProducts();

//_productService.deleteProduct(result);

console.log(result);