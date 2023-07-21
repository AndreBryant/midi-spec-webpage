window.addEventListener('load', () => {
    var darkToggle = document.querySelector('.toggler');
    var all = document.querySelector('html');
    var value = localStorage.getItem('value');

    value = (value !== null)? parseInt(value) : 0;

    darkToggle.addEventListener('click', () => {
        value = (value === 0)? 1:0;
        all.style.filter = `invert(${value})`;
        localStorage.setItem('value', value);
    })
    
    darkToggle.addEventListener('mousedown', () => {
        darkToggle.classList.add('active'); 
        setTimeout(()=>{darkToggle.classList.remove('active')}
        ,1000)
    });
    
    all.style.filter = `invert(${value})`;
})