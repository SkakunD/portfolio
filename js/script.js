let btnUp = document.querySelector('.btn-up').style;

setInterval(function (){
    btnUp.backgroundColor = btnUp.backgroundColor == 'blueviolet' ? 'mediumslateblue' : 'blueviolet';
    btnUp.borderColor = btnUp.backgroundColor;
}, 1000);