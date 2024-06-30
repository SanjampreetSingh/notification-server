import swaggerJSDoc from 'swagger-jsdoc';
import swaggerUi from 'swagger-ui-express';
import { Express } from 'express';

const options = {
    definition: {
        openapi: '3.0.0',
        info: {
            title: 'Node.js REST API with TypeScript, Sequelize, SQLite, and Web Push Notifications',
            version: '1.0.0',
            description: 'A simple Node.js REST API built with TypeScript, Sequelize, SQLite, and web push notifications',
        },
        servers: [
            {
                url: 'http://localhost:3000/api/',
            },
        ],
    },
    apis: ['./src/api/routes/*.ts', './src/api/controllers/*.ts'],
};

const swaggerSpec = swaggerJSDoc(options);

export const setupSwagger = (app: Express): void => {
    app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerSpec));
};
