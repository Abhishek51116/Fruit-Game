var playing = false;
var score;
var trialsLeft;
var fruits = ['apple','cheery','pineapple','banana'];
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
              for(var i=0;i< trialsLeft; i++){
              $("#trialsLeft").append(' <img src="images/heart.jpg" class="life">');
          }
        }
        //Send Fruits
function startAction(){ 
 $("#fruit1").show();
    chooseFruit();
}
//choose a random Fruit
function chooseFruit(){
    $("#fruit1").attr('src' , 'images/' + fruits[Math.round(3*Math.random())] + '.png');
    $("#fruit1").css({'left' : Math.round(550*Math.random()),'top': -50});
    
}