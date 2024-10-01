FROM node:22-alpine3.20

WORKDIR /usr/local/app

COPY . .

RUN npm install

EXPOSE 3006

CMD npm start