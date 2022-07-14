let home_score = document.getElementById("home_score")
let guest_score = document.getElementById("guest_score")
h_score=0
g_score=0

function h_increment1(){
    h_score+=1 
    home_score.innerText = h_score  
}
function h_increment2(){
    h_score+=2
    home_score.innerText = h_score
  }
function h_increment3(){
    h_score+=3
    home_score.innerText = h_score
  }
function g_increment1(){
    g_score+=1 
    guest_score.innerText = g_score
  }
function g_increment2(){
    g_score+=2 
    guest_score.innerText = g_score
  }
function g_increment3(){
    g_score+=3
    guest_score.innerText = g_score
  }

function Reset(){
    g_score=0
    guest_score.innerText = g_score
    h_score=0
    home_score.innerText = h_score  
}