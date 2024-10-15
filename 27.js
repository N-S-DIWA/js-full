// ARRAY METHODS
//1.MAP METHOD ->SIMILAR TO THAT OF FOR-EACH BUT RETURNS A NEW ARRAY.

//  let arr = [11,12,13,14];

//  let newArr = arr.map((val)=>{
//     return val*val;
//  });

//  console.log("Array is:",arr);
//  console.log("Squared value of elements in arr:",newArr);

//2.Filter-Method.
// Gives a new aray which is filtered.
// let arr = [2,3,4,5,6,7,8,9,18,20,21];

// let evenArr = arr.filter((val)=>{
//     return val%2===0;   // for odd -> return val%2!==0;
// })

// console.log(filter);

//3.Reduce-Method.

// let arr =[1,2,3,4];
// // consider res and curr for better understanding.
// let output = arr.reduce((res,curr)=>{
//     return res*curr;
// });

// console.log(output);

// to find a greater number in array.

let arr = [10,5,9,20,1,40];

let output = arr.reduce((res,curr)=>{
    return res>curr?res:curr;
});

console.log(output);