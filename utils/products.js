const request = require('postman-request');

const getAllProducts = (callback) => {
    request('https://apirest-jotatienda.herokuapp.com/json/products', (error, res, body) => {
        if(error) return callback(error, undefined);
        
        if (res){
            if(body) return callback(undefined, body);
            callback("No se encontraron productos.", undefined);
        }
    });
}

module.exports = {
    getAllProducts
};