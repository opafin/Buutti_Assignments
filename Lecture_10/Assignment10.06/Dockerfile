FROM node:18-alpine AS builder
WORKDIR /app
COPY ./package*.json ./
COPY ./src ./src
COPY ./tsconfig.json ./tsconfig.json
RUN npm ci
RUN npm run build
FROM node:18-alpine AS final
WORKDIR /app
COPY --from=builder ./app/dist ./dist
COPY ./package*.json ./
RUN npm ci --production
EXPOSE 3000
CMD ["npm", "start"]