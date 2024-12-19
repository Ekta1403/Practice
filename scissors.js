let userScore =0;
let compScore=0;

const choices = document.querySelectorAll(".choice");
const msg =document.querySelector("#msg");

const userScorePara= document.querySelector("#user-score");
const compScorePara= document.querySelector("#comp-score");

const genComputerChoice =() =>{
    const options = ["rock","paper","scissors"];
    const ranIdx = Math.floor(Math.random()*3);
    return options[ranIdx];
}

const drawGame =() => {
   
    msg.innerText ="Game was draw. play again..!";
    msg.style.backgroundColor ="orange";
}

const showWinner = (userWin, userChoice, compChoice) =>{
    if(userWin){
        
        userScore++;
        userScorePara.innerText = userScore;
        msg.innerText =`You Win..!  Your ${userChoice} beats ${compChoice} `;
        msg.style.backgroundColor ="green";
    }else{
        
        compScore++;
        compScorePara.innerText = compScore;
        msg.innerText =`You  Lose..! ${compChoice} beats  your ${userChoice} `;
        msg.style.backgroundColor ="red";
    }
}

const playGame = (userChoice) =>{
    console.log("User Choice = ", userChoice);
    //Generate computer choice -> modular
    const compChoice =genComputerChoice ();
    console.log("Computer Choice = ", compChoice);

    if(userChoice === compChoice){
        //Draw game
        drawGame();
    }else{
    let userWin =true;
    if(userChoice ==="rock"){
        //scissor, paper
        userWin = compChoice === "paper" ? false : true;
    }else if(userChoice === "paper"){
        //rock, scissors
        userWin = compChoice === "scissors" ? false : true;
 
    }else{
        //rock, paper
        userWin = compChoice === "rock" ? false : true;
    }

    showWinner(userWin, userChoice, compChoice);
    
}
};


choices.forEach ((choice) =>{
    choice.addEventListener("click",() => {
        const userChoice = choice.getAttribute("id");
       
        playGame(userChoice);
    });
});