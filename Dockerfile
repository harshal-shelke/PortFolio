# Step 1: Build the React app
FROM node:18 AS build

WORKDIR /app

# Copy package files and install dependencies
COPY package*.json ./
RUN npm install

# Copy all files and build the app
COPY . .
RUN npm run build  

# Step 2: Serve the React build with a lightweight server
FROM node:18-alpine

WORKDIR /app

# Install a lightweight server (e.g., `serve`)
RUN npm install -g serve

# Copy the build from the previous step
COPY --from=build /app/dist /app/build

# Expose port 3000 (or any port you want)
EXPOSE 3000

# Use `serve` to serve the static files
CMD ["serve", "-s", "build", "-l", "3000"]
