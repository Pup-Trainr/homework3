// Assignment Code //
var generateBtn = document.querySelector("#generate");

//allowed string of characters//
var upperCase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
var lowerCase = "abcdefghijklmnopqrstuvwxyz";
var numbers = "0123456789";
var special = " !\"#$&'()*+,-./:;<=>?@[\\]^_`{|}~";

//Write password to the #password input
 function writePassword () {
   var password = generatePassword ();
   var passwordText = document.querySelector ("#password");

   passwordText.value = password; 
   }

  function generatePassowrd () {
    var password = {
      pwLength: 0,
      upper: "n",
      lower: "n",
      numbers: "n",
      special: "n",
      };
  
  password = askPasswordCriteria (password);

  return passwordCreator (password);

   }
  function askPasswordCriteria (password) {

 //ask password length
    while (!(password.pwLength >= 8 && password.pwLength <=128)) {
      
      password.pwLength = prompt ( "Enter desired password length (8-128 characters");
     
    if (isNaN(password.pwLength)){
        alert("You must enter a number only!");
      } 
    else if (password.pwLength > 128) {
        alert("Password must be no longer than 128 characters");
      } 
    else if (password.pwLength < 8){
        alert("Password must be at least 8 characters long!");
        }
      }  
    
      var terminate = false;
      while (terminate === false){
    
  //UPPER CASE
        do{  
          password.upper = prompt("Do you want to include upper case? [y or n]").toLowerCase();
        }
        while(!(password.upper === "y" || password.upper === "n"));
  
  //lower case
        do{
          password.lower = prompt("Do you want to include lower case? [y or n]").toLowerCase();
        }
        while(!(password.lower === "y" || password.lower === "n"));
  
  //NUMBERS
        do{
          password.numbers = prompt("Do you want to include numbers? [y or n]").toLowerCase();
        }
        while(!(password.numbers === "y" || password.numbers === "n"));

  //SPECIAL CHARACTERS
        do{
          password.special = prompt("Do you want to include special characters? [y or n]").toLowerCase();
        }   
         while(!(password.special === "y" || password.special === "n"));
  

  //CHECK IF AT LEAST ONE TYPE SELECTED
        if(password.upper === "y" || password.lower === "y" || password.numbers === "y" || password.special === "y"){      
          terminate = true;
        } else {
          alert("You must use at least one character type!");
        }
     }

      return password;
      
      }

    function passwordCreator(password){

    var options = "";
    var finalPassword = "";
  
  
  //COMBINE PASSWORD OPTIONS INTO ONE STRING
    if(password.upper === "y"){
      options = options + upperCase;
    }
    if(password.lower === "y"){
      options = options + lowerCase;
    }
    if(password.numbers === "y"){
      options = options + numbers;
    }
    if(password.special === "y"){
      options = options + special;
    }

  //Split to Array
   options = options.split ("");

  //LOOP TO BUILD FINAL PASSWORD
  for(var i = 0; i < password.pwLength; i++){
    finalPassword = finalPassword + options[Math.floor(Math.random() * options.length)]
  }

  return finalPassword;

}


// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

  //var lowerCase=["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
  //var upperCase=["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
  //var numCase=["0","1","2","3","4","5","6","7","8","9"];
  //var specialCase=[",",".","/",";","[","]","<",">","?","{","}"];
 
  //internal variables//
  //var genPwd="";
  //var genChar=0;
 // var genType=0;
  //var i=0;
  
// Variable to activate console.log command, set debugMode to TRUE //
  //var debugMode=false;

// Prompt for Password Criteria Type //
//var isLower=myForm.chkLower.checked;
//var isUpper=myForm.chkUpper.checked;
//var isNum=myForm.chkNum.checked;
//var isSpecial=myForm.chkSpecial.checked;
//var pwdLength=myForm.txtLength.value;

 // debugging command to check if Checkbox selection is recognized //
 //if (debugMode) {
 // console.log(Lower);
 // console.log(Upper);
 // console.log(Num);
 // console.log(Special);
 // console.log(Longueur);
//}

// checked if at least one Criteria has been confirmed //
 //if (!isLower && !isUpper && !isNum && !isSpecial) {
 //   return ("No password has been generated\r\rNo Criteria Selected")
 // } else {
  // Asking for the length of the Password //
 //if (debugMode) {
 //   console.log("length="+pwdLength);
 // }
  // Checking that the input length is within the acceptable range //
 //if (pwdLength<8 || pwdLength>128) {
  //  alert("Wrong length for Password, must be netween 8 to 128 Characters long");
 // } else {
    
   
  
  