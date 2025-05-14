FROM node:22-alpine

# Install required dependencies
RUN apk add --no-cache bash git

# Set working directory
WORKDIR /app

# Copy package files and install deps
COPY package.json package-lock.json ./
RUN npm install

# Copy rest of the source code
COPY . .

# Expose default Expo port
EXPOSE 19000 19001 19002

# Start Expo CLI in dev mode
CMD ["npx", "run", "dev"]