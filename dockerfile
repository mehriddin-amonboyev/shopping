FROM node

WORKDIR /use/src/app

COPY package*.json ./

RUN npm install -f

COPY . .

EXPOSE 3000

CMD ["npm", "run", "start:dev"]