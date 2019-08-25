let a;

a=5;
a='a';
a=true;

console.log(a); //problem yok 

let x=5;

// x="trtrt" dersek problem olur tip esnekliği js de var ama olmasa daha iyi


//-- TÜRLER---  belki bu dilin bu kadar güçlü olmasındaki sebep aşağıda.

let b: string='a';
let c: boolean;
c=false;

let d: any; //tipi belirsiz.

let e: number[]=[1,2,3];

let f: Array<string>=["2","a","3"];

let g: any[]=[1,2,"h",true];

const krediPayment=0;
const havelePayment=1;
const eftPayment=2;

/* enum Payment{kredi,havele, eft}; */

enum Payment{kredi=0,havele=1, eft=2};

let kredi=Payment.kredi;
let havele=Payment.havele;
let eft=Payment.eft;


