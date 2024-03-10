

let changeNum = 0;

function smoothScroll(container, targetX, duration) {
    const startX = container.scrollLeft;
    const startTime = performance.now();

    function scrollAnimation(currentTime) {
        const timeElapsed = currentTime - startTime;
        const progress = Math.min(timeElapsed / duration, 1);

        container.scrollLeft = startX + (targetX - startX) * progress;

        if (progress < 1) {
            requestAnimationFrame(scrollAnimation);
        }
    }

    requestAnimationFrame(scrollAnimation);
}

const timer = setInterval(function () {
    const container = document.getElementById("Herocontainer");

    if (changeNum < 3) {
        smoothScroll(container, container.scrollLeft + window.innerWidth, 800);
        changeNum++;
    } else {
        container.scrollBy(-window.innerWidth * 4, 0);
        changeNum = 0;
    }
}, 4000);

function telefonClap(){
    const swich = document.getElementById('checkbox2');
    const input = document.getElementById('telefonInput');

    if(swich.checked){
        input.style.display = "block";
        input.style.opacity = "1";
        input.style.zIndex = "5";
    }
    else{
        input.style.display = "none";
        input.style.opacity = "0";
        input.style.zIndex = "-5";
    }
}

window.addEventListener('scroll', reveal);

function reveal(){

    if(window.innerWidth > 768){
        
            var reveals1 = document.querySelectorAll(".reveal1");

        for(var i = 0; i < reveals1.length; i++){

            var windowheight = window.innerHeight;
            var revealTop = reveals1[i].getBoundingClientRect().top;
            var revealpoint = 10;

            if(revealTop < windowheight - revealpoint){
                reveals1[i].classList.add('active');
            }
            else{
                reveals1[i].classList.remove('active');
            }
        }
        var reveals2 = document.querySelectorAll(".reveal2");

        for(var i = 0; i < reveals2.length; i++){

            var windowheight = window.innerHeight;
            var revealTop = reveals2[i].getBoundingClientRect().top;
            var revealpoint = 150;

            if(revealTop < windowheight - revealpoint){
                reveals2[i].classList.add('active');
            }
            else{
                reveals2[i].classList.remove('active');
            }
        }
        var reveals3 = document.querySelectorAll(".reveal3");

        for(var i = 0; i < reveals3.length; i++){

            var windowheight = window.innerHeight;
            var revealTop = reveals3[i].getBoundingClientRect().top;
            var revealpoint = 200;

            if(revealTop < windowheight - revealpoint){
                reveals3[i].classList.add('active');
            }
            else{
                reveals3[i].classList.remove('active');
            }
        }
        var reveals4 = document.querySelectorAll(".reveal4");

        for(var i = 0; i < reveals4.length; i++){

            var windowheight = window.innerHeight;
            var revealTop = reveals4[i].getBoundingClientRect().top;
            var revealpoint = 250;

            if(revealTop < windowheight - revealpoint){
                reveals4[i].classList.add('active');
            }
            else{
                reveals4[i].classList.remove('active');
            }
        }
    }
};