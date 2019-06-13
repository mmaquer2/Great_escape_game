function start () { 
   
    var newDiv = document.createElement("div"); 
    var newContent = document.createTextNode("Greetings! Welcome to the great esacpe"); 
    newDiv.appendChild(newContent);
    var currentDiv = document.getElementById("div1"); 
    document.body.insertBefore(newDiv, currentDiv); 
     
   
    var btn1 = document.createElement("button");
    btn1.innerHTML = "Enter";
    document.body.appendChild(btn1);
    btn1.onclick = part1
    document.body.insertBefore(btn1,currentDiv)
     
  }
  
  function part1() {
    var newDiv = document.createElement("div"); 
    var newContent = document.createTextNode("After falling for what seems like ages. You wake up in a small room, dimly lit only with a torch single on the wall beside a large wooden door. You attempt to open the door, tugging on the cool brass handle, however, When you attempt to pull the handle it resists your effort. locked. You must find a way out.  What do you do?"); 
    newDiv.appendChild(newContent);
    var currentDiv = document.getElementById("div1"); 
    document.body.insertBefore(newDiv, currentDiv); 
   
    var btn2 = document.createElement("BUTTON");
    var btn3 = document.createElement("BUTTON");
   
    btn2.innerHTML = "Look at the Torch";
    btn3.innerHTML = "stare into the key hole";
    document.body.appendChild(btn2);
    document.body.appendChild(btn3);
  }
    
  
  function part2() {
    
    
    
  }
  
  
  var character = {
    type: "human",
    weapon:"bow",
    health:"100",
    stats : function() {
      return this.health + " " + this.weapon + " " + this.type
    }
    
  }