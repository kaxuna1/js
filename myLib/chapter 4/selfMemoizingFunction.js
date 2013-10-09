function isPrime(value) {
    //es fuqcia inaxavs cina valuet gadacemul
    //argumentebze migebul pasuxebs
    //answers object parametrshi
    if (!isPrime.answers) isPrime.answers = {};
    //amocmebs arsebobs tu ara ukve aseti chanaceri
    if (isPrime.answers[value] !== null) {
        //arsebobis shemtxvevashi ukan abrunebs
        //ukve generirebul pasuxs
        //cinaagmdeg shemtxvevashi //icyebs gamotvlas
        return isPrime.answers[value];
    }
    var prime = value != 1;
    for(var i=2;i<value;i++){
        if(value%i==0){
            prime=false;
            break;
        }
    }
return isPrime.answers[value]=prime;
}