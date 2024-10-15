// TEMPLATE LITERAL.
   // WE USE BACK-TICKS(``)
// IN TEMPLATE LITERAL THE NUMBER BECOMES A PART OF THE STRING AND HENCE WONT BE HIGHLIGHTED IN THE OUTPUT.
    //  ${} -> IS CALLED AS PLACEHOLDERS.   
    // INSIDE THE TEMPLATE LITERAL WE CAN ADD EXPRESSIONS ALSO AND GET THE OUTPUT FOR THOSE EXPRESSIONS.
    
   let obj ={
    item:"pen",
    price:10,
   }

   let output = `the price of ${obj.item} is ${obj.price} dollars.`;
   console.log(output);