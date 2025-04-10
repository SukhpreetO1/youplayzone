# Use Node.js as the base image
FROM node:20 AS build

# Set the working directory inside the container
WORKDIR /var/www/html/personal/youplayzone/frontend

# Copy package.json first
COPY package.json ./

# Copy the rest of the application files
COPY . .

# Install the dependencies
RUN npm install

# Run the development server using `npm run start:dev`
CMD ["npm", "run", "dev"]