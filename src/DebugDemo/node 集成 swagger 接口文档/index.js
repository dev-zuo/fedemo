const express = require('express');
const app = express();
const swaggerUi = require('swagger-ui-express');
const swaggerDocument = require('./swagger.json');

app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocument));

// 端口需要自己
app.listen(9000, () => {
    console.log(`Example app listening on port ${9000}`)
})