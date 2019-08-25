
import {Vehicle} from './vehicle';
import { Point } from './Point';

export class Taxi implements Vehicle
{
 /* private color:string;
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