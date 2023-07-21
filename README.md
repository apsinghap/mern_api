# mern_api
What is MERN
M – Mern
E – Express
R – React
N -Node
Don’t be happy , a lot of more package and plugin will be used , apart from above.

So let’s learn how to build a simple full stack application using all the above 4 tech stacks



#Step 1 – Setup frontend and backend first
Create a folder – mern/frontend and mern/backend

Go to mern/frontend and start your react app

npx create-react-app .
Go to mern/backend and start you node js server

npm init
# Step 2 – Create you first API
npm i express dotenv cors
npm install --save-dev nodemon
# Step 3 – Create a schema and model
Model – It helps is interaction with the database

Schema – It define the structure on what type of data is going to be stored in our databsae

Create a model – mern/backend/models/userDataModel.js

userDataModel.js
# Step 4 – Setting up Routing using react-router-dom Set up frontend
First install react router dom –

npm i react-router-dom
Now create a component folder : mern/frontend/src/components and create 3 react component

Create.jsx (mern/frontend/src/components/Create.jsx)
Read.jsx (mern/frontend/src/components/Read.jsx)
Update.jsx (mern/frontend/src/components/Update.jsx)
