var playing = false;
var score;
var trialsLeft;
var fruits = ['apple','cheery','pineapple','banana'];
var step;
var action;
$(function(){
                                                //click on start reset button
  $("#startReset").click(function(){
                                                //we are playing?
      if(playing == true){
         location.reload();                     //reload
         }
      else{
                                                //we are not playing
          playing = true;                       //start Game
          score = 0;                             //set score to 0
          $("#scoreValue").html(score);
          
          //Show trials left
          $("#trialsLeft").show();
          trialsLeft = 3;
          addHearts();
          //hide game over
          $("#gameOver").hide();
          
                                                //Change button to rest text
          $("#startReset").html("Reset Game");
                                                //Start sendeing Fruits
          startAction();
      }
  }); 
});

    //are we playing?
        //yes
            //reload page
        //no
           //Show trials left box 
        //change button text tp 'reset game
        //1.create random fruit
        //define a random step for new fruit
        //2.move fruit down every 30s
            //is fruit too low?
            //no -> repeat number 2
            //yes?-> Trials left?
                //yes-> repeat number 1
                //no? show game over and change start button to start game

//Slice fruit
//PLay sounde
//explode the fruit
        function addHearts(){
            $("#trialsLeft").empty();
              for(var i=0;i< trialsLeft; i++){
              $("#trialsLeft").append(' <img src="images/heart.jpg" class="life">');
          }
        }
        //Send Fruits
function startAction(){ 
 $("#fruit1").show();
    chooseFruit();
    $("#fruit1").css({'left' : Math.round(550*Math.random()),'top': -50});
}
//generte a random speed
step=1+ Math.round(5*Math.random());//Change step
//Move the fruit down every 10 ms
action = setInterval(function(){
    $("#fruit1").css('top',$('#fruit1').position().top + step);
    if($('#fruit1').position().top > $('#fruitContainer').height()){
        //CHeck trials left
        if(trialsLeft > 1 ){
                                
                     $("#fruit1").show();
                        chooseFruit();
                        $("#fruit1").css({'left' : Math.round(550*Math.random()),'top': -50});
                    
                    //generte a random speed
                    step=1+ Math.round(5*Math.random());//Change step
                    //Move the fruit down every 10 ms
            //reduce a life
            trialsLeft --;
           //Add hearts
        addHearts();
        }else{                                   
                                   //game over
                                    playing = false;
                                    $("#startReset").html("Start Game");
                                    $("#gameOver").show();
                                    $("#gameOver").html('<p>Game Over!</p><p>Your score is ' + score + '</p>');
                                    $("#trialsLeft").hide();
                                    stopAction();
                                }
       
       }
    
},10);


//choose a random Fruit
function chooseFruit(){
    $("#fruit1").attr('src' , 'images/' + fruits[Math.round(3*Math.random())] + '.png');
    
 }
    function stopAction(){
        clearInterval(action);
        $("#fruit1").hide();
    }