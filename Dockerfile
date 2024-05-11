# syntax=docker/dockerfile:1
FROM node:latest as builder
WORKDIR /home/node/app
COPY reactwebsite .

RUN npm ci
RUN npm run build

FROM nginx:stable-alpine as server
COPY --from=builder /home/node/app/dist /usr/share/nginx/html
COPY nginx.conf /etc/nginx/conf.d/www.victorstolle.com.conf

EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]