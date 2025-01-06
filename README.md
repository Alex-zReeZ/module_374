# Our Docker App

## Group Members :
- Henrique Pinto Rocha
- Alex Beck

## Features
The web application running in our Docker container can:
- Create a task in your todo list
- Save the task, even if the container shuts down
- Delete tasks from your todo list

## Running the Application
Ensure that Docker CLI and Git CLI are installed before proceeding.

### Downloading the Application
1. Clone the repository:
   ```
   git clone https://github.com/Alex-zReeZ/module_374.git
   ```
2. Navigate to the project directory:
   ```
   cd my-docker-app
   ```
### Development Environment
To run the application in the development environment, use Docker Compose:
```
docker-compose build && docker-compose up
```
Or, use the regular Dockerfile:
```
docker build --target dev -t projet_docker_dev:v1 . && docker run -P -d --name projet_docker_dev projet_docker_dev:v1
```
This will start the application with the development configuration.

### Production Environment
To run the application in the production environment, you'll have to modify the target inside of 'docker-compose.yaml' to prod, instead of dev. 
Then, use Docker Compose:
```
docker-compose -f docker/docker-compose.yml -e production up
```
Or, use the regular Dockerfile:
```
docker build --target prod -t projet_docker_prod:v1 . && docker run -P -d --name projet_docker_prod projet_docker_prod:v1
```
This will start the application with the production configuration.

### 1. Flexibility vs. Stability
**Development**: Code can be modified and tested in real-time. Errors or bugs are acceptable as the focus is on building and validating features.
**Production**: The application must be stable and fully functional for end users, with no critical errors disrupting the user experience.

### 3. Performance and Debugging
**Development**: Debugging tools are enabled (e.g., detailed logs, debug mode), making it easier to trace and resolve issues.
**Production**: Performance is optimized (e.g., file minification, debugging tools disabled, load management). The focus is on delivering a fast and seamless experience.
