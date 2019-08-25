function getAverage(a:number,b:number,c?):string {
    const result=(a+b+c)/3;
   return "result : " + result;

}

//typeScricpt in en önemli özelliği bu geliştirme anında 
//hata kontrolü sağlanıyor olması gerçekten çok önemli

//getAverage("as",1,2);

getAverage(12,2,3);

getAverage(1,2);   // ? c yi optional yapabiliriz bu sayede


//-- baska bir örnek : 


/* function  tryout(...a:number[]){
    let total=0;
    let count=0;

    for(let i=0;i<a.length;i++)
    {
        total+=a[i];
        count++;
    }

    const result =total/count;

    return result;

}  */



const  tryout =(...a:number[]) =>{
    let total=0;
    let count=0;

    for(let i=0;i<a.length;i++)
    {
        total+=a[i];
        count++;
    }

    const result =total/count;

    return result;

} 

tryout(12,2,2,3);