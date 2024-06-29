const express = require('express');
const bodyParser = require('body-parser');
const swaggerUi = require('swagger-ui-express');
const swaggerSpecs = require('./configs/swagger');
const helmet = require('helmet');
const morgan = require('morgan');
const userRoutes = require('./routes/UserRoutes');
const profileRoutes = require('./routes/ProfileRoutes');
const billRoutes = require('./routes/BillRoutes');
const organizationRoutes = require('./routes/OrganizationRoutes');
const balanceSavingRoutes = require('./routes/BalanceSavingRoutes');
const bannerRoutes = require('./routes/BannerRoutes');
const notificationRoutes = require('./routes/NotificationRoutes');

const app = express();
const PORT = process.env.PORT || 3000;

// Middleware
app.use(helmet());
app.use(bodyParser.json());
app.use(morgan('dev'));

// Swagger documentation
app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerSpecs));

// Routes
app.use('/users', userRoutes);
app.use('/profiles', profileRoutes);
app.use('/bills', billRoutes);
app.use('/organizations', organizationRoutes);
app.use('/balance_savings', balanceSavingRoutes);
app.use('/banners', bannerRoutes);
app.use('/notifications', notificationRoutes);

// Start server
app.listen(PORT, () => {
    console.log(`Server berjalan di port ${PORT}`);
});
