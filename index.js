/*const express = require('express')
const app = express()
const port = process.env.PORT || 3000;

app.use(express.json())

app.get('/', (req, res) => {
   res.send('Hello Friend!')
})

app.listen(port, () => {
   console.log(`Example app listening on port ${port}`)
})*/

const express = require('express');
const app = express();
const port =  process.env.PORT;

app.use(express.json());

const swaggerUi = require('swagger-ui-express');
const swaggerJSDoc = require('swagger-jsdoc');
const options = {
    definition: {
        openapi: '3.0.0',
        info: {
            title: 'MyVMS API',
            version: '1.0.0',
        },
    },
    apis: ['./main.js'],
}
const swaggerSpec = swaggerJSDoc(options);
app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerSpec));

/**
 * @swagger
 * /:/login:
 *  post:
 *     description: Login to the application
 *    requestBody:
 *      content:
 *       application/json:
 *       schema:
 *       type: object
 *      properties:
 *      username:
 *      type: string
 *     password:
 *     type: string
 *   required:
 *  - username
 *  - password
 */




