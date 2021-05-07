var buttonNum, alert, playAgain, list, dice1, dice0, button1, button2, button3, button4, button5, button6, value1,value2,value3,value4,value5,value6;
buttonNumber = null;

colorRestart();

//dice random num////////////////////
document.querySelector('#color1').addEventListener('click', function(){chosenEffect(1,'color1','blue')})
                                                   
document.querySelector('#color2').addEventListener('click', function(){ chosenEffect(2,'color2','red')})
                                                   
document.querySelector('#color3').addEventListener('click', function(){chosenEffect(3,'color3','pink')})

document.querySelector('#color4').addEventListener('click', function(){chosenEffect(4,'color4','yellow')})

document.querySelector('#color5').addEventListener('click', function(){chosenEffect(5,'color5','white')})

document.querySelector('#color6').addEventListener('click', function(){chosenEffect(6,'color6','green')})







document.querySelector('.button').addEventListener('click', function() {
    if(playAgain){
        colorRestart();
    }
    if(alert){
        document.getElementById('dice1').style.opacity = 1.0;
        document.getElementById('dice0').style.opacity = 1.0;
        
        
        dice1 = Math.floor(Math.random() * 6) + 1;
        dice0 = Math.floor(Math.random() * 6) + 1;
        
    
        var circleColor0 = numToColor(dice1)
        var circleColor1 = numToColor(dice0)
        ////////////////////////////////////
        document.getElementById('dice1').src = 'circle-'+circleColor1 +'.png';
        document.getElementById('dice0').src = 'circle-'+circleColor0 +'.png';
       
        if (buttonNumber == circleColor0 || buttonNumber==circleColor1){
            document.getElementById('roll-button').src = 'winner.png';
            document.getElementById("start").innerHTML = "Play Again";
            alert = false;
            playAgain = true;
        }
        else{
            document.getElementById('roll-button').src = 'started-game.png';
            document.getElementById("start").innerHTML = "TRY AGAIN LOSER!";
            playAgain = true;
            
        }
            
            
        }
    } )






function numToColor(num){
    if (num == 1){
        return 'blue';
    }
    else if (num == 2){  
    return 'red';
    }
    else if (num == 3){
        return 'pink';
    }
    else if (num == 4){
        return 'yellow';
    }
    else if (num == 5){ 
        return 'white';
    }
    else if (num == 6){
        return 'green';
        
    }
}


 function chosenEffect(buttonNum,iD,color) {
    colorRestart();
    document.getElementById(iD).src = color+"-chosen"+".png";
    alert= true;
    buttonNumber = numToColor(buttonNum);
}





function colorRestart(){
    alert = false;
    playAgain = false;
    document.getElementById("start").innerHTML = "Press to roll";
    document.getElementById('roll-button').src = 'start-game.png';
    document.getElementById("dice1").style.opacity = 0.0;
    document.getElementById("dice0").style.opacity = 0.0;
    document.getElementById("color1").src = "blue.png";
    document.getElementById("color2").src = "red.png";
    document.getElementById("color3").src = "pink.png";
    document.getElementById("color4").src = "yellow.png";
    document.getElementById("color5").src = "white.png";
    document.getElementById("color6").src = "green.png";
}


function sleep(milliseconds) {
  const date = Date.now();
  let currentDate = null;
  do {
    currentDate = Date.now();
  } while (currentDate - date < milliseconds);
}

