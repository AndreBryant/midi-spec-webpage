window.addEventListener('scroll', ()=>{
    var nav = document.querySelector('.nav-bar');    
    nav.classList.toggle('sticky',window.scrollY > 0);

    var hamburger = document.getElementById('hamburger');
    hamburger.classList.toggle('hidden-burger',window.scrollY<=0);
})