FROM node:18
WORKDIR /app-node
COPY . .
RUN npm install
EXPOSE 3000
COPY . .
CMD ["npm", "run", "dev"]