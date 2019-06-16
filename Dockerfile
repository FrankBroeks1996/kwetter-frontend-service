FROM node:11.6.0-alpine AS builder
COPY . ./kwetter-frontend-service
WORKDIR /kwetter-frontend-service
RUN npm i
RUN $(npm bin)/ng build --prod

FROM nginx:1.15.8-alpine
COPY --from=builder /kwetter-frontend-service/dist/kwetter-frontend-service/ /usr/share/nginx/html