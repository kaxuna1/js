//ცვლადი სიგრძის არგუმენტების სია
//გვაძლევს საშუალებას განუსაზღვრელი რაოდენობის 
//არგუმენტები გადავცეთ ფუქციას და ჯს-ის
//ნაკლი გადატვირთვის არ ქონის მიუხედავათ
//იგივე შედეგი მივიღოთ
var maxmin={
    //უკან აბრუნებს მაქსიმალურ რიცხვს მასივში
    max:function(array){
        return Math.max.apply(Math,array);
    },
    min:function(array){
        return Math.min.apply(Math,array);
    }
};