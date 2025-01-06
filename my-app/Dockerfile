# ------------------------------
# Stage 1 : Build Stage
# ------------------------------
# Use Node.js version 14 as the base image
FROM node:14 AS base

# Set the working directory inside the container
WORKDIR /usr/src/app

# Copy all files to the working directory
COPY . .

# Install dependencies specified in package.json
RUN npm install

RUN npm install express

# Expose port 3000 for the application
EXPOSE 3000

# ------------------------------
# Stage 2 : Production Stage
# ------------------------------
# Create a production-specific image from the base image
FROM base AS prod

# Define the command to start the application in production
CMD ["node", "src/app.js"]

# ------------------------------
# Stage 3 : Development Stage
# ------------------------------
# Create a development-specific image from the base image
FROM base AS dev

# Install nodemon globally for automatic server restarts during development
RUN npm install -g nodemon

# Define the command to start the application in development with nodemon
CMD ["nodemon", "-L", "-e", "html,js,css,sql", "express.js"]