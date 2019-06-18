cd ./client
npm i 
npm run build
cd ../
docker-compose build
docker-compose up -d