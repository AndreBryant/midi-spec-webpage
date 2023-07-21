window.addEventListener('load', () => {
    var darkToggle = document.querySelector('.toggler');
    var all = document.querySelector('.the-forbidden')
    var value = 0;
    darkToggle.addEventListener('click', () => {
        if(!value){
            all.style.filter=`invert(${value++})`;
        } else {
            all.style.filter=`invert(${value--})`;
        }
    })

    // Add event listeners for mouse events
    darkToggle.addEventListener('mousedown', () => {
        darkToggle.classList.add('active'); // Apply a class when the button is pressed
        setTimeout(()=>{darkToggle.classList.remove('active')}
        ,1000)
    });

})