const swaggerAutogen = require('swagger-autogen')();

const doc = {
    info: {
        title: 'Users Api',
        description: 'User Api'
    },
    host: 'localhost:3000',
    schemes: ['https', 'http']
}

const outputFile = './swagger.json';
const endponintsFiles = ['./routes/index.js'];

// this will generate swagger.json
swaggerAutogen(outputFile, endponintsFiles, doc);