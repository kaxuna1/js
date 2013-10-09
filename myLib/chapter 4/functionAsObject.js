var o={};
var fn=function(){};
//orie obieqti arsebobs matgan erterti aris funqcia

o.name="object";
fn.name="kaxa";
//orivestivs shesadzlebelia mivanichot parametri
//saxelit name sadac shevinaxavt mis saxelebs

o.t=function talk(){
    alert(this.name);
};
fn.t=function(){
    alert(this.name);
};
fn.t();
o.t();