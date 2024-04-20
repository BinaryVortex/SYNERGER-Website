
// Stars rating
const stars = document.querySelectorAll(".stars i");

stars.forEach((star, index1) => {
    star.addEventListener("click", () => {
        stars.forEach((star, index2) =>{
            index1 >= index2 ? star.classList.add("active") : star.classList.remove("active");
            
        });
    });
});

const form = document.querySelector('form');

const firstName = document.getElementById("Fname");
const lastName = document.getElementById("Lname");
const email = document.getElementById("email");
const phone = document.getElementById("phone");
const message = document.getElementById("message");
const drop = document.getElementById("select");

function getStarRating() {
    const activeStars = document.querySelectorAll(".stars i.active").length;
    return activeStars;
}

//Send email
function sendEmail(){

    let firstTimeVisited;
    if (document.getElementById('option1_1').checked == true) {
        firstTimeVisited = "yes";
    } else {
        firstTimeVisited = "no";
    }

    let recommendValue;
    if (document.getElementById('option2_1').checked == true) {
        recommendValue = "yes";
    } else {
        recommendValue = "no";
    }

    const rating = getStarRating();

    //Email content
    const body = `First Name: ${firstName.value}
Last Name: ${lastName.value}
Email: ${email.value}
Phone: ${phone.value}
First time visited: ${firstTimeVisited}
Recommend: ${recommendValue}
Updates: ${drop.value}
Message: ${message.value}
Rating: ${rating} stars`;

    window.location.href = `mailto:banusha.20220801@iit.ac.lk?subject= New Feedback &body=${encodeURIComponent(body)}`;

}

// Required error
function checkInputs(){
    const items = document.querySelectorAll(".required");

    for (const item of items){
        if (item.value == ""){
            item.classList.add("error");
            item.parentElement.classList.add("error");
        }

        if (items[2].value != "") {
            checkEmail();
        }

        items[2].addEventListener("keyup", () => {
            checkEmail();
        });

        item.addEventListener("keyup", () => {
            if(item.value != ""){
                item.classList.remove("error");
                item.parentElement.classList.remove("error");
            }
            else{
                item.classList.add("error");
                item.parentElement.classList.add("error");
            }
        });
    }
}

//Email check
function checkEmail() {
    const emailReg = /^([a-z\d\.-]+)@([a-z\d-]+)\.([a-z]{2,3})(\.[a-z]{2,3})?$/;

    const errorEmailText = document.querySelector(".error_text.email");

    if (!email.value.match(emailReg)) {
        email.classList.add("error");
        email.parentElement.classList.add("error");

        if (email.value != "") {
            errorEmailText.innerText = "Enter a valid email address";
        }
        else{
            errorEmailText.innerText = "Required";
        }
    }
    else{
        email.classList.remove("error");
        email.parentElement.classList.remove("error");
    }
}

// Call funtions when click the submit button
form.addEventListener("submit", (e) => {
    e.preventDefault();

    checkInputs();  //Call required funtion

    if (!firstName.classList.contains("error") && !lastName.classList.contains("error") && !email.classList.contains("error") && !message.classList.contains("error")) {

        sendEmail();    // Call the sendEmail funtion
        form.reset();   // Reset the form

        stars.forEach(star => {     
            star.classList.remove("active");    //Clear active stars
        });

        return false;
    }
});