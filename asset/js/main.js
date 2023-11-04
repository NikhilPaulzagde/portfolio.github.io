var typed= new Typed(".text", {
    strings: ["Data Analyst"," Data Scientist"],
    typeSpeed:100,
    backSpeed:100,
    backDelay:1000,
    loop:true
});
const menuButton = document.querySelector('.menu-button');
    const navbar = document.querySelector('.navbar');

    menuButton.addEventListener('click', () => {
        navbar.classList.toggle('active');
    });


