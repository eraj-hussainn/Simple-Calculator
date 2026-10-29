// const screen = document.getElementById("screen");

// function appendValue(value){

//     screen.value += value;

// }

// function clearScreen(){

//     screen.value = "";

// }

// function deleteLast(){

//     screen.value = screen.value.slice(0,-1);

// }

// function calculate(){

//     if(screen.value==="") return;

//     try{

//         screen.value = eval(screen.value);

//     }

//     catch{

//         screen.value = "Error";

//         setTimeout(()=>{

//             screen.value="";

//         },1000);

//     }

// }

// // Keyboard Support

// document.addEventListener("keydown",(e)=>{

//     const key=e.key;

//     if((key>='0'&&key<='9')||
//        key==='+'||
//        key==='-'||
//        key==='*'||
//        key==='/'||
//        key==='.'||
//        key==='%'){

//         appendValue(key);

//     }

//     else if(key==="Enter"){

//         calculate();

//     }

//     else if(key==="Backspace"){

//         deleteLast();

//     }

//     else if(key==="Escape"){

//         clearScreen();

//     }

// });