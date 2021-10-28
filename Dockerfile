FROM node

WORKDIR /usr/app

COPY package.json ./

RUN npm i -g @nestjs/cli

RUN npm install

COPY . .

EXPOSE 3000

CMD ["npm", "run", "start:dev"]