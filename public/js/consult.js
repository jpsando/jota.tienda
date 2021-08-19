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

    //Form send functions
    const form = document.getElementById('contactform'); 

    const formEvent = form.addEventListener('submit', (event) => {
        event.preventDefault();
        let mail = new FormData(form);
        let strigMail = JSON.stringify(mail);

        sendMail(strigMail);
    })

    const sendMail = (mail) => {
        fetch('http://localhost:3000/send', {
            method: "post", //2.
            body: mail, //3.
        
        }).then((response) => {
            return response.json();
        }).catch(err => {
            console.error("ERROR: ", err.message)
        });
    };

}, false);