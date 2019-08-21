

function start () { 

    document.getElementById("intro").innerHTML = "";
    document.getElementById("a").onclick = part1;
    document.getElementById("b").onclick = part1;
    document.getElementById("select").onclick = part1;
    document.getElementById("start").onclick = part1;
   
    const msg = "Welcome to The Great Escape a text adventure by Mike Maquera"
    const msg2 = "The purpose of the game is simple: Esacpe the mysterious place you find yourself in. "
    const msg3= "Along the way the you will find all sorts of hazards, traps, and puzzles to traveress. Good Luck!"
    const msg4 =" Press any button to continue"
    
    document.getElementById("text2").innerHTML = msg;
    document.getElementById("text3").innerHTML= msg2;
    document.getElementById("text4").innerHTML= msg3;
    document.getElementById("text5").innerHTML = msg4;

    
      
  }
  
function part1 () {

  document.getElementById("b").onclick = part2;
  document.getElementById("a").onclick = failure;


  document.getElementById("text2").innerHTML = ""
    document.getElementById("text3").innerHTML= ""
    document.getElementById("text4").innerHTML= ""
    document.getElementById("text5").innerHTML = ""

const msg = "After falling for what seems like ages, You find yourself in a dark, muggy room dimly by a light single torch attached to a wall"
const msg2 = "to the right of the torch lies a single large wooden door with a brass handle, you pull the handle, its locked, what do you do?"
const msg3 = "A. Look at the Door, B. Look at the Torch"

    document.getElementById("text2").innerHTML = msg;
    document.getElementById("text3").innerHTML= msg2;
    document.getElementById("text4").innerHTML= msg3;

  

} 
    

  
function part2 () {

  document.getElementById("a").onclick = left;
  document.getElementById("b").onclick = right;


  document.getElementById("text2").innerHTML = ""
    document.getElementById("text3").innerHTML= ""
    document.getElementById("text4").innerHTML= ""
    document.getElementById("text5").innerHTML = ""

  const msg = "You look closer at the torch on the wall, you notice there is a small brass key jammed onto the mount of the torch. You pull it free and unlock the door"
  const msg2 = "The Door sways open with a loud creak. You enter a dark hallway and several steps later you come to an intersection"  
  const msg3 = " To your right you hear running water to your left you smell smoke"
  const msg4 = " which way do you go? A. Left  B. Right"
    document.getElementById("text1").innerHTML = msg;
    document.getElementById("text2").innerHTML= msg2;
    document.getElementById("text3").innerHTML= msg3;
    document.getElementById("text4").innerHTML= msg4;
    

}  


function right () {


  document.getElementById("a").onclick = crossing;
  document.getElementById("b").onclick = crossing;


  document.getElementById("text2").innerHTML = ""
    document.getElementById("text3").innerHTML= ""
    document.getElementById("text4").innerHTML= ""
    document.getElementById("text5").innerHTML = ""

  const msg = "As you start to walk right away from the intersection the ceiling starts to shake and crumble you cannot return to the previous room"
  const msg2 = " you walk for five minutes along the dark hallway until you come upon a cavern spilt in the middle by a running stream"  
  const msg3 = " you drop a stone in the water and it is clear all the way to the bottom. You could probalby swim across, however there is also a dead tree right next to you."
  const msg4 = " what do you do? A. Push the tree over b. Swim across the pond"
    document.getElementById("text1").innerHTML = msg;
    document.getElementById("text2").innerHTML= msg2;
    document.getElementById("text3").innerHTML= msg3;
    document.getElementById("text4").innerHTML= msg4;


}

function left () {

  document.getElementById("a").onclick = fire;
  document.getElementById("b").onclick = fire;


  document.getElementById("text2").innerHTML = ""
    document.getElementById("text3").innerHTML= ""
    document.getElementById("text4").innerHTML= ""
    document.getElementById("text5").innerHTML = ""

  const msg = "As you start to walk right away from the intersection the ceiling starts to shake and crumble you cannot return to the previous room"
  const msg2 = " you walk for five minutes then you come upon a room lit by a small campfire, besides the campfire there is with a pot by the fire"  
  const msg3 = "You smell something delcious originating from the cooking, your stomach growls are you remeber you havent eaten for days"
  const msg4 = " what do you do? A. Grab the Pot and eat its contents B. bypass the pot  "
    document.getElementById("text1").innerHTML = msg;
    document.getElementById("text2").innerHTML= msg2;
    document.getElementById("text3").innerHTML= msg3;
    document.getElementById("text4").innerHTML= msg4;


}


