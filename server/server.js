const express = require('express');
const bodyParser = require('body-parser');
const userRoutes = require('./src/routes/UserRoutes');

const app = express();
const PORT = process.env.PORT || 3000;

app.use(bodyParser.json());

app.use('/users', userRoutes);

app.listen(PORT, () => {
    console.log(`Server berjalan di port ${PORT}`);
});
