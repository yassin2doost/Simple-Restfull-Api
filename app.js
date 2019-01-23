const
    express = require('express'),
    config = require('./config/config'),
    UserController = require('./controllers/UserControler');
    
const app = express();

app.use('/users', UserController);

module.exports = app;