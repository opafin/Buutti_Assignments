FROM node:18-alpine
WORKDIR /app
COPY package*.json ./
RUN npm ci
COPY ./dist ./dist
COPY ./tsconfig.json ./tsconfig.json
EXPOSE 3000
CMD ["npm", "start"]


