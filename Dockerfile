FROM node:carbon-buster

WORKDIR /usr/src

COPY package.json .
COPY yarn.lock .

RUN yarn

COPY . .

RUN yarn build