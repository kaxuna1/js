function getElement(elem){
    //
    if(!getElement.cache)getElement.cache={}
    return getElement.cache[elem]=getElement.cache[elem]||
        document.getElementsByTagName(elem);
}
