FROM node:24-alpine

RUN apk add --no-cache curl

WORKDIR /app

COPY package.json .
RUN npm install
COPY . .

USER node
EXPOSE 5050

ENTRYPOINT [ "npm" ]
CMD [ "start" ]
