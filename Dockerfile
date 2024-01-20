FROM alpine:latest

WORKDIR /usr/src/app


COPY package*.json .


RUN npm install 


COPY . .


COPY tsconfig.json .


RUN npm run build


EXPOSE 3000


CMD ["npm", "run", "index.js"]