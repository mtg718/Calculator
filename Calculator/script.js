let input = document.getElementById("inputBox");

//take all thye buttons
let buttons = document.querySelectorAll("button");

//string to store the result

let string = "";

// make array of buttons

let arr = Array.from(buttons);

//loop on this array of buttons

arr.forEach((button) => {
  //if click on button  e would be passed
  button.addEventListener("click", (e) => {
    //if e is passed means button pressed, then  value comes on input screen

    //at first check the button clicked is = button or not
    // if = button then it would evaluate the result

    if (e.target.innerHTML == '=') {
      string = eval(string); //eval is a math function to evaluate our string
      input.value = string; // store and show string value in input text
    } else if (e.target.innerHTML == 'AC') {
        // if AC then clear the string and store or show 0 value as placeholder show it already.

      string = "";
      input.value = string;
    } 
    else if(e.target.innerHTML=='DEL'){
        // if button pressed is DEL then remove the last index of string
// substring take 0  and exclude last index (n-1) value 
        string=string.substring(0,string.length-1);
        input.value=string;
    }
    
    
    else {
      // if not = button then add it in string  like if we press 7 then 8 it would be added in the string and so on
      string = string + e.target.innerHTML;
      input.value = string; // store and show string value in input text
    }
  });
});
