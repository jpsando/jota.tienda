
const nodemailer = require("nodemailer");
const multiparty = require("multiparty");
require("dotenv").config();
const cors = require('cors');
const path = require('path');

document.addEventListener('DOMContentLoaded', function () {
    //Labels focus animation 
    let $labelsForm = document.querySelectorAll('.consult--form__label .form--input');
    $labelsForm.forEach(el => {
        el.addEventListener('focusin', function(){
            this.parentNode.querySelector('span').classList.add('active');
            console.log(this);
        });
        el.addEventListener('focusout', function(){
            if(this.value == ''){
                this.parentNode.querySelector('span').classList.remove('active');
                console.log(this);
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
        fetch('https://tiendajota.herokuapp.com/send', {
            method: "POST", //2.
            body: mail, //3.
        
        }).then((response) => {
            return response.json();
        });
    };




    const transporter = nodemailer.createTransport({
        host: "smtp.gmail.com",
        port: 587,
        auth: {
        user: process.env.EMAIL,
        pass: process.env.PASS,
        },
    });
    transporter.verify(function (error, success) {
        if (error) {
        console.log(error);
        } else {
        console.log("Server is ready to take our messages");
        }
    });


}, false);


    //1.
    let form = new multiparty.Form();
    let data = {};
    form.parse(req, function (err, fields) {
        console.log(fields);
        Object.keys(fields).forEach(function (property) {
        data[property] = fields[property].toString();
        });

        //2. You can configure the object however you want
        const mail = {
        from: data.name,
        to: process.env.EMAIL,
        //subject: data.subject,
        subjet: 'Mail desde la web Jota Tienda',
        text: `${data.name} <${data.email}> <${data.phone}> \n${data.consult} \n${data.productId} \n${data.productName} \n${data.productImage}`,
        };

        //3.
        transporter.sendMail(mail, (err, data) => {
        if (err) {
            console.log(err);
            res.status(500).send("Something went wrong.");
        } else {
            res.status(200).send("Email successfully sent to recipient!");
        }
        });
    });