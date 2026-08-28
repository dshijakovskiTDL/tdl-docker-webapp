FROM node:24-alpine

WORKDIR /app

COPY package.json .

RUN npm install

COPY . .

USER node

CMD [ "npm", "start" ]
