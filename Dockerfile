FROM nginx:alpine
WORKDIR /usr/src/app
EXPOSE 8080
COPY . /usr/share/nginx/html