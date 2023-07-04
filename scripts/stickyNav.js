window.addEventListener('scroll', ()=>{
    var nav = document.querySelector('.nav-bar');    
    nav.classList.toggle('sticky',window.scrollY > 0);
})