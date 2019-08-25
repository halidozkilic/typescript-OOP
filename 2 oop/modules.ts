import {Taxi} from './taxi';






let taxi1:Taxi= new Taxi({x:0,y:0});  //=> constructor olduğu için bustaki gibi uğraşmıyoruz.

let taxi2=new Taxi({x:5,y:5},"sariTerör");

console.log(taxi2.getLocation());


taxi2.setLocation({x:4,y:5});


console.log(taxi2.getLocation());


//ACCESS MODIFIER !
//içerideki bilgilere rahatça ulaşabilir olmamalıyız.