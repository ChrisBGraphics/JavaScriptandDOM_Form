function validate() {
    let fn = document.getElementById("fname").value;
    let ln = document.getElementById("lname").value;
    let num = document.getElementById("number").value;
    let email = document.getElementById("email").value;
    let pass = document.getElementById("password").value;

    let text = "";

    //Validation
    if (fn == ""){
        text += "Please enter a first name. <br>"; 
    }
    if (ln == ""){
        text += "Please enter a last name. <br>";
    }
    if (isNaN(num)){
        text += "Please insert only numbers. <br>"
    }

    //Regular Expression for email validation please refere to the following:
    //https://www.w3resource.com/javascript/form/email-validation.php
    let emailValidate = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    if (!email.match(emailValidate)){
        text += "Please enter a proper email address. <br>"
    }

    if (pass.length < 9){
        text += "Please make the password longer than 9 characters. <br>"
    }

    //display the errors or valid pass
    if(text != ""){
        document.getElementById("valid").style.color = "red";
        document.getElementById("valid").innerHTML = text;
    }else {
        document.getElementById("valid").style.color = "#a7c1fc";
        document.getElementById("valid").innerHTML = "Your accrount has been successfully created!";
    }
}