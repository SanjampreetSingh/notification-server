import express from 'express';
import cors from 'cors';
import helmet from 'helmet';
import subscriptionRoutes from './api/routes/subscription-routes';
import sequelize from './models/index';
import dotenv from 'dotenv';
import { setupSwagger } from './swagger';

dotenv.config();

const app = express();
const PORT = process.env.PORT || 3000;

app.use(cors());
app.use(helmet());
app.use(express.json());

setupSwagger(app);

app.use('/api', subscriptionRoutes);

sequelize.sync().then(() => {
    app.listen(PORT, () => {
        console.log(`Server is running on http://localhost:${PORT}`);
    });
}).catch((err) => {
    console.error('Unable to connect to the database:', err);
});
