function truncate(str, limit) {
    var mas=str.split(/(\s(?!$))/g);
    if(mas.length>1){
    var lim=mas[0].length;
    var str=mas[0];
    n=1;
    if(mas[n]!==undefined){
    while(lim+mas[n].length<limit||mas[n]!==" "){
        str+=mas[n];
        lim+=mas[n].length;
        n++;
    }}}
    else{
        str=str.substring(0,limit);
    }
    return str+"...";
};
alert(truncate('This',7));

//ეს კოდი კვეცავს სთრინგს ისე რო უკან აბრუნებს იმ სთრინგს რომლის სიტყვები შეიცავენ
//იმდენ სიტყვას რომელთა ასოების ჯამი არ არის ნაკლები გადაცემულ ლიმიტზე და ყველაზე
//ახლოსაა რაოდენობით ანუ მინიმუმ რამდენი სიტყვაცაა საჭირო რომ ასოების რაოდენობამ
//სთრინგში გადააჭარბოს ლიმიტს. თუ სთრინგი  მოკლე ლიმიტზე ბრუნდება მთლიანად +...
//თუ 1 სიტყვაა რამდენიცაა ლიმიტი სიტყვის იმდენი ასო ბრუნდება უკან