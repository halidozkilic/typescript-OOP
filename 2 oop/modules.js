"use strict";
exports.__esModule = true;
var taxi_1 = require("./taxi");
var taxi1 = new taxi_1.Taxi({ x: 0, y: 0 }); //=> constructor olduğu için bustaki gibi uğraşmıyoruz.
var taxi2 = new taxi_1.Taxi({ x: 5, y: 5 }, "sariTerör");
console.log(taxi2.getLocation());
taxi2.setLocation({ x: 4, y: 5 });
console.log(taxi2.getLocation());
//ACCESS MODIFIER !
//içerideki bilgilere rahatça ulaşabilir olmamalıyız.
