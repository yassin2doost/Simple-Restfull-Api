const mongoose = require('mongoose');


mongoose.connect('mongodb://<userName>:<Password>@ds042417.mlab.com:42417/simple-restful-api',{ 
    useNewUrlParser: true ,
    useCreateIndex: true,
    
});
mongoose.set('useFindAndModify', false);


console.log('mongo conected')
