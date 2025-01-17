FROM node:20.18.1 AS builder 

WORKDIR /usr/app

# Copy depenedence files first to optimize dependency caching
COPY package.json package-lock.json ./
# Install dependencies
RUN npm install
# Copy the rest of the code
COPY . .
RUN npm run build

# SERVER
FROM nginx:alpine

COPY --from=builder /usr/app/dist /usr/share/nginx/html

COPY nginx.conf /etc/nginx/nginx.conf
COPY mime.types /etc/nginx/mime.types

EXPOSE 80

CMD [ "nginx", "-g", "daemon off;" ]