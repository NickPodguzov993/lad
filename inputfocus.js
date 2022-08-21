const formElement = document.getElementById('formElement');


formElement.onfocus = function(ev) {

   const activeElement = formElement.querySelector('.focused');
    if (activeElement) {
        activeElement.classList.remove('focused');
    }
    ev.target.classList.add('focused');
};

formElement.onblur = function(ev) {
    const activeElement = formElement.querySelector('.focused');
    if (activeElement) {
        activeElement.classList.remove('focused');
    }
    ev.target.classList.remove('focused');
};

