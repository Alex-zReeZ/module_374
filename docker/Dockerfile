# ------------------------------
# Stage 1 : Build Stage
# ------------------------------
FROM node:14 AS base

# Set the working directory
WORKDIR /usr/src/app

# Copy package.json and package-lock.json
COPY . .

# Install dependencies
RUN npm install

# Expose the application port
EXPOSE 3000

# ------------------------------
# Stage 2 : Production Stage
# ------------------------------
FROM base AS prod

# Command to run the application
CMD ["node", "src/app.js"]

# ------------------------------
# Stage 3 : Development Stage
# ------------------------------
FROM base as dev

RUN npm install -g nodemon

CMD ["nodemon", "-L", "src/app.js"]