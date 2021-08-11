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
const products = [
    {
        id: 1,
        category: 'papel',
        destacado: true,
        image: '/img/papel/imagen-1.jpg',
        imageHome: '/img/papel/imagen-1.jpg',
        name: 'Titulo de la obra',
        description: 'Esta seria la descripcion del producto.',
        size: '30x30',
        info: 'Esta seria la info del producto. <br>De la coleccion En el mar. <br>2020'
    }, 
    {
        id: 2,
        category: 'digital',
        destacado: true,
        image: '/img/papel/imagen-1.jpg',
        imageHome: '/img/papel/imagen-1.jpg',
        name: 'Titulo de la obra digital 1',
        description: 'Esta seria la descripcion del producto digital 1.',
        size: '30x30',
        info: 'Esta seria la info del producto digital 1. <br>De la coleccion Frida y yo. <br>2018'
    }, 
    {
        id: 3,
        category: 'textil',
        destacado: true,
        image: '/img/papel/imagen-1.jpg',
        imageHome: '/img/papel/imagen-1.jpg',
        name: 'Titulo de la obra textil 1',
        description: 'Esta seria la descripcion del producto textil 1.',
        size: '30x30',
        info: 'Esta seria la info del producto textil 1. <br>De la coleccion Bosques del sur. <br>2013'
    },
    {
        id: 4,
        category: 'papel',
        destacado: true,
        image: '/img/papel/imagen-1.jpg',
        imageHome: '/img/papel/imagen-1.jpg',
        name: 'Titulo de la obra 2',
        description: 'Esta seria la descripcion del producto 2.',
        size: '30x30',
        info: 'Esta seria la info del producto 2. <br>De la coleccion En el mar. <br>2020'
    }, 
    {
        id: 5,
        category: 'digital',
        destacado: true,
        image: '/img/papel/imagen-1.jpg',
        imageHome: '/img/papel/imagen-1.jpg',
        name: 'Titulo de la obra digital 2',
        description: 'Esta seria la descripcion del producto digital 2.',
        size: '30x30',
        info: 'Esta seria la info del producto digital 2. <br>De la coleccion Frida y yo. <br>2018'
    }, 
    {
        id: 6,
        category: 'textil',
        destacado: true,
        image: '/img/papel/imagen-1.jpg',
        imageHome: '/img/papel/imagen-1.jpg',
        name: 'Titulo de la obra textil 2',
        description: 'Esta seria la descripcion del producto textil 2.',
        size: '30x30',
        info: 'Esta seria la info del producto textil 2. <br>De la coleccion Bosques del sur. <br>2013'
    }, 
    {
        id: 7,
        category: 'textil',
        destacado: true,
        image: '/img/papel/imagen-1.jpg',
        imageHome: '/img/papel/imagen-1.jpg',
        name: 'Titulo de la obra textil 1',
        description: 'Esta seria la descripcion del producto textil 1.',
        size: '30x30',
        info: 'Esta seria la info del producto textil 1. <br>De la coleccion Bosques del sur. <br>2013'
    },
    {
        id: 8,
        category: 'papel',
        destacado: true,
        image: '/img/papel/imagen-1.jpg',
        imageHome: '/img/papel/imagen-1.jpg',
        name: 'Titulo de la obra 2',
        description: 'Esta seria la descripcion del producto 2.',
        size: '30x30',
        info: 'Esta seria la info del producto 2. <br>De la coleccion En el mar. <br>2020'
    }, 
    {
        id: 9,
        category: 'digital',
        destacado: true,
        image: '/img/papel/imagen-1.jpg',
        imageHome: '/img/papel/imagen-1.jpg',
        name: 'Titulo de la obra digital 3',
        description: 'Esta seria la descripcion del producto digital 3.',
        size: '30x30',
        info: 'Esta seria la info del producto digital 3. <br>De la coleccion Frida y yo. <br>2018'
    }, 
    {
        id: 10,
        category: 'textil',
        destacado: true,
        image: '/img/papel/imagen-1.jpg',
        imageHome: '/img/papel/imagen-1.jpg',
        name: 'Titulo de la obra textil 10',
        description: 'Esta seria la descripcion del producto textil 10.',
        size: '70x30',
        info: 'Esta seria la info del producto textil 10. <br>De la coleccion Bosques del sur. <br>2013'
    },
    {
        id: 11,
        category: 'papel',
        destacado: true,
        image: '/img/papel/imagen-1.jpg',
        imageHome: '/img/papel/imagen-1.jpg',
        name: 'Titulo de la obra',
        description: 'Esta seria la descripcion del producto 11.',
        size: '30x30',
        info: 'Esta seria la info del producto 11. <br>De la coleccion En el mar. <br>2020'
    }, 
    {
        id: 12,
        category: 'digital',
        destacado: true,
        image: '/img/papel/imagen-1.jpg',
        imageHome: '/img/papel/imagen-1.jpg',
        name: 'Titulo de la obra digital 12',
        description: 'Esta seria la descripcion del producto digital 12.',
        size: '30x30',
        info: 'Esta seria la info del producto digital 1. <br>De la coleccion Frida y yo. <br>2018'
    }, 
    {
        id: 13,
        category: 'textil',
        destacado: true,
        image: '/img/papel/imagen-1.jpg',
        imageHome: '/img/papel/imagen-1.jpg',
        name: 'Titulo de la obra textil 13',
        description: 'Esta seria la descripcion del producto textil 13.',
        size: '30x30',
        info: 'Esta seria la info del producto textil 13. <br>De la coleccion Bosques del sur. <br>2013'
    },
    {
        id: 14,
        category: 'papel',
        destacado: true,
        image: '/img/papel/imagen-1.jpg',
        imageHome: '/img/papel/imagen-1.jpg',
        name: 'Titulo de la obra 14',
        description: 'Esta seria la descripcion del producto 2.',
        size: '30x30',
        info: 'Esta seria la info del producto 14. <br>De la coleccion En el mar. <br>2020'
    }, 
    {
        id: 15,
        category: 'digital',
        destacado: false,
        image: '/img/papel/imagen-1.jpg',
        imageHome: '/img/papel/imagen-1.jpg',
        name: 'Titulo de la obra digital 15',
        description: 'Esta seria la descripcion del producto digital 15.',
        size: '30x30',
        info: 'Esta seria la info del producto digital 15. <br>De la coleccion Frida y yo. <br>2018'
    }, 
    {
        id: 16,
        category: 'textil',
        destacado: false,
        image: '/img/papel/imagen-1.jpg',
        imageHome: '/img/papel/imagen-1.jpg',
        name: 'Titulo de la obra textil 16',
        description: 'Esta seria la descripcion del producto textil 16.',
        size: '30x30',
        info: 'Esta seria la info del producto textil 16. <br>De la coleccion Bosques del sur. <br>2013'
    }, 
    {
        id: 17,
        category: 'textil',
        destacado: false,
        image: '/img/papel/imagen-1.jpg',
        imageHome: '/img/papel/imagen-1.jpg',
        name: 'Titulo de la obra textil 17',
        description: 'Esta seria la descripcion del producto textil 17.',
        size: '30x30',
        info: 'Esta seria la info del producto textil 17. <br>De la coleccion Bosques del sur. <br>2013'
    },
    {
        id: 18,
        category: 'papel',
        destacado: false,
        image: '/img/papel/imagen-1.jpg',
        imageHome: '/img/papel/imagen-1.jpg',
        name: 'Titulo de la obra 18',
        description: 'Esta seria la descripcion del producto 18.',
        size: '30x30',
        info: 'Esta seria la info del producto 18. <br>De la coleccion En el mar. <br>2020'
    }, 
    {
        id: 19,
        category: 'digital',
        destacado: false,
        image: '/img/papel/imagen-1.jpg',
        imageHome: '/img/papel/imagen-1.jpg',
        name: 'Titulo de la obra digital 19',
        description: 'Esta seria la descripcion del producto digital 19.',
        size: '30x30',
        info: 'Esta seria la info del producto digital 19. <br>De la coleccion Frida y yo. <br>2018'
    }, 
    {
        id: 20,
        category: 'textil',
        destacado: false,
        image: '/img/papel/imagen-1.jpg',
        imageHome: '/img/papel/imagen-1.jpg',
        name: 'Titulo de la obra textil 20',
        description: 'Esta seria la descripcion del producto textil 20.',
        size: '30x30',
        info: 'Esta seria la info del producto textil 20. <br>De la coleccion Bosques del sur. <br>2013'
    }
]

module.exports = products;