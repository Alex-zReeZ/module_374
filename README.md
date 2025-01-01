# My Docker App

## Features
- A simple web application demonstrating the use of Docker for deployment.
- Supports both development and production environments with different configurations.
- Modular architecture with separate files for routes, controllers, and models.

## Installation
1. Clone the repository:
   ```
   git clone https://github.com/yourusername/my-docker-app.git
   ```
2. Navigate to the project directory:
   ```
   cd my-docker-app
   ```
3. Install dependencies:
   ```
   npm install
   ```

## Running the Application
### Development Environment
To run the application in the development environment, use Docker Compose:
```
docker-compose -f docker/docker-compose.yml up
```
This will start the application with the development configuration.

### Production Environment
To run the application in the production environment, use:
```
docker-compose -f docker/docker-compose.yml -e production up
```
This will start the application with the production configuration.

## Architecture Overview
- **Frontend**: Not applicable (this is a backend application).
- **Backend**: Node.js application running on Express.
- **Database**: Configurable via environment variables in `config/development.env` and `config/production.env`.
- **Docker**: The application is containerized using Docker, with a `Dockerfile` and `docker-compose.yml` for easy deployment.

## Environment Variables
- Development: Configured in `config/development.env`
- Production: Configured in `config/production.env`

## How to Verify Environment Differences
- **Development**: Check for verbose logging and modifiable code.
- **Production**: Ensure logging is turned off and the code is fixed.

## License
This project is licensed under the MIT License.