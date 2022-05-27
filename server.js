const express = require('express');
const app = express();
const PORT = process.env.PORT || 5000;
const path = require('path');
const hbs = require('hbs');

app.set('views', path.join(__dirname,'views'))
app.set('view engine', 'hbs')

app.use(require('./src/routes/web'))

hbs.registerPartials(path.join(__dirname,'views/partials'))

app.use(express.static('assets'))

app.listen( PORT , ()=>{
    console.log(`Sever listegning on post http://localhost:${PORT}`)
})