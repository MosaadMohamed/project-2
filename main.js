let section = document.querySelector(".stats");
let nums = document.querySelectorAll(".stats .number");
let started = false;
let oursKillsection = document.querySelector(".our-skills");
let spans = document.querySelectorAll(".the-progress span");
let span = document.querySelector(".up");


window.onscroll = function(){

    if(window.scrollY >= oursKillsection.offsetTop)
    {
        spans.forEach((span)=>{

            span.style.width = span.dataset.width;
        });
    }
    if(window.scrollY >= section.offsetTop)
    {
        if(!started)
        {
            nums.forEach((num)=>{

                startCount(num);
            });
        }

        started = true;
    }

    if(window.scrollY >=1000)
    {
        span.classList.add("show");
    } else{
        span.classList.remove("show")
    }
}

function startCount(el)
{
    let goal = el.dataset.goal;

    let count = setInterval(()=>{

        el.textContent++;

        if( el.textContent=== goal)
        {
            clearInterval(count);
        }

    },2000 / goal);
}

let countDownDate = new Date("Dec 31, 2022 23:59:59").getTime();

let counter = setInterval(()=>{

    let dateNow = new Date().getTime();

    let dateDiff = countDownDate - dateNow;

    let days = Math.floor(dateDiff / 1000 / 60 / 60 /24 );
    let hours = Math.floor((dateDiff % (1000* 60 * 60 * 24)) / 1000 / 60 / 60);
    let minutes = Math.floor((dateDiff % (1000 * 60 * 60)) / (1000 * 60));
    let seconds = Math.floor((dateDiff % (1000 * 60)) /1000);
    document.querySelector(".unit .count-Days").innerHTML = days;
    document.querySelector(".unit .count-hours").innerHTML = hours;
    document.querySelector(".unit .count-minutes").innerHTML = minutes;
    document.querySelector(".unit .count-seconds").innerHTML = seconds;

    if(dateDiff < 0)
    {
        clearInterval(counter);
    }
},1000);




span.onclick = function () {
window.scrollTo({
    top: 0,
    behavior: "smooth",
});
};