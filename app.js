let boxes=document.querySelectorAll(".box");
let resetBtn=document.querySelector(".reset-btn");
let newGame =document.querySelector(".newGame");
let winner=document.querySelector(".mssg");
let turnX=true;
let count=0;
const winPatterns =[
    [0,1,2],
    [0,3,6],
    [0,4,8],
    [1,4,7],
    [2,5,8],
    [2,4,6],
    [3,4,5],
    [6,7,8]
];
const boxDisable=()=>{
    for (let box of boxes){
        box.disabled=true;
    }
}
const boxEnable=()=>{
    for (let box of boxes){
        box.disabled=false;
        box.innerText="";
        turnX=true;
    }
}
boxes.forEach((box)=>{
    box.addEventListener("click",()=>{
        if (turnX){
            box.innerText="X";
            turnX=false;
            console.log("Value Inserted");
            count++;
        }else{
            box.innerText="O";
            turnX=true;
            console.log("Value Inserted");
            count++;
        }
        box.disabled=true;
        checkWinner();
        checkDraw();
    });
})

checkWinner=()=>{
    for (let pattern of winPatterns){
        if(boxes[pattern[0]].innerText!=""&&boxes[pattern[1]].innerText!=""&&boxes[pattern[2]].innerText!=""){
            if(boxes[pattern[0]].innerText===boxes[pattern[1]].innerText && boxes[pattern[1]].innerText===boxes[pattern[2]].innerText){
                boxDisable();
                console.log("Winner");
                if (boxes[pattern[0]].innerText=="X"){
                    winner.innerText="Player 1 is Winner!";
                }else{
                    winner.innerText="Player 2 is Winner!";
                }
            }
        }
    }
}
checkDraw =()=>{
    if (count==9 && winner.innerText==""){
        winner.innerText="Draw!!";
        console.log("9 clicks hitted")
        
    }
} 
resetBtn.addEventListener("click",()=>{
    boxEnable();
    winner.innerText="";
    console.log("reset");
    count=0;
})
newGame.addEventListener("click",()=>{
    boxEnable();
    winner.innerText="";
    console.log("New Game");
    count=0;
})