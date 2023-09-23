document.querySelector(".baring_button").addEventListener("click", () => {
    document.querySelector(".menu").classList.add("active")
})

document.querySelector(".baring_button_remove").addEventListener("click", () => {
    document.querySelector(".menu").classList.remove("active")
})

const targetDate = new Date("2023-12-31T00:00:00").getTime(); // Updated target date

const countdown = setInterval(function() {
    const currentDate = new Date().getTime();
    const timeLeft = targetDate - currentDate;

    const hours = Math.floor(timeLeft / (1000 * 60 * 60));
    const minutes = Math.floor((timeLeft % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((timeLeft % (1000 * 60)) / 1000);

    const timerElement = document.querySelector(".timer");
    timerElement.innerHTML = `${hours}<span>H</span>: ${minutes}<span>M</span>: ${seconds}<span>S</span>`;

    if (timeLeft < 0) {
        clearInterval(countdown);
        timerElement.innerHTML = "Countdown expired!";
    }
}, 1000);



// Animations
const observing = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        if (entry.isIntersecting) {
            const elementsToRemoveAnimation = document.querySelectorAll(".moto");
            setTimeout(function(){
                elementsToRemoveAnimation.forEach((el) => {
                    document.querySelector(".moto").classList.add("motoAnime")
                });
           }, 200); 
           
        }
    });
});

const actionableForMoto = document.querySelectorAll(".moto");
actionableForMoto.forEach((el) => observing.observe(el));

const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        if (entry.isIntersecting) {
            const elementsToRemoveAnimation = document.querySelectorAll(".Remove__animation");
            setTimeout(function(){
                elementsToRemoveAnimation.forEach((el) => {
                    el.classList.add("animation");
                    el.classList.remove("Remove__animation");
                });
            const elementsToRemoveImgAnimation = document.querySelectorAll(".Remove_img_animation");
                elementsToRemoveImgAnimation.forEach((el) => {
                    el.classList.add("img_animation_Hero");
                    el.classList.remove("Remove_img_animation");
                });
           }, 200); 
           
        }
    });
});

const actionable = document.querySelectorAll(".Remove__animation");
actionable.forEach((el) => observer.observe(el));


const observer2 = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        if (entry.isIntersecting) {
            const elementsToRemoveAnimation = document.querySelectorAll(".Remove__animation2");
            setTimeout(function(){
                elementsToRemoveAnimation.forEach((el) => {
                    el.classList.add("animation");
                    el.classList.remove("Remove__animation2");
                });
            const elementsToRemoveImgAnimation = document.querySelectorAll(".Remove_img_animation2");
                elementsToRemoveImgAnimation.forEach((el) => {
                    el.classList.add("img_animation");
                    el.classList.remove("Remove_img_animation2");
                });
           }, 200); 
           
        }
    });
});

const actionable2 = document.querySelectorAll(".Remove__animation2");
actionable2.forEach((el) => observer2.observe(el));


const observer3 = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        if (entry.isIntersecting) {
            const elementsToRemoveAnimation = document.querySelectorAll(".Remove__animation3");
            setTimeout(function(){
                elementsToRemoveAnimation.forEach((el) => {
                    el.classList.add("animation");
                    el.classList.remove("Remove__animation3");
                });
            const elementsToRemoveImgAnimation = document.querySelectorAll(".Remove_img_animation3");
                elementsToRemoveImgAnimation.forEach((el) => {
                    el.classList.add("img_animation");
                    el.classList.remove("Remove_img_animation3");
                });
           }, 200); 
           
        }
    });
});

const actionable3 = document.querySelectorAll(".Remove__animation3");
actionable3.forEach((el) => observer3.observe(el));



const observer4 = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        if (entry.isIntersecting) {
            const elementsToRemoveAnimation = document.querySelectorAll(".Remove__animation4");
            setTimeout(function(){
                elementsToRemoveAnimation.forEach((el) => {
                    el.classList.add("animation4");
                    el.classList.remove("Remove__animation4");
                });
            const elementsToRemoveImgAnimation = document.querySelectorAll(".Remove_img_animation4");
                elementsToRemoveImgAnimation.forEach((el) => {
                    el.classList.add("img_animation4");
                    el.classList.remove("Remove_img_animation4");
                });
           }, 200); 
           
        }
    });
});

const actionable4 = document.querySelectorAll(".Remove__animation4");
actionable4.forEach((el) => observer4.observe(el));

const observer5 = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        if (entry.isIntersecting) {
            const elementsToRemoveAnimation = document.querySelectorAll(".Remove__animation5");
            setTimeout(function(){
                elementsToRemoveAnimation.forEach((el) => {
                    el.classList.add("img_animation");
                    el.classList.remove("Remove__animation5");
                });
            const elementsToRemoveImgAnimation = document.querySelectorAll(".Remove_img_animation5");
                elementsToRemoveImgAnimation.forEach((el) => {
                    el.classList.add("img_animation");
                    el.classList.remove("Remove_img_animation5");
                });
           }, 200); 
           
        }
    });
});

const actionable5 = document.querySelectorAll(".Remove__animation5");
actionable5.forEach((el) => observer5.observe(el));

const observer6 = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        if (entry.isIntersecting) {
            const elementsToRemoveAnimation = document.querySelectorAll(".Remove__animation6");
            setTimeout(function(){
                elementsToRemoveAnimation.forEach((el) => {
                    el.classList.add("animation");
                    el.classList.remove("Remove__animation6");
                });
           }, 200); 
           
        }
    });
});

const actionable6 = document.querySelectorAll(".Remove__animation6");
actionable6.forEach((el) => observer6.observe(el));


const observer7 = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        if (entry.isIntersecting) {
            const elementsToRemoveAnimation = document.querySelectorAll(".Remove__animation7");
            setTimeout(function(){
                elementsToRemoveAnimation.forEach((el) => {
                    el.classList.add("img_animation");
                    el.classList.remove("Remove__animation7");
                });
            const elementsToRemoveImgAnimation = document.querySelectorAll(".Remove_img_animation7");
                elementsToRemoveImgAnimation.forEach((el) => {
                    el.classList.add("img_animation");
                    el.classList.remove("Remove_img_animation7");
                });
           }, 200); 
           
        }
    });
});

const actionable7 = document.querySelectorAll(".Remove__animation7");
actionable7.forEach((el) => observer7.observe(el));

const observer8 = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        if (entry.isIntersecting) {
            const elementsToRemoveAnimation = document.querySelectorAll(".Remove__animation8");
            setTimeout(function(){
                elementsToRemoveAnimation.forEach((el) => {
                    el.classList.add("animation");
                    el.classList.remove("Remove__animation8");
                });
           }, 200); 
           
        }
    });
});

const actionable8 = document.querySelectorAll(".Remove__animation8");
actionable8.forEach((el) => observer8.observe(el));

const observer9 = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        if (entry.isIntersecting) {
            const elementsToRemoveAnimation = document.querySelectorAll(".Remove__animation9");
            setTimeout(function(){
                elementsToRemoveAnimation.forEach((el) => {
                    el.classList.add("img_animation");
                    el.classList.remove("Remove__animation9");
                });
            const elementsToRemoveImgAnimation = document.querySelectorAll(".Remove_img_animation9");
                elementsToRemoveImgAnimation.forEach((el) => {
                    el.classList.add("img_animation");
                    el.classList.remove("Remove_img_animation9");
                });
           }, 200); 
           
        }
    });
});

const actionable9 = document.querySelectorAll(".Remove__animation9");
actionable9.forEach((el) => observer9.observe(el));