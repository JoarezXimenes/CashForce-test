FROM node:16.18
WORKDIR /app/backend
 
COPY package* ./
RUN npm install
COPY . .
EXPOSE 3000

CMD [ "npm", "start" ] 