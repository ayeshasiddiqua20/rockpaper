let userscore=0;
let compscore=0;

let msg=document.querySelector("#msg");
const userscorepara=document.querySelector("#user");
const compscorepara=document.querySelector("#computer");

const choices=document.querySelectorAll(".choice");
choices.forEach((choice)=>{
      choice.addEventListener("click",()=>{
        const userchoice=choice.getAttribute("id");
            playGame(userchoice);
      });
});

const genratecompchoice = () =>{
    const options = ["rock","paper","scissor"];
    const randomchoice=Math.floor(Math.random()*3);
    return options[randomchoice];
}

const drawGame=()=>{
    console.log("Game was draw");
    msg.innerText="Game was draw";
    msg.style.backgroundColor=" #081b31";
}

const showwinner=(userwins,userchoice,compchoice)=>{
    if(userwins){
        userscore++;
        userscorepara.innerText=userscore;
        msg.innerText="You Win!";
        msg.style.backgroundColor="green";
    }else{
        compscore++;
        compscorepara.innerText=compscore;
        msg.innerText="You lose.";
        msg.style.backgroundColor="red";
    }
}

const playGame=(userchoice)=>{
    console.log("user choice=",userchoice);
    const compchoice=genratecompchoice();
    console.log("computer choice=",compchoice);

    if(userchoice===compchoice){
        drawGame();
    }else{
        let userwins=true;
        if(userchoice==="rock"){
            userwins=compchoice==="paper"?false:true;
        }else if(userchoice==="paper"){
            userwins=compchoice==="scissor"?false:true;
        }else{
            userwins=compchoice==="rock"?false:true;
        }
        showwinner(userwins);

    }

}