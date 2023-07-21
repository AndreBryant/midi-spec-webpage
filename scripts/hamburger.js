window.addEventListener('load', ()=>{
    var hambruger = document.getElementById('hamburger');
    var hamburgerIcon = document.getElementById('hamburger-icon');
    var navLinks = document.getElementById('nav-links');
    var navLinkClicked = false;

    navLinks.addEventListener('click',()=>{
        navLinkClicked = true;
    })

    hambruger.addEventListener('click', ()=>{
        if(hamburgerIcon.src.endsWith('hamburger.svg')){
            hamburgerIcon.src = './img/X.svg';
            navLinks.classList.add('open');
        } else {
            hamburgerIcon.src = './img/hamburger.svg';
            navLinks.classList.remove('open');
            if(navLinkClicked){
                window.scrollTo(0,window.scrollY+150);
                navLinkClicked = false;
            }
        }
    })
})