var totalSteps = 14; 
var currentStep = 0; 

//Function for Update the Progression bar
function updateProgressBar() {
    currentStep++;
    var progress = (currentStep / totalSteps) * 100;
    document.getElementById('progress').style.width = progress + '%';
    document.getElementById('progressText').textContent = Math.round(progress) + '%';
}
//Function to display the input prompts and hiding start button and welcome messages after user press start
function showprompt(){
    document.querySelector(".StartButton").style.display="none";
    document.querySelector(".cover1").style.display="flex";
    document.querySelector(".welcome").style.display="none";
    document.querySelector("footer").style.display="none";
}
//Function for user press Next button and Next prompt will display current prompt will hide in Step 1
function ok(step) {
    if (step === 1) {
        document.querySelector(".cover1").style.display="none";
        let input1=document.querySelector('.input1').value;
        document.getElementById("UserName").innerHTML = input1;
        document.querySelector('fieldset:nth-of-type(1)').style.display = 'block';
        document.querySelector(".cover2").style.display="block";
        updateProgressBar()
    } 
    else if (step === 2) {
        document.querySelector(".cover2").style.display="none";
        let input2=document.querySelector('.input2').value;
        document.getElementById("UserSurname").innerHTML = input2;
        document.querySelector(".cover3").style.display="block";
        updateProgressBar()
    } 
    else if (step === 3) {
        document.querySelector(".cover3").style.display="none";
        let input3=document.querySelector('.input3').value;
        document.getElementById("UserAge").innerHTML = input3;
        document.querySelector(".cover4").style.display="block";
        updateProgressBar()
    }
    else if (step === 4) {
        document.querySelector(".cover4").style.display="none";
        let input4=document.querySelector('.input4').value;
        document.getElementById("UserGender").innerHTML = input4;
        document.querySelector(".cover5").style.display="block";
        updateProgressBar()
    }
    else if (step === 5) {
        document.querySelector(".cover5").style.display="none";
        let input5=document.querySelector('.input5').value;
        document.getElementById("UserAgree").innerHTML = input5;
        //Displying Add energy intrests button
        document.querySelector(".Step2Button").style.display = "block"; 
        updateProgressBar()
    }
}
//Function to if user press skip buttpns in Step 1
function skip(step) {
    if (step === 1) {
        document.querySelector(".cover1").style.display = "none";
        document.querySelector(".cover2").style.display = "block";
        updateProgressBar()
    }
    else if (step === 2) {
        document.querySelector(".cover2").style.display = "none";
        document.querySelector(".cover3").style.display = "block";
        updateProgressBar()

    }
    else if (step === 3) {
        document.querySelector(".cover3").style.display = "none";
        document.querySelector(".cover4").style.display = "block";
        updateProgressBar()
        
    }
    else if (step === 4) {
        document.querySelector(".cover4").style.display = "none";
        document.querySelector(".cover5").style.display = "block";
        updateProgressBar()
        
    }
    else if (step === 5) {
        document.querySelector(".cover5").style.display = "none";
        //Displying Add energy intrests button
        document.querySelector(".Step2Button").style.display = "block"; 
        updateProgressBar()
    }
    document.querySelector('fieldset:nth-of-type(1)').style.display = 'block';
}
// Function to Display the Step 2, 1st prompt after user Press Add details to step 2 and Hide the step 2 button
function Step2(){
    document.querySelector(".Step2Button").style.display="none";
    document.querySelector(".cover11").style.display="flex";
}
//Function for user press Next button and Next prompt will display current prompt will hide in Step 2
function ok2(step2) {
    if (step2 === 1) {
        document.querySelector(".cover11").style.display="none";
        let input11=document.querySelector('.input11').value;
        document.getElementById("intrests").innerHTML = input11;
        document.querySelector('fieldset:nth-of-type(2)').style.display = 'block';
        document.querySelector(".cover12").style.display="block";
        updateProgressBar()
    } 
    else if (step2 === 2) {
        document.querySelector(".cover12").style.display="none";
        let input12=document.querySelector('.input12').value;
        document.getElementById("Property").innerHTML = input12;
        document.querySelector(".cover13").style.display="block";
        updateProgressBar()
    } 
    else if (step2 === 3) {
        document.querySelector(".cover13").style.display="none";
        let input13=document.querySelector('.input13').value;
        document.getElementById("Bill").innerHTML = input13;
        document.querySelector(".cover14").style.display="block";
        updateProgressBar()
    }
    else if (step2 === 4) {
        document.querySelector(".cover14").style.display="none";
        let input14=document.querySelector('.input14').value;
        document.getElementById("Place").innerHTML = input14;
        document.querySelector(".cover15").style.display="block";
        updateProgressBar()
    }
    else if (step2 === 5) {
        document.querySelector(".cover15").style.display="none";
        let input15=document.querySelector('.input15').value;
        document.getElementById("Location").innerHTML = input15;
        //Displying Add contact Infromation button
        document.querySelector(".Step3Button").style.display = "block"; 
        updateProgressBar()
    }
}
//Function to if user press skip buttpns in Step 2
function skip2(step) {
    if (step === 1) {
        document.querySelector(".cover11").style.display = "none";
        document.querySelector(".cover12").style.display = "block";
        updateProgressBar()
    }
    else if (step === 2) {
        document.querySelector(".cover12").style.display = "none";
        document.querySelector(".cover13").style.display = "block";
        updateProgressBar()

    }
    else if (step === 3) {
        document.querySelector(".cover13").style.display = "none";
        document.querySelector(".cover14").style.display = "block";
        updateProgressBar()
        
    }
    else if (step === 4) {
        document.querySelector(".cover14").style.display = "none";
        document.querySelector(".cover15").style.display = "block";
        updateProgressBar()
        
    }
    else if (step === 5) {
        document.querySelector(".cover15").style.display = "none";
        //Displying Add contact Infromation button
        document.querySelector(".Step3Button").style.display = "block"; 
        updateProgressBar()
    }
    document.querySelector('fieldset:nth-of-type(2)').style.display = 'block';
}
// Function to Display the Step 3, 1st prompt after user Press Add details to step 2 and Hide the step 3 button
function Step3(){
    document.querySelector(".Step3Button").style.display="none";
    document.querySelector(".cover21").style.display="block";
}
//Function for user press Next button and Next prompt will display current prompt will hide in Step 3
function ok3(step2) {
    if (step2 === 1) {
        document.querySelector(".cover21").style.display="none";
        let input21=document.querySelector('.input21').value;
        document.getElementById("Mobile").innerHTML = input21;
        document.querySelector('fieldset:nth-of-type(3)').style.display = 'block';
        document.querySelector(".cover22").style.display="block";
        updateProgressBar()
    } 
    else if (step2 === 2) {
        document.querySelector(".cover22").style.display="none";
        let input22=document.querySelector('.input22').value;
        document.getElementById("Email").innerHTML = input22;
        document.querySelector(".cover23").style.display="block";
        updateProgressBar()
    } 
    else if (step2 === 3) {
        document.querySelector(".cover23").style.display="none";
        let input23=document.querySelector('.input23').value;
        document.getElementById("Linked").innerHTML = input23;
        document.querySelector(".cover24").style.display="block";
        updateProgressBar()
    }
    else if (step2 === 4) {
        document.querySelector(".cover24").style.display="none";
        let input24=document.querySelector('.input24').value;
        document.getElementById("Country").innerHTML = input24;
        //Displying The footer after all
        document.querySelector("footer").style.display="block";
        document.querySelector(".UserEdit").style.display="block";
        document.querySelector(".Submit").style.display="block";
        updateProgressBar()
    }
}
//Function to if user press skip buttpns in Step 3
function skip3(step) {
    if (step === 1) {
        document.querySelector(".cover21").style.display = "none";
        document.querySelector(".cover22").style.display = "block";
        updateProgressBar()
    }
    else if (step === 2) {
        document.querySelector(".cover22").style.display = "none";
        document.querySelector(".cover23").style.display = "block";
        updateProgressBar()

    }
    else if (step === 3) {
        document.querySelector(".cover23").style.display = "none";
        document.querySelector(".cover24").style.display = "block";
        updateProgressBar()
        
    }
    else if (step === 4) {
        document.querySelector(".cover24").style.display = "none";
        //Displying The footer after all
        document.querySelector("footer").style.display="block";
        document.querySelector(".UserEdit").style.display="block";
        document.querySelector(".Submit").style.display="block";
        updateProgressBar()
    }
    document.querySelector('fieldset:nth-of-type(3)').style.display = 'block';
}
//Function to call if user press edit details button ,  Showing all 3  Edit buttons and submit button
function UserEditChoise(){
    //Move the submit button to the right of the web 
    document.querySelector('.Submit').style.marginLeft = '80%'; // Adjust the value as needed
    //Hiding the getting user choise for edit button
    document.querySelector('.UserEdit').style.display = 'none';
    // Displaying buttons for editing data
    document.querySelector('.EditStep1').style.display = 'block';
    document.querySelector('.EditStep2').style.display = 'block';
    document.querySelector('.EditStep3').style.display = 'block';
}
//Function to call if user press submit button ,  Hiding all editing and adding buttons and display only fieldsets
function SubmitDetails(){
    //Hiding the editing buttons
    document.querySelector('.EditStep1').style.display = 'none';
    document.querySelector('.EditStep2').style.display = 'none';
    document.querySelector('.EditStep3').style.display = 'none';
    //Hiding the editing choise button and submit button if user submit without editing
    document.querySelector('.UserEdit').style.display = 'none';
    document.querySelector('.Submit').style.display = 'none';
    // Displaying the Porfile Created completely pop Up message
    document.querySelector('.popupwindow').style.display= 'block';
}
function PopUp(){
    //Hiding the pop up message after click dismiss
    document.querySelector('.popupwindow').style.display = 'none';
}

