FROM nginx:alpine
WORKDIR /usr/src/app
EXPOSE 80
COPY . /usr/share/nginx/html