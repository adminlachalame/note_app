const express = require('express');
const bodyParser = require('body-parser');
const {syncDB} = require('./models');
const noteRouter = require('./routes/noteRoutes');

const app = express();
const port = 3000;

app.set('view engine', 'ejs');
app.set('views', __dirname + '/views');
//use body-parser for process form data
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));

//use router setup
app.use('/', noteRouter);

//sync data sql with server
syncDB().then(() =>{
    app.listen(port, () => {
        console.log(`App listening on port ${port}`);
    });
}).catch(err => console.log('failed to sync database',err));