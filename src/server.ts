import { app } from "./app";

app.listen(3000)

var swaggerUi = require('swagger-ui-express');
var swaggerDocument = require('./swagger.json')
app.use('/swagger', swaggerUi.serve, swaggerUi.setup(swaggerDocument))