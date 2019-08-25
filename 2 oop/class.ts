interface Point{
    x:number,
    y:number
}


interface Vehicle{

    travelTo(point:Point):void;
}

/* class Bus implements Vehicle {

    currentLocation: Point;
    travelTo(point:Point):void{
        console.log(`otobüs : ${point.x} den ${point.y}'ye gidiyor. ` )
    }

} */

class Taxi implements Vehicle
{


       
 /*   private color:string;
    private location: Point;


    constructor(location:Point,color?:string)
    {
        this.location=location;
        this.color=color;
    }  */
    //BU UZUN  YOLU KISASINI YAPACAĞIZ AŞAĞIDA:

    constructor(private location?:Point, private color?:string )  {  }

    public travelTo(point:Point):void{
        console.log(`taxi : ${this.location.x} den ${this.location.y}'ye gidiyor. ` );

    }

     getLocation (){
        
        return this.location;

    }

    setLocation(value:Point){
        if(value.x>0 && value.y>0)
        {
            this.location=value;
        }
        else
        throw Error('negatif deger olamaz');
    }

}




let taxi1:Taxi= new Taxi({x:0,y:0});  //=> constructor olduğu için bustaki gibi uğraşmıyoruz.

let taxi2=new Taxi({x:5,y:5},"sariTerör");

console.log(taxi2.getLocation());


taxi2.setLocation({x:4,y:5});


console.log(taxi2.getLocation());


//ACCESS MODIFIER !
//içerideki bilgilere rahatça ulaşabilir olmamalıyız.