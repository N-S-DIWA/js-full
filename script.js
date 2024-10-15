// Events in javascript example .

let btn1 = document.querySelector("#btn1");
let btn2 = document.querySelector("#btn2");
let box = document.querySelector("#box");

// btn1.onclick = (evt) =>{
//     console.log("btn1 is clicked");
//     alert("Button is a single click button");
//     console.log(evt);
//     console.log(evt.type);
//     console.log(evt.clientX,evt.clientY);
// } 

// btn2.ondblclick = (e) =>{
//     console.log("btn2 is clicked");
//     alert("Button is a double click button");
//     console.log(e);
//     console.log(e.type);
//     console.log(e.clientX,e.clientY);
// }

// box.onmouseover = (event) =>{
//     console.log("inside the div");
//     alert("inside div");
//     console.log(event);
//     console.log(event.type);
//     console.log(event.clientX,event.clientY);
// }

// Event Listeners.

// node.addEventListener(event,callback)
                        // callback -> handler / function.
//node.removeEventListener(event,callback)

btn1.addEventListener("click", () =>{
    console.log("buttton-1 clicked");
})
btn1.addEventListener("click", () =>{
    console.log("single click.");
})

btn2.addEventListener("dblclick",()=>{
    console.log("button-2 clicked");
})
btn2.addEventListener("dblclick",()=>{
    console.log("double click");
})