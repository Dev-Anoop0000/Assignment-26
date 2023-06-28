 let usdPrice = {
     item1: 20,
     item2: 45,
     item3: 86,
     item4: 50,
     item5: 80,
     item6: 90
 };


 let rupeePrice = {};


 function exchange(usdPrice) {
     Object.entries(usdPrice).forEach(([key, value]) => {
         //// Assigning value in other object
         rupeePrice[key] = value * 80;
     });
 };
 exchange(usdPrice);

 console.log("Product Price with USD :=> ", usdPrice);
 console.log("Product Price with INR :=> ", rupeePrice);