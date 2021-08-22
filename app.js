const express = require('express');
const nodemailer = require("nodemailer");
const multiparty = require("multiparty");
require("dotenv").config();
const cors = require('cors');
const path = require('path');
const dataSite = require('./utils/dataSite.js');
const app = express();
const port = process.env.PORT || 3000;

app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.use(cors({ origin: "*" }));
app.use(express.static(path.join(__dirname, 'public')))

// if(process.env.NODE_ENV === 'production'){
//     const path  =  require('path');
//     app.get('/*',(req,res)=>{
//         res.sendfile(path.resolve(__dirname,'client','build','index.html'))
//     })
// }

//Separamos los array de dataSite en los hijos
let products = dataSite[0].products,
    navigator = dataSite[0].navigator,
    home = dataSite[0].home,
    footer = dataSite[0].footer;

//Separamos los array de los productos por categoria
let productsTextil = [],
    productsPapel = [],
    productsDigital = [];

for (let i = 0; i < products.length; i++) {
    if (products[i].category === 'textil') {
        productsTextil.push(products[i])
    }
}
for (let i = 0; i < products.length; i++) {
    if (products[i].category === 'papel') {
        productsPapel.push(products[i])
    }
}
for (let i = 0; i < products.length; i++) {
    if (products[i].category === 'digital') {
        productsDigital.push(products[i])
    }
}
//Separamos los productos que sean "destacados home"
let productsTextilHome = [],
    productsPapelHome = [],
    productsDigitalHome = [];

for (let i = 0; i < productsTextil.length; i++) {
    if (productsTextil[i].destacado) {
        productsTextilHome.push(productsTextil[i])
    }
}
for (let i = 0; i < productsPapel.length; i++) {
    if (productsPapel[i].destacado) {
        productsPapelHome.push(productsPapel[i])
    }
}
for (let i = 0; i < productsDigital.length; i++) {
    if (productsDigital[i].destacado) {
        productsDigitalHome.push(productsDigital[i])
    }
}

app.get('', (req, res)=>{
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
});

app.get('/:category', (req, res)=>{
    const _category = req.params.category;
    if(_category == 'textil'){
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
    }else if(_category == 'papel'){
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
    }else if(_category == 'digital'){
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
    }else{
        res.send('La pagina solicitada no existe.');
    }
});

//ENDPOINT PRODUCTO 
app.get('/:category/:id', (req, res)=>{
    const _id = req.params.id;
    const _category = req.params.category;
    let product,
        products;
    if (_category == 'textil'){
        products = productsTextil;
    }else if(_category == 'papel'){
        products = productsPapel;
    }else if(_category == 'digital'){
        products = productsDigital;
    }
    products.forEach(e => {
        if(e.id == _id) product = e;
    });
    if(product){
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
    }else{
        res.send('El producto no existe.');
    }
});

//ENDPOINT PRODUCTO PAPEL
app.get('/consulta/:id', (req, res)=>{

    const _id = req.params.id;
    let product;

    res.sendFile(process.cwd() + "/consulta/"+_id);

    for (let i = 0; i < products.length; i++) {
        if(products[i].id == _id) product = products[i];
    }
    if(product){
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
        res.send('El producto no existe.');
    }
});

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

app.post('/send', (req, res) => {
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
  
app.listen(port, () => {
    console.log("Funcionando en el puerto 3000");
});