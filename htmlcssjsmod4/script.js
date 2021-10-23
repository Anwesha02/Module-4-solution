(function () {
    var names = ["Yaakov", "John", "Jen", "Jason", "Paul", "Frank", "Larry", "Paula", "Laura", "Jim"];
  
    
    for (index in names) {
     names  = names[index];
  
  
      var firstLetter =names .charAt(0);
  
      
      if (firstLetter.toLowerCase() == "j") {
   
        byeSpeaker.speak(this.names);
      } else {
        
        helloSpeaker.speak(this.names);
      }
    }
  })();