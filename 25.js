// SLICE AND SPLICE IN ARRAYS.
// let heroes = ["IronMan","Thor","DrStrange","CaptainAmerica","Hulk","Vision"];
// console.log(heroes);
// console.log(heroes.slice(1,4));

// IN SLICE Starting index is inclusive and ending index is non inclusive.
// SLICE sYNTAX -> slice(start index,end index);

// let foodItems = [ "chocolate","milk","eggs","pizza","burger","sandwitches"];
// let result = foodItems.splice(1,2,"milkshake","poison");
// console.log(foodItems);
// console.log("elements in array that are splicesd are:",result);

//SYNTAX -> splice(startINDEX,no of elements to delete,new elements addition);
// in splice you can add elements irrespective of you need to delete the elements or not and vice-versa.
let arr = [1,2,3,4,5,6];
let res = arr.splice(2,2,101,102);
console.log(arr);
console.log("splice elements:",res);
let r = arr.splice(3);
console.log(arr);