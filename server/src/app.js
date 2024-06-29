const express = require('express');
const bodyParser = require('body-parser');
const swaggerUi = require('swagger-ui-express');
const swaggerSpecs = require('./configs/swagger');
const helmet = require('helmet');
const morgan = require('morgan');
const routes = require('./routes/Index');

const app = express();
const PORT = process.env.PORT || 3000;

app.use(helmet());
app.use(bodyParser.json());
app.use(morgan('dev'));

app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerSpecs));

app.use('/', routes);

app.listen(PORT, () => {
    console.log(`Server berjalan di port ${PORT}`);
});
