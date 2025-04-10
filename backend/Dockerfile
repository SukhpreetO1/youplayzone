# Use Node.js as the base image
FROM node:20

# Set the working directory inside the container
WORKDIR /var/www/html/personal/youplayzone/backend

# Copy package.json first
COPY package.json ./

# Copy the rest of the application files
COPY . .

# Install the dependencies
RUN npm install

# Start the app
CMD ["npm", "run", "start:dev"]
