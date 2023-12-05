FROM arm64v8/node:14  

WORKDIR /app

COPY package*.json ./

RUN npm install --quiet

COPY . .

CMD ["npm", "run", "start"]