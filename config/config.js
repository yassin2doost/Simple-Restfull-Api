const mongoose = require('mongoose');


mongoose.connect('mlab Account',{ 
    useNewUrlParser: true ,
    useCreateIndex: true,
    
});
mongoose.set('useFindAndModify', false);


console.log('mongo conected')
