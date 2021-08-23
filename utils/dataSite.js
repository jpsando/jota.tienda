const dataSite = [
    {
        navigator: [
            {
                name: 'Papel',
                order: 0,
                href: '/papel',
                class: 'nav-link-papel',
                target: '_self'
            },
            {
                name: 'Textil',
                order: 1,
                href: '/textil',
                class: 'nav-link-textil',
                target: '_self'
            },
            {
                name: 'Digital',
                order: 2,
                href: '/digital',
                class: 'nav-link-digital',
                target: '_self'
            },
            {
                name: 'Portfolio',
                order: 3,
                href: 'http://www.jotaschneider.com/',
                class: 'nav-link-portfolio',
                target: '_blank'
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
        }
    }
]

module.exports = dataSite;