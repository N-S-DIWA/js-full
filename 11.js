// FOR-IN LOOP.
// USED ON OBJECTS TO RETURN KEY OR/AND VALUE .

// let student =
// {
//     name: "Diwakar N S",
//     age: 20,
//     branch:"cse",
//     isPass:true,
// };

// for(let key in student)
// {
//     console.log("key:",key,",","values:",student[key]);
// }

let mercedesF1={
    name:"MERCEDES-AMG-PETRONAS-F1-TEAM",
    driver_1:"LEWIS_HAMILTON",
    driver_2:"GEORGE_RUSSEL",
    reserveDriver:"KIMI-ANTONELLE",
    urrent_Season_wins:3,
    Wcc:4,
    championships:8,
}

for(let key in mercedesF1)
{
    console.log("key:",key,",","val:",mercedesF1[key]);
}