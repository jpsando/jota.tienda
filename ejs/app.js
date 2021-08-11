const express = require('express');
const path = require('path');
const { forEach } = require('./utils/dataSite.js');
const dataSite = require('./utils/dataSite.js');
const app = express();

app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.use(express.static(path.join(__dirname, 'public')))

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

app.get('/textil', (req, res)=>{
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
});

app.get('/papel', (req, res)=>{
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
});

app.get('/digital', (req, res)=>{
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
});

//ENDPOINT PRODUCTO TEXTIL
app.get('/textil/:id', (req, res)=>{
    const _id = req.params.id;
    let product;
    for (let i = 0; i < productsTextil.length; i++) {
        if(productsTextil[i].id == _id) product = productsTextil[i];
    }
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
//ENDPOINT PRODUCTO DIGITAL
app.get('/digital/:id', (req, res)=>{
    const _id = req.params.id;
    let product;
    for (let i = 0; i < productsDigital.length; i++) {
        if(productsDigital[i].id == _id) product = productsDigital[i];
    }
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
app.get('/papel/:id', (req, res)=>{
    const _id = req.params.id;
    let product;
    for (let i = 0; i < productsPapel.length; i++) {
        if(productsPapel[i].id == _id) product = productsPapel[i];
    }
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

app.listen(3000, () => {
    console.log("Funcionando en el puerto 3000");
});