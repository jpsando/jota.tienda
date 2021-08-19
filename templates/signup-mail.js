'use strict';
const nodemailer = require('nodemailer');
require('dotenv').config();

this.enviarmail = (data) => {
    let transporter = nodemailer.createTransport({
        smtp: 'smtp.gmail.com',
        port: '587',
        service: 'gmail',
        auth: {
            user: process.env.EMAIL,
            pass: process.env.PASS
        }
    });
    let mail_options = {
        from: 'no-reply@jotatienda.com',
        to: process.env.EMAIL,
        subject: `Bienvenido ${data.name}`,
        html: `
            <table border="0" cellpadding="0" cellspacing="0" width="600px" background-color="#2d3436" bgcolor="#2d3436">
            <tr height="200px">  
                <td bgcolor="" width="600px">
                    <h1 style="color: #fff; text-align:center">Bienvenido</h1>
                    <p  style="color: #fff; text-align:center">
                        <span style="color: #e84393">${data.name}</span> 
                        a la aplicación
                    </p>
                </td>
            </tr>
            <tr bgcolor="#fff">
                <td style="text-align:center">
                    <p style="color: #000">¡Un mundo de servicios a su disposición!</p>
                </td>
            </tr>
            </table>
        
        `
    };
    transporter.sendMail(mail_options, (error, info) => {
        if (error) {
            console.log(error);
        } else {
            console.log('El correo se envío correctamente ' + info.response);
        }
    });
};
module.exports = this;