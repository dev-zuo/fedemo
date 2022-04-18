const swaggerJsdoc = require('swagger-jsdoc');
const fs = require('fs')

const options = {
  definition: {
    openapi: '3.0.0',
    info: {
      title: 'Hello World',
      version: '1.0.0',
    },
    host: 'localhost:3000',
    basePath: '/',
  },
  apis: ['./src/routes*.js', './parameters.yaml'], // files containing annotations as above
};

const openapiSpecification = swaggerJsdoc(options);
console.log(openapiSpecification)

// swagger-jsdoc 生成的內容就是 swagger.json
fs.writeFileSync('swagger.json', JSON.stringify(openapiSpecification))

// 使用 swagger-ui-express 时，导入 swagger.json 即可