function fire () {
//this bridges together both of the right and left paths 

  document.getElementById("a").onclick = riddle;
  document.getElementById("b").onclick = riddle ;

  document.getElementById("text2").innerHTML = ""
    document.getElementById("text3").innerHTML= ""
    document.getElementById("text4").innerHTML= ""
    document.getElementById("text5").innerHTML = ""

const msg =" Right before you move "
  const msg2 = "Out of nowhere a hodden figure appears "
  const msg3= " He angirly shakes his fist at you as you attempt to turn away and run towards the exit"
  const msg4 = " What do you do? a. run b. run faster  "

  document.getElementById("text1").innerHTML = msg;
  document.getElementById("text2").innerHTML= msg2;
  document.getElementById("text3").innerHTML= msg3;
  document.getElementById("text4").innerHTML= msg4;



}

function crossing () {
  //this bridges together both of the right and left paths 
  
    document.getElementById("a").onclick = riddle;
    document.getElementById("b").onclick = riddle ;
  
    document.getElementById("text2").innerHTML = ""
    document.getElementById("text3").innerHTML= ""
    document.getElementById("text4").innerHTML= ""
    document.getElementById("text5").innerHTML = ""
  
    const msg = " you cross the water quickly and walk carefuly toward the exit of the room "
    const msg2 = "Out of nowhere a hodden figure appears blocking your way"
    const msg3 = " He angirly shakes his fist at you as you attempt to push him out your way and run"
    const msg4  = " What do you do? a. run b. run faster  "
  
    document.getElementById("text1").innerHTML = msg;
    document.getElementById("text2").innerHTML= msg2;
    document.getElementById("text3").innerHTML= msg3;
    document.getElementById("text4").innerHTML= msg4;
  
  
  
  }

function riddle () {

  document.getElementById("a").onclick = correct;
  document.getElementById("b").onclick = failure;

  document.getElementById("text2").innerHTML = ""
    document.getElementById("text3").innerHTML= ""
    document.getElementById("text4").innerHTML= ""
    document.getElementById("text5").innerHTML = ""


  const msg = " The hooded figure quickly catches up to you. He demands you answer his question "
  const msg2 = " I'll say it again, what is known but very far. Close to home but not where you are"
  const msg3= " answer correctly and ill let you go free"
  const msg4 = "a. the past b. a pool of water "

  document.getElementById("text1").innerHTML = msg;
  document.getElementById("text2").innerHTML= msg2;
  document.getElementById("text3").innerHTML= msg3;
  document.getElementById("text4").innerHTML= msg4;


}


function correct () {

  document.getElementById("a").onclick = end;
  document.getElementById("b").onclick = failure ;

  document.getElementById("text2").innerHTML = ""
    document.getElementById("text3").innerHTML= ""
    document.getElementById("text4").innerHTML= ""
    document.getElementById("text5").innerHTML = ""


  const msg = " row 1"
  const msg2= " row 2"
  const msg3= " row 3"
  const msg4 = "a. action 1 b. action 2 "

  document.getElementById("text1").innerHTML = msg;
  document.getElementById("text2").innerHTML= msg2;
  document.getElementById("text3").innerHTML= msg3;
  document.getElementById("text4").innerHTML= msg4;






}



function end() {

  document.getElementById("start").onclick = start;
  document.getElementById("start").onclick = start ;

  document.getElementById("text2").innerHTML = ""
    document.getElementById("text3").innerHTML= ""
    document.getElementById("text4").innerHTML= ""
    document.getElementById("text5").innerHTML = ""

  const msg = "you climb towards the light and finally see the blue skies above, in the far off distance you see your friends peering into the hole you fell into"
  const msg2 = " Congrats you made It, to start over again press 'start' "


  document.getElementById("text1").innerHTML = msg;
  document.getElementById("text2").innerHTML= msg2;
  document.getElementById("text3").innerHTML= msg3;
  document.getElementById("text4").innerHTML= msg4;





}


function failure () {

alert ("you don't think that would do anything" )

}

  
  
  
  
 