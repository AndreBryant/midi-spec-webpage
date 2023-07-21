window.addEventListener('load', () => {
    var darkToggle = document.querySelector('.toggler');
    var all = document.querySelector('html');
    var value = Number(all.style.filter.charAt(all.style.filter.length-1));

    darkToggle.addEventListener('click', () => {
        if(!value){
            all.style.filter=`invert(${value++})`;
        } else {
            all.style.filter=`invert(${value--})`;
        }
    })
    
    darkToggle.addEventListener('mousedown', () => {
        darkToggle.classList.add('active'); 
        setTimeout(()=>{darkToggle.classList.remove('active')}
        ,1000)
    });

})