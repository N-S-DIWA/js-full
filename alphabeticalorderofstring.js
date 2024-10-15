// ALPHABETICAL ORDER OF STRING //

let str="MAHESH";
function order(str)
{
    console.log("String is:",str);
    let result = str.split('').sort().join(''); // MAIN CODE.
    console.log(result);
}   
order(str);