//function-ebis shesanaxi cache;
var store={
    //store object-s aqvs 2 data parametri
    //nextId da cache object-i
    //nextId inaxvs shendegi funqciistvis 
    //misanichebel id mnishvnelobas
    nextId:1,
    //cache obieqti sheinaxavs damatebuli
    //funqciebis koleqcias tavis parametrebat
    //romlebis saxelebi iqneba nextIdti minichebuli
    //funqciis identifikatorebi
    cache:{},
    //add function-i amatebs argumentad
    //gadacemul function-s caches parametrebshi
    add: function(fn){
        //mocmdeba gadacemul function-s aqvs
        //tu ara id parametri
        if(!fn.id){
            //ar arsebobis shemtxvevashi mas
            //enicheba id parametri
            fn.id=store.nextId++;//nextId izrdeba ertit
                                 //shemdegi function-istvis
                    //store obieqtis chache parametr
                    //obieqtshi sheinaxeba parametrad
                    //gadacemuli function-i romlis
                    //parametris saxeli iqneba misi ID
            return!!(store.cache[fn.id]=fn);
            alert("added");
        }
        else return "kaxa";
    }
    
};
function ninja(){}
store.add(ninja);
//ase xdeba cachidan function-is gamodzaxeba!
store.cache[1];

