/* პარაგრაფი 4 ფუნქციების დაუფლება*/
//იქმნება ანონიმური ფუნქციები სხვადასხვა გზებით
window.onload = function () {
    alert("გამარჯობა");
}
var ninja1 = {
    ss: function () {
        alert("im ninja1");
    }
}
ninja1.ss();

setTimeout(function () {
    alert("timeout");
}, 1000);
/*  ალგორითმი პალინდრომეს ტესტზე
    იკითხება თუ არა სიტყვა ორივე
    მხრიდან ერთნაერად*/
function isPalindrome(text) {
    if (text.length <= 1) return true;
    if (text.charAt(0) != text.charAt(text.length - 1)) return false;
    else return isPalindrome(text.substr(1, text.length - 2));
}
/* პალინდრომეს ტესტი დასასრული */

//chirp იძახებს თავის თავს და იმდენ სთრინგს ამატებს რა რიცხვსაც გადავცემთ


function chirp(n,s)
{
    return n>1 ? chirp(n-1)+s:s;
}


//chirp end
//decima to binnary
var decToBin = (function f(n, s)
{
    return((s = (n % 2) + s) && (n == 0)) ? s : f(Math.floor(n / 2), s);
});
//decima to binnary end

//inline function

var kaxa=function kk(){
    alert("kaxa");
    //tavisi tavis gamodzaxeba Sheudzlia rekursiulad
    //saxelit romelic mienicha funqcias
    //magram is cvdomadia mxolod function-is tanshi
    kk();
}
//inline functon end
//
function chirpCallee(n,s)
{
    return n>1 ? arguments.callee(n-1)+s:s;
}
chirpCallee(5,"kak");


























