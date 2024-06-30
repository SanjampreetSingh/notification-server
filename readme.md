
# Node.js REST API with TypeScript, Sequelize, SQLite, and Web Push Notifications

This project is a Node.js REST API server built with TypeScript. It uses Sequelize ORM for interacting with an SQLite database and supports web push notifications.

## Table of Contents

- [Features](#features)
- [Prerequisites](#prerequisites)
- [Installation](#installation)
- [Generating VAPID Keys](#generating-vapid-keys)
- [Environment Variables](#environment-variables)
- [Running the Application](#running-the-application)
- [API Endpoints](#api-endpoints)
- [Project Structure](#project-structure)
- [Contributing](#contributing)
- [License](#license)

## Features

- TypeScript for static typing
- Sequelize ORM for database management
- SQLite as the database
- Express for building RESTful APIs
- Web Push for push notifications

## Prerequisites

Make sure you have the following installed:

- Node.js
- npm (Node Package Manager)

## Installation

1. **Clone the repository:**

   ```bash
   git clone <notification>
   cd ./notification/notification-server
   ```

2. **Install dependencies:**

   ```bash
   npm install
   ```

3. **Install `ts-node` globally if not already installed:**

   ```bash
   npm install -g ts-node
   ```

## Generating VAPID Keys

Generate VAPID keys for web push notifications:

1. Generate VAPID Keys using the following command:

   ```bash
    npx web-push generate-vapid-keys
   ```

2. Copy the generated keys and add them to your `.env` file.

## Environment Variables

Create a `.env` file in the root directory and add the following environment variables:

```env
VAPID_PUBLIC_KEY=<your_generated_public_key>
VAPID_PRIVATE_KEY=<your_generated_private_key>
```

## Running the Application

1. **Build the project:**

   ```bash
   npm run build
   ```

2. **Run the built project:**

   ```bash
   npm start
   ```

3. **For development, run directly with `ts-node`:**

   ```bash
   npm run dev
   ```

## API Endpoints

- **Subscribe to notifications**

  - **Endpoint:** `/api/subscribe`
  - **Method:** `POST`
  - **Description:** Subscribes a user to push notifications.
  - **Request Body:**

    ```json
    {
      "endpoint": "string",
      "keys": {
        "p256dh": "string",
        "auth": "string"
      }
    }
    ```

- **Send a push notification**

  - **Endpoint:** `/api/push`
  - **Method:** `POST`
  - **Description:** Sends a push notification to all subscribed users.
  - **Request Body:**

    ```json
    {
      "message": "string"
    }
    ```

## Project Structure

```txt
/my-node-ts-api
|--/src
|  |--/api
|  |  |--/controllers
|  |  |  |-- subscription-controller.ts
|  |  |--/routes
|  |  |  |-- subscription-routes.ts
|  |  |--/services
|  |  |  |-- subscription-service.ts
|  |--/config
|  |--/interfaces
|  |--/middleware
|  |--/models
|  |  |-- index.ts
|  |  |-- subscription.ts
|  |--/utils
|  |-- index.ts
|  |-- swagger.ts
|--/dist
|-- .env
|-- tsconfig.json
|-- package.json
```

## Contributing

Contributions are welcome! Please open an issue or submit a pull request for any changes.

## License

This project is licensed under the MIT License.
