let str = "college";
let count = 0;
function repeat(str)
{
    console.log("string is:",str);
    for(i of str)
    {
        console.log("i:",i);
        count++;
    }
}
console.log("letter occurence in a string is shown below");

repeat(str);