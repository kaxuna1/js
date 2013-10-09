var k={
    
getElementById : function getElementById(id){
    if(!getElementById.cache)this.cache={};
    return this.cache[id]=this.cache[id]||
        document.getElementById(id);
}
}