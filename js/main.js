

// mega-menu
let other_menu = document.querySelector(".other_menu");
let mega_menu = document.querySelector(".mega-menu");
other_menu.addEventListener("click",function () {
    let clas_other = other_menu.className;

    if(clas_other == "other_menu") {
        other_menu.classList.add("x");
        mega_menu.style.display = "flex";
    }else {
        other_menu.classList.remove("x");
        mega_menu.style.display = "none";
    }
})



//our-awesome
let nums = document.querySelectorAll(".our-awesome .number");
let sec_awesome = document.querySelector(".our-awesome");

window.addEventListener("scroll",function () {
        if (window.scrollY >= sec_awesome.offsetTop) {
            if (!started) {
                nums.forEach((nums) => {startCount(nums);})
            }
            started = true;
        } 
    })


//progresss
let arr_span = document.querySelectorAll(".prog-span");
let arr_span_num = document.querySelectorAll(".prog-num");
let sec_skills = document.querySelector(".our-skills");

let started = false;
window.addEventListener("scroll",function () {
        if (window.scrollY >= sec_skills.offsetTop) {
            arr_span.forEach( (span) => {
                span.style.width = span.dataset.width;
            })
            if (!started) {
                arr_span_num.forEach((nums) => {startCount(nums);})
            }
            started = true;
        }
    })


    function startCount(el) {
        let goal = el.dataset.goal;
        let count = setInterval(() => {
            el.textContent++;
            if (el.textContent == goal) {
                clearInterval(count);
            }
        }, 30);
    }



//counter time
let countDownDate = new Date("NOV 29, 2022 23:59:59").getTime();

let counter = setInterval(() => {
    let dateNow = new Date().getTime();
    let dateDiff = countDownDate - dateNow;

    let days = Math.floor(dateDiff / (1000 * 60 * 60 * 24));
    document.querySelector(".events .info .time .day").innerHTML = days;

    let hours = dateDiff % (1000 * 60 * 60 * 24);
    document.querySelector(".events .info .time .hours").innerHTML = Math.floor(hours / (1000 * 60 * 60));

    let minutes = dateDiff % ( 1000 * 60 * 60);
    document.querySelector(".events .info .time .minutes").innerHTML = Math.floor(minutes / (1000 * 60));

    let seconds = dateDiff % (1000 * 60);
    document.querySelector(".events .info .time .seconds").innerHTML = Math.floor(seconds / (1000)) ;

}, 1000);




