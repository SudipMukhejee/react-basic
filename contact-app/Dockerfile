FROM node:20

WORKDIR /myapp
COPY . .
RUN npm install
RUN npm i uuidv4
RUN npm install react-router-dom --save
EXPOSE 3000
CMD ["npm", "start"]