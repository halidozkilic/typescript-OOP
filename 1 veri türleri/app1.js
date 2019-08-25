var a;
a = 5;
a = 'a';
a = true;
console.log(a); //problem yok 
var x = 5;
// x="trtrt" dersek problem olur tip esnekliği js de var ama olmasa daha iyi
//-- TÜRLER---  belki bu dilin bu kadar güçlü olmasındaki sebep aşağıda.
var b = 'a';
var c;
c = false;
var d; //tipi belirsiz.
var e = [1, 2, 3];
var f = ["2", "a", "3"];
var g = [1, 2, "h", true];
var krediPayment = 0;
var havelePayment = 1;
var eftPayment = 2;
/* enum Payment{kredi,havele, eft}; */
var Payment;
(function (Payment) {
    Payment[Payment["kredi"] = 0] = "kredi";
    Payment[Payment["havele"] = 1] = "havele";
    Payment[Payment["eft"] = 2] = "eft";
})(Payment || (Payment = {}));
;
var kredi = Payment.kredi;
var havele = Payment.havele;
var eft = Payment.eft;
//TÜR DÖNÜŞÜMÜ -------------
var message = "hello world";
var deger = message.length;
deger;