//Function to call if user press Edit Step 1 ,  Editing step 1 by asking user info by prompts
function Editstep1() {
    var userName = prompt("Enter Your Name: ");
    document.getElementById("UserName").innerHTML = userName;

    var userSurname = prompt("Enter Your Surname: ");
    document.getElementById("UserSurname").innerHTML = userSurname;

    var userAge = parseInt(prompt("Enter Your Age: "));
    document.getElementById("UserAge").innerHTML = userAge;

    var userGender = prompt("Enter Your Gender: ");
    document.getElementById("UserGender").innerHTML = userGender;

    var userAgree = prompt("Do You Agree to our Terms? : ");
    document.getElementById("UserAgree").innerHTML = userAgree;
}
//Function to call if user press Edit Step 2 ,  Editing step 2 by asking user info by prompts
function Editstep2(){
    var userIntrest = prompt("What types of renewable energy are you interested in? ");
    document.getElementById("intrests").innerHTML = userIntrest;

    var userProperty= prompt("Are you interested in installing a renewable energy system on your property?  : ");
    document.getElementById("Property").innerHTML = userProperty;

    var userBill = prompt("Enter your average monthly electricity bill : ");
    document.getElementById("Bill").innerHTML = userBill;

    var userPlace = prompt("Enter your Property Type : ");
    document.getElementById("Place").innerHTML = userPlace;

    var userLocation = prompt("Enter your Location : ");
    document.getElementById("Location").innerHTML = userLocation;
}
//Function to call if user press Edit Step 3 ,  Editing step 3 by asking user info by prompts
function Editstep3(){
    var userMobile = prompt("Enter Your Phone Number : ");
    document.getElementById("Mobile").innerHTML = userMobile;

    var userEmail = prompt("Enter Your Email Adress : ");
    document.getElementById("Email").innerHTML = userEmail;

    var userLinked = prompt("Enter Your LinkedIn Id : ");
    document.getElementById("Linked").innerHTML = userLinked;

    var userCountry = prompt("What's the country : ");
    document.getElementById("Country").innerHTML = userCountry;
}








