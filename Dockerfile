# Use Node.js 20 (Alpine is lightweight)
FROM node:20.17.0-alpine

# Set working directory
WORKDIR /countdown-app

# Copy package.json and install dependencies
COPY package.json package-lock.json ./
RUN npm install

# Copy all project files
COPY . .

# 🔹 Build the Next.js project
RUN npm run build

# Expose port 3000 (default Next.js port)
EXPOSE 3000

# Start the Next.js app
CMD ["npm", "start"]
