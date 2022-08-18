const input = document.getElementById("inner");// This is grabbing the input with its id and assigning a variable named "input" to it
const btn = document.getElementById("btn");//This is grabbing the submit button with its id and assigning a varaible named "btn"
const display = document.getElementById("result");//This is grabbing  the h2 elment, which will be used to display the network, the variable name is "display"
function startApp() {
    // Your entire app should not necessarily be coded inside this 
    // single function (though there's no penalty for that), 
    // so create and use/call additional functions from here
  
    // pls remove the below and make some magic in here!
  // Grab all the html elements
  
  // Get what number was inputed. 1st step.
  let value = input.value;

   // Get the first four digits,This is the second step.
   value = value.slice(0, 4);
  

 // Check what network it is and update the display,This is the final step
    if(value === "0903"||value === "0913"||value === "0916"||value === "0906"||value === "0816"|| value === "0703" ||value === "0704"||value === "0706"||value === "0803"||value === "0806"|| value === "0810"|| value === "0813"|| value === "0816"){
     display.innerHTML = "<img src = MTN2.jfif width = 50px height = 50px>"
    }

   else if(value === "0809"||value === "0817"|| value === "0818"|| value === "0909"||value === "0908"){
    display.innerHTML = "<img src = Etisalat.jfif width = 50px height = 50px>"
   }
   
    
   else if(value === "0705"|| value === "0805"||value === "0807"||value === "0811"||value === "0815"||value === "0905"||value === "0915" ){
    display.innerHTML = "<img src = GLO.jfif width = 50px height = 50px>"
   }

    else if(value === "0802"|| value === "0808"|| value === "0701"|| value === "0802"||value === "0812"||value === "0902"||value === "0904"|| value === "0907"||value === "0912"|| value === "0708"||value === "0901"||value === "0902"){
        display.innerHTML = "<img src = Airtel.jfif width = 50px height = 50px>";
  }
   else{
    display.innerHTML = "This is an Invalid Number";
    }
  }


 btn.addEventListener("click", startApp)//This an event listener attached to the button, the event is "click", this means, once anyone clicks the submit button, it will run the function "click" defined above
  
  // ======= DO NOT EDIT ============== //
  export default startApp;
  // ======= EEND DO NOT EDIT ========= //