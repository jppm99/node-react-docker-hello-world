FROM node:12.18.4-alpine3.12

# ARG NODE_ENV=development

# Create App Directory
RUN mkdir -p /usr/src/app
WORKDIR /usr/src/app

# Copy app source code
COPY . .

# Rename package-docker.json to package.json
RUN mv -f ./package-docker.json ./package.json
RUN cat package.json && ls -la

RUN npm ci

# Expose client
EXPOSE 3000

CMD ["npm","run","start"]