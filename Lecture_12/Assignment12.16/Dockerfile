FROM node:18-alpine as Builder

COPY ./*.json ./
COPY ./src ./src

RUN npm ci
RUN npm run build

FROM node:18-alpine as final

WORKDIR /app

ARG PORT
ARG PG_HOST
ARG PG_PORT
ARG PG_USERNAME
ARG PG_PASSWORD
ARG PG_DATABASE

ENV PORT=${PORT}
ENV PG_HOST=${PG_HOST}
ENV PG_PORT=${PG_PORT}
ENV PG_USERNAME=${PG_USERNAME}
ENV PG_PASSWORD=${PG_PASSWORD}
ENV PG_DATABASE=${PG_DATABASE}

COPY --from=builder ./dist ./dist
COPY ./package.json ./package.json
COPY ./package-lock.json ./package-lock.json

RUN npm ci --omit=dev

EXPOSE 3000
CMD ["npm", "start"]


