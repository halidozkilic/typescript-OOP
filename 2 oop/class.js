/* class Bus implements Vehicle {

    currentLocation: Point;
    travelTo(point:Point):void{
        console.log(`otobüs : ${point.x} den ${point.y}'ye gidiyor. ` )
    }

} */
var Taxi = /** @class */ (function () {
    /*   private color:string;
       private location: Point;
   
   
       constructor(location:Point,color?:string)
       {
           this.location=location;
           this.color=color;
       }  */
    //BU UZUN  YOLU KISASINI YAPACAĞIZ AŞAĞIDA:
    function Taxi(location, color) {
        this.location = location;
        this.color = color;
    }
    Taxi.prototype.travelTo = function (point) {
        console.log("taxi : " + this.location.x + " den " + this.location.y + "'ye gidiyor. ");
    };
    Taxi.prototype.getLocation = function () {
        return this.location;
    };
    Taxi.prototype.setLocation = function (value) {
        if (value.x > 0 && value.y > 0) {
            this.location = value;
        }
        else
            throw Error('negatif deger olamaz');
    };
    return Taxi;
}());
var taxi1 = new Taxi({ x: 0, y: 0 }); //=> constructor olduğu için bustaki gibi uğraşmıyoruz.
var taxi2 = new Taxi({ x: 5, y: 5 }, "sariTerör");
console.log(taxi2.getLocation());
taxi2.setLocation({ x: 4, y: 5 });
console.log(taxi2.getLocation());
//ACCESS MODIFIER !
//içerideki bilgilere rahatça ulaşabilir olmamalıyız.
