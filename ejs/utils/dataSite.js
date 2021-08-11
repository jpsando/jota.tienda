// const request = require('postman-request');

// const getAllProducts = (callback) => {
//     request('https://fakestoreapi.com/products', (error, res, body) => {
//         if(error) return callback(error, undefined);
        
//         if (res){
//             if(body) return callback(undefined, body);
//             callback("No se encontraron productos.", undefined);
//         }
//     });
// }

// module.exports = {
//     getAllProducts
// };
const dataSite = [
    {
        navigator: [
            {
                name: 'Papel',
                order: 0,
                href: '/papel',
                class: 'nav-link-papel'
            },
            {
                name: 'Textil',
                order: 1,
                href: '/textil',
                class: 'nav-link-textil'
            },
            {
                name: 'Digital',
                order: 2,
                href: '/digital',
                class: 'nav-link-digital'
            },
            {
                name: 'Portfolio',
                order: 3,
                href: 'http://www.jotaschneider.com/',
                class: 'nav-link-portfolio'
            }
        ],
        footer: {
            text: '© Jota Schneider. Todos los derechos reservados. <br> Por favor no reproducir sin el consentimiento expreso de Jacqueline Schneider.',
            linkFacebook: 'https://www.facebook.com/tinta.frida',
            linkInstagram: 'https://www.instagram.com/jotaschneider/',
            linkLinkedin: 'https://www.linkedin.com/in/jotaschneider/'
        },
        home: {
            featuredModule: {
                featuredVideo: 'video/home.mp4',
                quoteText: '“Las personas ven en el mundo lo que llevan en su corazón”.',
                quoteAuthor: 'Johann Wolfgang Von Goethe',
                featuredText: 'Les doy la bienvenida a mi espacio de creación. Todas las obras acá compartidas fueron hechas de manera artesanal, respetando los tiempos de cada proceso y con una mirada consciente y respetuosa hacia las ideas involucradas.<br>Recorrelo con libertad y ante cualquier duda, escribime a <a href="mailto:hola@jotaschneider">hola@jotaschneider</a>.com<br>¡Muchas gracias!'
            },
            papelModule: {
                icon: 'img/digital/icono-home.jpg',
                title: 'Papel',
                text: 'Les doy la bienvenida a mi espacio de creación. Todas las obras acá compartidas fueron hechas de manera artesanal.',
                link: '/papel'
            },
            textilModule: {
                icon: 'img/textil/icono-home.jpg',
                title: 'Textil',
                text: 'Les doy la bienvenida a mi espacio de creación. Todas las obras acá compartidas fueron hechas de manera artesanal.',
                link: '/textil'
            },
            digitalModule:{
                icon: 'img/digital/icono-home.jpg',
                title: 'Digital',
                text: 'Les doy la bienvenida a mi espacio de creación. Todas las obras acá compartidas fueron hechas de manera artesanal.',
                link: '/digital'
            },
            externosModule:{
                image: 'img/banner-externos-foto.jpg',
                text: 'También podés encontrar otra gran variedad de productos ilustrados en dos plataformas online de venta de merchandise. Ambas cuentan con envío en Argentina y otras partes del mundo!',
                linksExternos: [
                    {
                        name: 'Society6',
                        link: 'https://society6.com/jotaschneider',
                    },
                    {
                        name: 'Flashcookie',
                        link: 'https://jotaschneider.flashcookie.com/',
                    }
                ]
            }
        },
        products: [
            {
                id: 1,
                category: 'digital',
                name: 'Serie La playa: Ballena austral',
                description: 'Ilustración y collage digital. Full color.',
                info: 'Esta ilustración forma parte de la serie "La Playa", desarrollada en 2019 e inspirada en la costa de Ecuador y Perú.',
                size: 'A4, A3 o a convenir',
                date: '2020',
                destacado: false,
                imageHome: '/img/digital/home/BALLENA.jpg',
                imageSumario: '/img/digital/sumario/BALLENA.jpg',
                images: ['/img/digital/ficha/BALLENA1.jpg', '/img/digital/ficha/BALLENA2.jpg']
            },
            {
                id: 2,
                category: 'digital',
                name: 'Serie Ecosistemas: El bosque',
                description: 'Ilustración digital realizada con procreate. Full color.',
                info: 'Esta ilustración forma parte de la serie "Ecosistemas", desarrollada en 2020.',
                size: 'A4, A3 o a convenir',
                date: '2020',
                destacado: false,
                imageHome: '/img/digital/home/BOSQUE.jpg',
                imageSumario: '/img/digital/sumario/BOSQUE.jpg',
                images: ['/img/digital/ficha/BOSQUE1.jpg', '/img/digital/ficha/BOSQUE2.jpg', '/img/digital/ficha/BOSQUE3.jpg']
            },
            {
                id: 3,
                category: 'digital',
                name: 'Serie La playa: El camarón',
                description: 'Ilustración y collage digital. Full color.',
                info: 'Esta ilustración forma parte de la serie "La Playa", desarrollada en 2019 e inspirada en la costa de Ecuador y Perú.',
                size: 'A4, A3 o a convenir',
                date: '2018',
                destacado: false,
                imageHome: '/img/digital/home/CAMARON.jpg',
                imageSumario: '/img/digital/sumario/CAMARON.jpg',
                images: ['/img/digital/ficha/CAMARON1.jpg', '/img/digital/ficha/CAMARON2.jpg']
            },
            {
                id: 4,
                category: 'digital',
                name: 'Serie Zodiac: Cancer',
                description: 'Ilustración digital realizada con procreate. Full color.',
                info: 'Esta ilustación forma parte de la serie "Zodiac", desarrollada durante el año 2020 e inspirada en los 12 signos del zodíaco.',
                size: 'A4, A3 o a convenir',
                date: '2020',
                destacado: true,
                imageHome: '/img/digital/home/CANCER.jpg',
                imageSumario: '/img/digital/sumario/CANCER.jpg',
                images: ['/img/digital/ficha/CANCER1.jpg', '/img/digital/ficha/CANCER2.jpg']
            },
            {
                id: 5,
                category: 'digital',
                name: 'Serie Ecosistemas: La ciudad',
                description: 'Ilustración digital realizada con procreate. Full color.',
                info: 'Esta ilustración forma parte de la serie "Ecosistemas", desarrollada en 2020.',
                size: 'A4, A3 o a convenir',
                date: '2020',
                destacado: false,
                imageHome: '/img/digital/home/CIUDAD.jpg',
                imageSumario: '/img/digital/sumario/CIUDAD.jpg',
                images: ['/img/digital/ficha/CIUDAD1.jpg', '/img/digital/ficha/CIUDAD2.jpg']
            },
            {
                id: 6,
                category: 'digital',
                name: 'Serie La playa: Corales',
                description: 'Ilustración y collage digital. Full color.',
                info: 'Esta ilustración forma parte de la serie "La Playa", desarrollada en 2019 e inspirada en la costa de Ecuador y Perú.',
                size: 'A4, A3 o a convenir',
                date: '2018',
                destacado: false,
                imageHome: '/img/digital/home/CORAL.jpg',
                imageSumario: '/img/digital/sumario/CORAL.jpg',
                images: ['/img/digital/ficha/CORAL1.jpg', '/img/digital/ficha/CORAL2.jpg']
            },
            {
                id: 7,
                category: 'digital',
                name: 'Serie Ecosistemas: El desierto',
                description: 'Ilustración digital realizada con procreate. Full color.',
                info: 'Esta ilustración forma parte de la serie "Ecosistemas", desarrollada en 2020.',
                size: 'A4, A3 o a convenir',
                date: '2020',
                destacado: false,
                imageHome: '/img/digital/home/DESIERTO.jpg',
                imageSumario: '/img/digital/sumario/DESIERTO.jpg',
                images: ['/img/digital/ficha/DESIERTO1.jpg', '/img/digital/ficha/DESIERTO2.jpg']
            },
            {
                id: 8,
                category: 'digital',
                name: 'Encuentro',
                description: 'Ilustración digital realizada con procreate. Full color.',
                info: '',
                size: 'A4, A3 o a convenir',
                date: '2017',
                destacado: false,
                imageHome: '/img/digital/home/ENCUENTRO_1.jpg',
                imageSumario: '/img/digital/sumario/ENCUENTRO_1.jpg',
                images: ['/img/digital/ficha/ENCUENTRO1.jpg', '/img/digital/ficha/ENCUENTRO2.jpg', '/img/digital/ficha/ENCUENTRO3.jpg']
            },
            {
                id: 9,
                category: 'digital',
                name: 'Serie Zodiac: Escorpio',
                description: 'Ilustración digital realizada con procreate. Full color.',
                info: 'Esta ilustación forma parte de la serie "Zodiac", desarrollada durante el año 2020 e inspirada en los 12 signos del zodíaco.',
                size: 'A4, A3 o a convenir',
                date: '2020',
                destacado: true,
                imageHome: '/img/digital/home/ESCORPIO.jpg',
                imageSumario: '/img/digital/sumario/ESCORPIO.jpg',
                images: ['/img/digital/ficha/ESCORPIO1.jpg', '/img/digital/ficha/ESCORPIO2.jpg']
            },
            {
                id: 10,
                category: 'digital',
                name: 'Serie Zodiac: Geminis',
                description: 'Ilustración digital realizada con procreate. Full color.',
                info: 'Esta ilustación forma parte de la serie "Zodiac", desarrollada durante el año 2020 e inspirada en los 12 signos del zodíaco.',
                size: 'A4, A3 o a convenir',
                date: '2020',
                destacado: true,
                imageHome: '/img/digital/home/GEMINIS.jpg',
                imageSumario: '/img/digital/sumario/GEMINIS.jpg',
                images: ['/img/digital/ficha/GEMINIS1.jpg', '/img/digital/ficha/GEMINIS2.jpg']
            },
            {
                id: 11,
                category: 'digital',
                name: 'La grulla',
                description: 'Ilustración y collage digital. Full color.',
                info: 'Esta ilustración gano el concurso "Aves del sur" de la escuela argentina de ilustración Jose Sanabria en el año 2021.',
                size: 'A4, A3 o a convenir',
                date: '2020',
                destacado: false,
                imageHome: '/img/digital/home/GRULLA.jpg',
                imageSumario: '/img/digital/sumario/GRULLA.jpg',
                images: ['/img/digital/ficha/GRULLA1.jpg', '/img/digital/ficha/GRULLA2.jpg']
            },
            {
                id: 12,
                category: 'digital',
                name: 'Serie La playa: Iguana',
                description: 'Ilustración y collage digital. Full color.',
                info: 'Esta ilustración forma parte de la serie "La Playa", desarrollada en 2019 e inspirada en la costa de Ecuador y Perú.',
                size: 'A4, A3 o a convenir',
                date: '2018',
                destacado: false,
                imageHome: '/img/digital/home/IGUANA.jpg',
                imageSumario: '/img/digital/sumario/IGUANA.jpg',
                images: ['/img/digital/ficha/IGUANA1.jpg', '/img/digital/ficha/IGUANA2.jpg']
            },
            {
                id: 13,
                category: 'digital',
                name: 'Serie Ecosistemas: La jungla',
                description: 'Ilustración digital realizada con procreate. Full color.',
                info: 'Esta ilustración forma parte de la serie "Ecosistemas", desarrollada en 2020.',
                size: 'A4, A3 o a convenir',
                date: '2020',
                destacado: false,
                imageHome: '/img/digital/home/JUNGLA.jpg',
                imageSumario: '/img/digital/sumario/JUNGLA.jpg',
                images: ['/img/digital/ficha/JUNGLA1.jpg', '/img/digital/ficha/JUNGLA2.jpg']
            },
            {
                id: 14,
                category: 'digital',
                name: 'Serie Zodiac: Leo',
                description: 'Ilustración digital realizada con procreate. Full color.',
                info: 'Esta ilustación forma parte de la serie "Zodiac", desarrollada durante el año 2020 e inspirada en los 12 signos del zodíaco.',
                size: 'A4, A3 o a convenir',
                date: '2020',
                destacado: false,
                imageHome: '/img/digital/home/LEO.jpg',
                imageSumario: '/img/digital/sumario/LEO.jpg',
                images: ['/img/digital/ficha/LEO1.jpg', '/img/digital/ficha/LEO2.jpg']
            },
            {
                id: 15,
                category: 'digital',
                name: 'Serie Ecosistemas: El manglar',
                description: 'Ilustración digital realizada con procreate. Full color.',
                info: 'Esta ilustración forma parte de la serie "Ecosistemas", desarrollada en 2020.',
                size: 'A4, A3 o a convenir',
                date: '2020',
                destacado: false,
                imageHome: '/img/digital/home/MANGLAR.jpg',
                imageSumario: '/img/digital/sumario/MANGLAR.jpg',
                images: ['/img/digital/ficha/MANGLAR1.jpg', '/img/digital/ficha/MANGLAR2.jpg']
            },
            {
                id: 16,
                category: 'digital',
                name: 'Serie Ecosistemas: El océano',
                description: 'Ilustración digital realizada con procreate. Full color.',
                info: 'Esta ilustración forma parte de la serie "Ecosistemas", desarrollada en 2020.',
                size: 'A4, A3 o a convenir',
                date: '2020',
                destacado: true,
                imageHome: '/img/digital/home/OCEANO.jpg',
                imageSumario: '/img/digital/sumario/OCEANO.jpg',
                images: ['/img/digital/ficha/OCEANO1.jpg', '/img/digital/ficha/OCEANO2.jpg', '/img/digital/ficha/OCEANO2.jpg']
            },
            {
                id: 17,
                category: 'digital',
                name: 'El ciclo, parte I',
                description: 'Ilustración y collage digital. Full color.',
                info: 'Esta ilustración fue inspirada en el texto "Creación” de Bhajju Shyam y Gyta Wolf. ',
                size: 'A4, A3 o a convenir',
                date: '2021',
                destacado: true,
                imageHome: '/img/digital/home/OSOS.jpg',
                imageSumario: '/img/digital/sumario/OSOS.jpg',
                images: ['/img/digital/ficha/OSOS1.jpg', '/img/digital/ficha/OSOS2.jpg', '/img/digital/ficha/OSOS3.jpg']
            }, 
            {
                id: 18,
                category: 'digital',
                name: 'El ciclo, parte 2',
                description: 'Ilustración y collage digital. Full color.',
                info: 'Esta ilustración fue inspirada en el texto "Creación” de Bhajju Shyam y Gyta Wolf.',
                size: 'A4, A3 o a convenir',
                date: '2021',
                destacado: false,
                imageHome: '/img/digital/home/OSOS2.jpg',
                imageSumario: '/img/digital/sumario/OSOS2.jpg',
                images: ['/img/digital/ficha/OSOS2_1.jpg', '/img/digital/ficha/OSOS2_2.jpg', '/img/digital/ficha/OSOS2_3.jpg']
            },
            {
                id: 19,
                category: 'digital',
                name: 'Serie La playa: Peces',
                description: 'Ilustración y collage digital. Full color.',
                info: 'Esta ilustración forma parte de la serie "La Playa", desarrollada en 2019 e inspirada en la costa de Ecuador y Perú.',
                size: 'A4, A3 o a convenir',
                date: '2018',
                destacado: false,
                imageHome: '/img/digital/home/PECES.jpg',
                imageSumario: '/img/digital/sumario/PECES.jpg',
                images: ['/img/digital/ficha/PECES1.jpg', '/img/digital/ficha/PECES2.jpg']
            }, 
            {
                id: 20,
                category: 'digital',
                name: 'Serie La playa: El piquero azul',
                description: 'Ilustración y collage digital. Full color.',
                info: 'Esta ilustración forma parte de la serie "La Playa", desarrollada en 2019 e inspirada en la costa de Ecuador y Perú.',
                size: 'A4, A3 o a convenir',
                date: '2019',
                destacado: false,
                imageHome: '/img/digital/home/PIQUERO.jpg',
                imageSumario: '/img/digital/sumario/PIQUERO.jpg',
                images: ['/img/digital/ficha/PIQUERO1_1.jpg', '/img/digital/ficha/PIQUERO1_2.jpg']
            }, 
            {
                id: 21,
                category: 'digital',
                name: 'Serie La playa: Isla de la Plata',
                description: 'Ilustración y collage digital. Full color.',
                info: 'Esta ilustración forma parte de la serie "La Playa", desarrollada en 2019 e inspirada en la costa de Ecuador y Perú.',
                size: 'A4, A3 o a convenir',
                date: '2019',
                destacado: true,
                imageHome: '/img/digital/home/PIQUERO2.jpg',
                imageSumario: '/img/digital/sumario/PIQUERO2.jpg',
                images: ['/img/digital/ficha/PIQUERO2_1.jpg', '/img/digital/ficha/PIQUERO2_1.jpg']
            },
            {
                id: 22,
                category: 'digital',
                name: 'Serie Zodiac: Piscis',
                description: 'Ilustración digital realizada con procreate. Full color.',
                info: 'Esta ilustación forma parte de la serie "Zodiac", desarrollada durante el año 2020 e inspirada en los 12 signos del zodíaco.',
                size: 'A4, A3 o a convenir',
                date: '2020',
                destacado: false,
                imageHome: '/img/digital/home/PISCIS.jpg',
                imageSumario: '/img/digital/sumario/PISCIS.jpg',
                images: ['/img/digital/ficha/PISCIS1.jpg', '/img/digital/ficha/PISCIS2.jpg']
            }, 
            {
                id: 23,
                category: 'digital',
                name: 'Serie La playa: La playa',
                description: 'Ilustración y collage digital. Full color.',
                info: 'Esta ilustración forma parte de la serie "La Playa", desarrollada en 2019 e inspirada en la costa de Ecuador y Perú.',
                size: 'A4, A3 o a convenir',
                date: '2019',
                destacado: false,
                imageHome: '/img/digital/home/PLAYA.jpg',
                imageSumario: '/img/digital/sumario/PLAYA.jpg',
                images: ['/img/digital/ficha/PLAYA1.jpg', '/img/digital/ficha/PLAYA2.jpg']
            },
            {
                id: 24,
                category: 'digital',
                name: 'Print is not dead',
                description: 'Ilustración digital realizada con procreate. Full color.',
                info: '#printisnotdead',
                size: 'A4, A3 o a convenir',
                date: '2020',
                destacado: false,
                imageHome: '/img/digital/home/PRINT.jpg',
                imageSumario: '/img/digital/sumario/PRINT.jpg',
                images: ['/img/digital/ficha/PRINT.jpg']
            }, 
            {
                id: 25,
                category: 'digital',
                name: 'Serie Zodiac: Tauro',
                description: 'Ilustración digital realizada con procreate. Full color.',
                info: 'Esta ilustación forma parte de la serie "Zodiac", desarrollada durante el año 2020 e inspirada en los 12 signos del zodíaco.',
                size: 'A4, A3 o a convenir',
                date: '2020',
                destacado: false,
                imageHome: '/img/digital/home/TAURO.jpg',
                imageSumario: '/img/digital/sumario/TAURO.jpg',
                images: ['/img/digital/ficha/TAURO1.jpg', '/img/digital/ficha/TAURO2.jpg']
            },
            {
                id: 26,
                category: 'papel',
                name: 'Titulo de la obra 18',
                description: 'Esta seria la descripcion del producto 18.',
                info: 'Esta seria la info del producto 18. <br>De la coleccion En el mar. <br>2020',
                size: '30x30',
                date: '2020',
                destacado: false,
                imageHome: '/img/digital/imagen-1.jpg',
                imageSumario: '/img/digital/sumario/BALLENA.jpg',
                images: ['/img/digital/imagen-1.jpg', '/img/digital/imagen-1.jpg']
            },  
            {
                id: 27,
                category: 'textil',
                name: 'Titulo de la obra 18',
                description: 'Esta seria la descripcion del producto 18.',
                info: 'Esta seria la info del producto 18. <br>De la coleccion En el mar. <br>2020',
                size: '30x30',
                date: '2020',
                destacado: false,
                imageHome: '/img/digital/imagen-1.jpg',
                imageSumario: '/img/digital/sumario/BALLENA.jpg',
                images: ['/img/digital/imagen-1.jpg', '/img/digital/imagen-1.jpg']
            }, 
            {
                id: 28,
                category: 'papel',
                name: 'Titulo de la obra 18',
                description: 'Esta seria la descripcion del producto 18.',
                info: 'Esta seria la info del producto 18. <br>De la coleccion En el mar. <br>2020',
                size: '30x30',
                date: '2020',
                destacado: false,
                imageHome: '/img/digital/imagen-1.jpg',
                imageSumario: '/img/digital/sumario/BALLENA.jpg',
                images: ['/img/digital/imagen-1.jpg', '/img/digital/imagen-1.jpg']
            },
            {
                id: 29,
                category: 'papel',
                destacado: false,
                image: '/img/digital/imagen-1.jpg',
                imageSumario: '/img/digital/sumario/BALLENA.jpg',
                imageHome: '/img/digital/imagen-1.jpg',
                name: 'Titulo de la obra 18',
                description: 'Esta seria la descripcion del producto 18.',
                size: '30x30',
                date: '2020',
                info: 'Esta seria la info del producto 18. <br>De la coleccion En el mar. <br>2020'
            }, 
            {
                id: 30,
                category: 'textil',
                destacado: false,
                image: '/img/digital/imagen-1.jpg',
                imageSumario: '/img/digital/sumario/BALLENA.jpg',
                imageHome: '/img/textil/imagen-1.jpg',
                name: 'Titulo de la obra textil 20',
                description: 'Esta seria la descripcion del producto textil 20.',
                size: '30x30',
                date: '2020',
                info: 'Esta seria la info del producto textil 20. <br>De la coleccion Bosques del sur. <br>2013'
            }
        ]
    }
]

module.exports = dataSite;