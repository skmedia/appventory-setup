# AppVentory setup

This repo contains the  `ecosystem.config.js` file to run the frontend and API application.

install pm2: https://pm2.keymetrics.io/

## git clone frontend & api

Frontend
```
git clone git@github.com:skmedia/appventory-frontend.git
```
Check frontend installation instructions.

API
```
git clone git@github.com:skmedia/appventory-api.git
```
Check API installation instructions.
```
cd appventory-api
npm install
docker-compose up -d
```

## Start applications

Start frontend & api

```
pm2 restart ecosystem.config.js
```

View logs
```
pm2 logs
```

Stop all
```
pm2 kill
```

More info
```
pm2 --help
```