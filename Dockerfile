FROM node:10-alpine as cpc
LABEL maintainer="tonymtz <hello@tonymtz.com>"
WORKDIR /usr/src/app
COPY package*.json ./
ARG PORT=$PORT
ENV NODE_ENV=production
RUN npm install
COPY . .
EXPOSE ${PORT}
CMD [ "node", "index.js" ]
