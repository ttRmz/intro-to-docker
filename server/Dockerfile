FROM node:8
RUN mkdir -p /home/node/app/node_modules && chown -R node:node /home/node/app
WORKDIR /home/node/app
COPY . /home/node/app
EXPOSE 3000
CMD ["node", "./bin/www"]

# docker build -t tp-api .
# docker container run --rm -p 8080:80 tp-api:latest