// FOR-LOOP IN ARRAY.

let heroes = ["spider-man","bat-man","super-man","iron-man","thor","captain-america"];

//NORMAL FOR-LOOP USAGE.

// for(let i =0;i<heroes.length;i++)

//     {
//         console.log(heroes[i]);
//     }

// USING FOR-OF LOOP IN ARRAYS.

for(let i of heroes)
{
    console.log(i.toUpperCase());
}