var elems = {
    //length ინახავს სიის ზომას
    length: 0,
    //ფუნქცია იყენებს პროტოტიბს ჯს-ში არსებული
    //მასივის ობიექტის რომელსაც call მეთოდის
    //საშუალებით ავალდებულებს შესრულდეს
    //ამ ობიექტისთვის, ანუ ეს ობიექტი გახდეს
    //მისი კონტექსტი და დაამატოს გადაცემული
    //ელემენტის მიმთითებელი მის სიაში თითქოს
    //ეს იყოს მასივი. ასევე ამ ობიექტის ზომის
    //პარამეტრი ფუნქციას გონია მასივის და ყოველი
    //ელემენტის დამეტების დროს ის მას 1-ით ზრდის.
    add: function (elem) {
        Array.prototype.push.call(this, elem);
    },
    gather: function (name) {
        this.add(document.getElementsByTagName(name));
    }

}