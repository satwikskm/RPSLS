'use strict'


let rock=document.getElementById('rock');
let paper=document.getElementById('paper');
let scissor=document.getElementById('scissor');
let spock=document.getElementById('spock');
let lizard=document.getElementById('lizard');
let choices = ["rock", "paper", "scissor",'spock','lizard'];
let num = Math.floor(Math.random()*5);
let computer_choice = choices[num];
let delayInMilliseconds = 3000;
let input =0
let user_score=0
let computer_score=0

let count=0


let choices_object = {
    'rock' : {
        'rock' : 'draw',
        'scissor' : 'win',
        'paper' : 'lose',
        'spock':'lose',
        'lizard':'win'
    },
    'scissor' : {
        'rock' : 'lose',
        'scissor' : 'draw',
        'paper' : 'win',
        'spock':'lose',
        'lizard':'win'
    },
    'paper' : {
        'rock' : 'win',
        'scissor' : 'lose',
        'paper' : 'draw',
        'spock':'win',
        'lizard':'lose'
    },
    'spock' : {
        'rock' : 'win',
        'scissor' : 'win',
        'paper' : 'lose',
        'spock':'draw',
        'lizard':'lose'
    },
    'lizard' : {
        'rock' : 'draw',
        'scissor' : 'lose',
        'paper' : 'win',
        'spock':'win',
        'lizard':'draw'
    }


}



function checker(input,val){

    let num = Math.floor(Math.random()*5);
    let computer_choice = choices[num];
    document.getElementById("comp").innerHTML = 
    ` Computer chooses <span> ${choices[num].toUpperCase()} </span>`;

    document.getElementById("player").innerHTML = 
    ` You chose <span> ${input.toUpperCase()} </span>`;

    

    
    

    switch(choices_object[input][computer_choice]){
        case 'win':
            document.getElementById('msg').textContent="You Win"
            result(val,num)
            user_score++;
            document.getElementById('ps').textContent=`Player-Score :${user_score}`
            break;
        case 'lose':
            document.getElementById('msg').textContent="Computer Wins"
            result(num,val)
            computer_score++;
            document.getElementById('cs').textContent=`Computer Score :${computer_score}`
            break;
        default:
            document.getElementById('msg').textContent="Its a draw"
            result(num,val)
            break;
    }
    setTimeout(()=>{
        init(num)
        
      }, delayInMilliseconds);
    
    
}

function init(){
    rock.style.background="DodgerBlue";
    paper.style.background="DodgerBlue";
    scissor.style.background="DodgerBlue";
    spock.style.background="DodgerBlue";
    lizard.style.background="DodgerBlue"

    
}

function result(num1,num2){
    // nun1=win num2=loose
    if(num1 === num2){
        // draw call
        if(num1 === 0){
            rock.style.background="white"
        }
        if(num1 === 1){
            paper.style.background="white"
        }
        if(num1 === 2){
            scissor.style.background="white"
            
        }
        if(num1 === 3){
            spock.style.background="white"
            
        }
        if(num1 === 4){
            lizard.style.background="white"
            
        }
        
    }
    else{
        if(num1 === 0){
            rock.style.background="#39ac6d"
        }
        if(num1 === 1){
            paper.style.background="#39ac6d"
        }
        if(num1 === 2){
            scissor.style.background="#39ac6d"
            
        }
        if(num1 === 3){
            spock.style.background="#39ac6d"
            
        }
        if(num1 === 4){
            lizard.style.background="#39ac6d"
            
        }
        if(num2 === 0){
            rock.style.background="#990000"
        }
        if(num2 === 1){
            paper.style.background="#990000"
        }
        if(num2 === 2){
            scissor.style.background="#990000"
            
        }
        if(num2 === 3){
            spock.style.background="#990000"
            
        }
        if(num2 === 4){
            lizard.style.background="#990000"
            
        }

    }
    
    

}



console.log(computer_score,user_score)