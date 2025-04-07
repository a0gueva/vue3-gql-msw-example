FROM mcr.microsoft.com/playwright:v1.43.1-focal

WORKDIR /app

# Copy package files and install dependencies
COPY package*.json ./
RUN npm install
RUN npx playwright install --with-deps

# Copy the rest of the source code
COPY . .

# Build the Vite app
RUN npm run build

EXPOSE 4173

CMD ["npx", "vite", "preview", "--host"]
