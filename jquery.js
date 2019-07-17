var playing = false;
var score;
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
          score = 1;                             //set score to 0
          $("#scoreValue").html(score);
          
          //Show trials left
          $("#trialsLeft").show();
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
        