let form = document.querySelector("form");
let email_id = document.querySelector("#email");
let phone_num = document.querySelector("#phone");

form.addEventListener("submit", function (dets) {

    dets.preventDefault();

    const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    const phoneRegex = /^[6-9]\d{9}$/;

    
    let isValid= true;
    let email_ans = emailRegex.test(email_id.value);
    let phone_ans = phoneRegex.test(phone_num.value);

    if(!email_ans){
        alert("invalid email");
        isValid=false;
    }

    if(!phone_ans){
        alert("invalid phone number format");
        isValid= false;
    }

    if(isValid){
        alert("Email and Phone Number format is correct.!")
    }
});

