FROM node:14.15.4-alpine as cpc
LABEL maintainer="tonymtz <hello@tonymtz.com>"
WORKDIR /usr/src/app
COPY package*.json ./
ARG PORT=$PORT
ENV NODE_ENV=production
RUN npm install
COPY . .
EXPOSE ${PORT}
CMD [ "node", "./bin/www" ]
