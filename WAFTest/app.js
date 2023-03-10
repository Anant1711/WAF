const request = require('request');
const express = require("express");
const path=require("path");   
const indexRoutes =require("./route.js");
const app = express();
const port = process.env.PORT || 3002;
const { createProxyMiddleware } = require('http-proxy-middleware');
app.set('views', path.join(__dirname,"views"));
app.set('view engine','ejs');
app.use(indexRoutes)

// toggle below code based on your deployed environment
//code for cloud web server
app.listen(port, () => console.log(`Example app listening on port ${port}!`));

// code for local

// app.listen(3002, 'localhost', () => {
//   console.log('Backend server listening on port 3002');
// });
