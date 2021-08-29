document.addEventListener('DOMContentLoaded', function () {
    //Labels focus animation 
    let $labelsForm = document.querySelectorAll('.consult--form__label .form--input');
    $labelsForm.forEach(el => {
        el.addEventListener('focusin', function(){
            this.parentNode.querySelector('span').classList.add('active');
            //console.log(this);
        });
        el.addEventListener('focusout', function(){
            if(this.value == ''){
                this.parentNode.querySelector('span').classList.remove('active');
                //console.log(this);
            }
        });
    });

}, false);