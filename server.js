const express = require('express');
const app = express();
const PORT = process.env.PORT || 5000;
const path = require('path');
const routes = require('./src/routes/web');

app.use('view engine','hbs');
// app.use('views',path.join(__dirname, '/views'));

app.use('',routes)

app.listen( PORT , ()=>{
    console.log(`Sever listegning on post http://localhost:${PORT}`)
})