//შემდეგი ფუნქცია შეაერთებს რამდენიმე
//ობიექტის პარამეტრებს ერთ ბირთვულ ობიექტში
  function merge(root) {
      // icyeba cikli meore gadacemuli argumentidan
      // radgan pirvelshi inda chavamatot yvela danarcheni
      // mas mivmartavt rogorc parametris saxels zemot
      //fuction is literal shi gvaqvs mititebuli
     for (var i = 1; i < arguments.length; i++) {
         //აქ for-in-ი key ცვლადს მიანიჭებს
         //ციკლში შესული ობიექტის ყველა პარამეტრის
         //სახელს თანმიმდევრობით.
         for (var key in arguments[i]) {
             root[key] = arguments[i][key];
         }
     }
      //უკან აბრუნებს გადაცემულ ობიექტს რომელსაც
      //ჩაუტარა მოდიფიცირება.
     return root;
 }
 var merged = merge({
     name: "kaxa"
 }, {
     city: "tbilisi"
 });
 alert(merged.name);