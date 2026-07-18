let form = document.querySelector("form");
let email_id = document.querySelector("#email");
let phone_num = document.querySelector("#phone");

if (form) {
    form.addEventListener("submit", function (dets) {

        dets.preventDefault();

        const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
        const phoneRegex = /^[6-9]\d{9}$/;


        let isValid = true;
        let email_ans = emailRegex.test(email_id.value);
        let phone_ans = phoneRegex.test(phone_num.value);

        if (!email_ans) {
            alert("invalid email");
            isValid = false;
        }

        if (!phone_ans) {
            alert("invalid phone number format");
            isValid = false;
        }

        if (isValid) {
            alert("Email and Phone Number format is correct.!")
        }
    });
}


let alumni = document.querySelector("#alumni");
let result = document.querySelector("#result");
let intake = document.querySelector("#intake");
let faculty = document.querySelector("#faculty");

let alumni_start = 0;
let result_start = 0;
let intake_start = 0;
let faculty_start = 0;

if (alumni) {
    let alumni_interval = setInterval(function () {
        alumni.textContent = alumni_start + "+";
        alumni_start += 100;
        if (alumni_start > 10000) {
            clearInterval(alumni_interval);
        }
    }, 10);
}

if (result) {
    let result_interval = setInterval(function () {
        result.textContent = result_start + "%";
        result_start++;
        if (result_start > 100) {
            clearInterval(result_interval);
        }
    }, 10);
}

if (intake) {
    let intake_interval = setInterval(function () {
        intake.textContent = intake_start + "+";
        intake_start += 4;
        if (intake_start > 400) {
            clearInterval(intake_interval);
        }
    }, 10);
}

if (faculty) {
    let faculty_interval = setInterval(function () {
        faculty.textContent = faculty_start + "+";
        faculty_start++;
        if (faculty_start > 100) {
            clearInterval(faculty_interval);
        }
    }, 10);
}


let slider = document.querySelector(".slider_div");
let cards = document.querySelectorAll(".card");

currentIndex = 0;

function showCard() {
    slider.style.transform = `translateX(-${currentIndex * 100}%)`;
}

if (cards) {
    let sliderInterval = setInterval(function () {
        currentIndex++;
        if (currentIndex == cards.length) {
            currentIndex = 0;
        }
        showCard();
    }, 2000);
}

/* LOGIN PAGE JS */ 
let student = document.getElementById("student_div");
let faculty_ = document.getElementById("faculty_div");
let parent = document.getElementById("parent_div");

student.addEventListener("mouseenter",()=>{
    faculty_.style.filter="blur(2px)";
    parent.style.filter="blur(2px)";
});

student.addEventListener("mouseleave",()=>{
    faculty_.style.filter="blur(0px)";
    parent.style.filter="blur(0px)";
});

faculty_.addEventListener("mouseenter",()=>{
    student.style.filter="blur(2px)";
    parent.style.filter="blur(2px)";
});

faculty_.addEventListener("mouseleave",()=>{
    student.style.filter="blur(0px)";
    parent.style.filter="blur(0px)";
});

parent.addEventListener("mouseenter",()=>{
    faculty_.style.filter="blur(2px)";
    student.style.filter="blur(2px)";
});

parent.addEventListener("mouseleave",()=>{
    faculty_.style.filter="blur(0px)";
    student.style.filter="blur(0px)";
});