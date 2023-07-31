# Stage 1: Build the Angular application
FROM node:16 as build

# Set the working directory in the container
WORKDIR /app

# Copy the package.json and package-lock.json (if using npm)
COPY package*.json ./

# Install app dependencies
RUN npm install

# Copy the rest of the application code
COPY . .

# Build the Angular app for production
RUN npm run build

# Stage 2: Use a lightweight web server to serve the application
FROM nginx:alpine

COPY nginx.conf /etc/nginx/nginx.conf
# Copy the build output to the default web server directory
COPY --from=build /app/dist/sugarrush /usr/share/nginx/html

# Expose port 4200 to the outside world
EXPOSE 4200

# Start the web server
CMD ["nginx", "-g", "daemon off;"]
