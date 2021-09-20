# NEXT (iTunes Search APP)

This is sample react and nodejs project that user can fetch artists, albums and songs from ITunes Web API. 

## Installation

In order to prove that I am good at NodeJS beside ReactJS, I created a ExpresJS project which is fecthing data from ITunes Web API instead of directly connection
ReactUI to ITunes Web Api.

There are 3 projects in the application.
1. 'next-models' which contains all model class which are used by 'next-backend' and 'next-app' projects both.
2. 'next-backed' is the backend project which is used by 'next-app' project. Express JS is used for backend.
3. 'next-app' is the UI React App project.

Steps to run project:
```bash
cd next-models

npm install

npm run-script build

cd ../next-backend/

npm install

npm run-script start

cd ../next-app/

npm install

npm start
```

## Description

When the backend app (next-backend) wakes up, you can see the api method and it's DTO(request, response) interface from Swagger UI. 
You can access Swagger UI with typing http://localhost:5001/api-docs/ to browser navigation bar.

![alt text](https://github.com/serhanuras/next/blob/main/images/swagger.png?raw=true)

When the UI app (next-app) wakes up, you will see the searching page like below.

![alt text](https://github.com/serhanuras/next/blob/main/images/app-01.png?raw=true)

When you search, data will fetch from next-backed and display on UI.

![alt text](https://github.com/serhanuras/next/blob/main/images/app-02.png?raw=true)

When you scroll down, for fetching new 10 records backed will be called.

![alt text](https://github.com/serhanuras/next/blob/main/images/app-04.png?raw=true)

And new records will be displayed on UI.

![alt text](https://github.com/serhanuras/next/blob/main/images/app-03.png?raw=true)
