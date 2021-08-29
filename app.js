const express = require('express');
const nodemailer = require("nodemailer");
const multiparty = require("multiparty");
require("dotenv").config();
const cors = require('cors');
const path = require('path');
const dataSite = require('./utils/dataSite.js');
const productsData = require('./utils/products.js');
const app = express();
const port = process.env.PORT || 3000;

app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.use(cors({ origin: "*" }));
app.use(express.static(path.join(__dirname, 'public')))


//Separamos los array de dataSite en los hijos
let navigator = dataSite[0].navigator,
    home = dataSite[0].home,
    footer = dataSite[0].footer;

//ENDPOINT HOME
app.get('', (req, res)=>{

    productsData.getAllProducts((error, data)=>{
        if(error){
            return res.send({
                error
            })
        }

        const JSONBody = JSON.parse(data);

        const productsTextilHome = JSONBody.filter((product) => product.category === 'textil' && product.destacado);
        const productsPapelHome = JSONBody.filter((product) => product.category === 'papel' && product.destacado);
        const productsDigitalHome = JSONBody.filter((product) => product.category === 'digital' && product.destacado);
        
        res.render('index',{
            title: 'Jota Tienda',
            template: 'home',
            navigator,
            footer,
            home,
            productsTextilHome,
            productsPapelHome,
            productsDigitalHome
        });
    })
});

app.post('/send', (req, res) => {

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

    //1.
    let form = new multiparty.Form();
    let data = {};
    form.parse(req, function (err, fields) {
        console.log(fields);
        Object.keys(fields).forEach(function (property) {
        data[property] = fields[property].toString();
        });

        //2. You can configure the object however you want

        const message = `${data.name} te envio una consulta!\nPodes contactarle a ${data.email} o ${data.phone}.\n${!data.consult ? '' : data.consult} \nEl ID del producto que le interesa es: ${data.productId} \nEl nobre del producto que le interesa es: ${data.productName} \nLa imagen del producto que le interesa es: ${data.productImage}`;

        const mail = {
            from: data.email,
            to: process.env.EMAIL,
            //subject: data.subject,
            subject: 'Mail desde la web Jota Tienda',
            text: message,
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
});
//ENDPOINT SUMARIO DE PRODUCTOS POR CATEGORIA
app.get('/:category', (req, res)=>{
    const _category = req.params.category;
    if(_category == 'textil'){
        productsData.getAllProducts((error, data)=>{
            if(error){
                return res.send({
                    error
                })
            }
            
            const JSONBody = JSON.parse(data);
            const productsTextil = JSONBody.filter((product) => product.category === 'textil');    
            
            res.render('pages/summary',{
                title: 'Jota Tienda | Textil',
                template: 'section',
                sectionTitle: 'Textil',
                sectionDescription: 'Les doy la bienvenida a mi espacio de creación. Todas las obras acá compartidas fueron hechas de manera artesanal.',
                page: "textil",
                navigator,
                footer,
                products: productsTextil
            });
        })
    }else if(_category == 'papel'){
        productsData.getAllProducts((error, data)=>{
            if(error){
                return res.send({
                    error
                })
            }
    
            const JSONBody = JSON.parse(data);
            const productsPapel = JSONBody.filter((product) => product.category === 'papel');   
            
            res.render('pages/summary',{
                title: 'Jota Tienda | Papel',
                template: 'section',
                sectionTitle: 'Papel',
                sectionDescription: 'Grabados, serigrafías, collages e ilustraciones a mano alzada.',
                page: "papel",
                navigator,
                footer,
                products: productsPapel
            });
        })
    }else if(_category == 'digital'){

        productsData.getAllProducts((error, data)=>{
            if(error){
                return res.send({
                    error
                })
            }
    
            const JSONBody = JSON.parse(data);
            const productsDigital = JSONBody.filter((product) => product.category === 'digital');   
            res.render('pages/summary',{
                title: 'Jota Tienda | Digital',
                template: 'section',
                sectionTitle: 'Digital',
                sectionDescription: 'Les doy la bienvenida a mi espacio de creación. Todas las obras acá compartidas fueron hechas de manera digital.',
                page: "digital",
                navigator,
                footer,
                products: productsDigital
            });
        })
    }else{
        res.send('La pagina solicitada no existe.');
    }
});

//ENDPOINT FICHA PRODUCTO y CONSULTAR PRODUCTO
app.get('/:category/:id', (req, res)=>{
    const _id = req.params.id;
    const _category = req.params.category;
    let product;
   
    productsData.getAllProducts((error, data)=>{
        if(error){
            return res.send({
                error
            })
        }

        const products = JSON.parse(data);
        
        products.forEach(e => {
            if(e.id == _id) product = e;
        }); 
        if (_category == 'consulta'){
            res.render('pages/consult',{
                title: `Jota Tienda | Consulta por ${product.name}`,
                template: 'consult',
                productName: product.name,
                productImage: product.images[0],
                productId: product.id,
                page: "consult",
                footer,
                navigator
            });
        }else{
            res.render('pages/product',{
                title: `Jota Tienda | ${product.name}`,
                template: 'product',
                productTitle: product.name,
                productImages: product.images,
                productDescription: product.description,
                productInfo: product.info,
                productSize: product.size,
                productDate: product.date,
                productId: product.id,
                page: "product",
                footer,
                navigator
            });
        }
    })
});

  
app.listen(port, () => {
    console.log("Funcionando en el puerto 3000");
});