"use strict";
exports.__esModule = true;
var Taxi = /** @class */ (function () {
    /* private color:string;
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
exports.Taxi = Taxi;
