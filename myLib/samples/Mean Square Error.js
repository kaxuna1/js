/*Complete the function that

accepts two arrays of equal length
compares the value each member in one array to the corresponding member in the other
squares the absolute value difference between those two values
and returns the average of those squared absolute value difference between each member pair.*/
var solution = function(firstArray, secondArray) {
    var mas=[];
  for(var i=0;i<firstArray.length;i++){
      var s=firstArray[i]-secondArray[i];
      mas.push(s*s);
  }
    return average(mas);
    
}
function average(mas){
    var val=0;
    for(var i=0;i<mas.length;i++){
        val+=mas[i];
    }
    return val/mas.length;
}


solution([1,2,3], [4,5,6]); // should === 9 ((9 + 9 + 9) / 3)
solution([10, 20, 10, 2], [10, 25, 5, -2]); // should === 16.5 ((0 + 25 + 25 + 16) / 4)
solution([-1,0], [0,-1]); // should === 1 ((1 + 1) / 2)