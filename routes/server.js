const express = require('express');
const path = require('path');
//const routes = require('./routes/index');

const app = express();

app.get('/components', function(req, res){
    resizeBy.render('content');
})

app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'pug');

app.listen(3000);