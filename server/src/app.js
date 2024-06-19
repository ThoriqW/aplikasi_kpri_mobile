const express = require('express');
const bodyParser = require('body-parser');
const swaggerUi = require('swagger-ui-express');
const swaggerSpecs = require('./config/swagger');
const userRoutes = require('./routes/UserRoutes');
const profileRoutes = require('./routes/ProfileRoutes');

const app = express();
const PORT = process.env.PORT || 3000;

app.use(bodyParser.json());

app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerSpecs));

app.use('/users', userRoutes);

app.use('/profiles', profileRoutes);

app.listen(PORT, () => {
    console.log(`Server berjalan di port ${PORT}`);
});
