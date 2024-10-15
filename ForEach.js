 // FOR-EACH IS A CALLBACK FUNCTION.
 // DIFFERENT CALL BACK FUNCTION PARAMETERS
 // 1. VALUE ->item.
 // 2. INDEX ->position.
 // 3.Array itself.(prints the array)
 // FOR-EACH WILL ALWAYS BE USED FOR ARRAYS AND CANNOT BE USED FOR STRINGS.
 //FOR-EACH IS A HIGHER ORDER FUNCTION/METHOD I.E IT TAKES OTHER FUNCTIONS AS PARAMETERS OR RETURNS THE OTHER FUNCTION.
let arr = ["pune","bengaluru","mumbai","chennai"];

arr.forEach(function values(val,idx,arr){
    console.log(val.toUpperCase(),";","Index value is:",idx,";",arr);
})
