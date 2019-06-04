FROM nginx:1.16.0
WORKDIR /usr/share/nginx/html
COPY /build /usr/share/nginx/html
EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]

# docker build -t tp-client .
# docker container run --rm -p 8080:80 tp-client:latest