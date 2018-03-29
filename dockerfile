FROM node:carbon

WORKDIR /app

COPY package*.json ./

RUN npm install

COPY stencil.*.config.js ./
COPY tsconfig.json ./
COPY utils/ ./utils
COPY server.js ./
