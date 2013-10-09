/*
პარაგრაფი 3 ფუნქციები არიან JS-ის ფუნდამენტი
*/
/* 
forEach ციკლის ნიმუში
*/
function forEach(list, callback) 
{   /* ფუნქციას გადაეცემა callback ფუნქცია 
და მასივი იმ ობიექტების რომელზეც უნდა მოახდინოს
მოქმედება */
    for (var i = 0; i < list.length; i++) {
        callback.call(list[i], i);
    }

}
var a=[{},{},{}];
function k(x){
    this.value=x;
}
forEach(a,k);
function ss(){
    alert(this.value);
}
forEach(a,ss);
/* 
forEach ციკლის ნიმუში დასასრული
*/
/*  callback ის გამოყენების ნიმუში
    ფუნქციას გადაეცემა ფუნქცია არგუმენტად
    და სრულდება იმ ფუნქციაში რომეშიც გადსცეს*/
function somoFunction(callF){
    return callF();
}
/* callback ის გამოყენების ნიმუში*/

/*call ის და apply-ის გამოყენების ნიმუშები*/
function kk(x,y){/*რაღაცა ხდება*/}
var o={/*ობიექტი*/}
kk.apply(o,[1,2]);/* apply ფუნქციას გადაეცემა 
                     არგუმენტებათ ობიექტი რომელიც 
                     გახდება ამ ფუნქციის კონტექსტი*/
/*call ის და apply-ის გამოყენების ნიმუშები*/

]





