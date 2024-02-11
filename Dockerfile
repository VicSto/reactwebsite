# syntax=docker/dockerfile:1
FROM node:21-alpine as builder
WORKDIR /home/node/app
COPY . .
RUN npm ci
RUN npm run build

FROM nginx:1.25.3-alpine as server
COPY --from=builder /home/node/app/dist /usr/share/nginx/html
COPY nginx.conf /etc/nginx/conf.d/default.conf

CMD ["nginx", "-g", "daemon off;"]