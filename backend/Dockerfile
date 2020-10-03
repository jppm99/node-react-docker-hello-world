FROM node:12.18.4-alpine3.12

# ARG NODE_ENV=development

# Create App Directory
RUN mkdir -p /usr/src/app
WORKDIR /usr/src/app

# Install Dependencies
COPY package*.json ./

RUN npm ci

# Copy app source code
COPY . .

# Expose server
EXPOSE 8080

CMD ["npm","run","start"]