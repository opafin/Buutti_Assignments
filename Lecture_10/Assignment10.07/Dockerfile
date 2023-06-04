FROM node:slim AS builder
WORKDIR /app
COPY ./package*.json ./
COPY ./src ./src
COPY ./tsconfig.json ./tsconfig.json
RUN npm ci
RUN npm run build
FROM alpine:latest AS final
WORKDIR /app
COPY --from=builder ./app/dist ./dist
COPY ./package*.json ./
RUN apk add --update nodejs npm
RUN npm ci --production
EXPOSE 3000

CMD ["npm", "start"]