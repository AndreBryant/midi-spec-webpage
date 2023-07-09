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
            //Open nav links
            hamburgerIcon.src = '/img/X.svg';
            navLinks.style.display = 'block';
        } else {
            //closed nav links
            hamburgerIcon.src = '/img/hamburger.svg';
            navLinks.style.display = 'none';
            if(navLinkClicked){
                window.scrollTo(0,window.scrollY+150);
                navLinkClicked = false;
            }
        }

    })
})