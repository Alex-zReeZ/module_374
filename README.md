# Our Docker App

## Group Members :
- Henrique Pinto Rocha
- Alex Beck

## Features
- N/A

## Running the Application
Ensure that Docker CLI and Git CLI are installed before proceeding.

### Downloading the Application
1. Clone the repository:
   ```
   git clone https://github.com/yourusername/my-docker-app.git
   ```
2. Navigate to the project directory:
   ```
   cd my-docker-app
   ```
### Development Environment
To run the application in the development environment, use Docker Compose:
```
docker-compose -f docker/docker-compose.yml up
```
Or, use the regular Dockerfile:
```
docker build --target dev -t my_app:dev .
```
This will start the application with the development configuration.

### Production Environment
To run the application in the production environment, use Docker Compose:
```
docker-compose -f docker/docker-compose.yml -e production up
```
Or, use the regular Dockerfile:
```
docker build --target prod -t my_app:prod .
```
This will start the application with the production configuration.

## Architecture Overview
- **Frontend**: N/A
- **Backend**: N/A
- **Database**: N/A
- **Docker**: N/A

## Environment Variables
- Development: Configured in `config/development.env`
- Production: Configured in `config/production.env`

## How to Verify Environment Differences
- **Development**: N/A
- **Production**: N/A
