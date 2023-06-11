FROM node:latest AS builder
WORKDIR /app
COPY ./package*.json ./
COPY ./public ./public
COPY ./src ./src
COPY ./tsconfig.json ./tsconfig.json
RUN npm ci
RUN npm run build
FROM node:slim AS final
WORKDIR /app
COPY --from=builder ./app/dist ./dist
COPY --from=builder ./app/public ./public
COPY ./package*.json ./
RUN npm ci --production
EXPOSE 3000

CMD ["npm", "start"]