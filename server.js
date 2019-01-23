const
    app = require('./app'),
    mongoose= require('mongoose'),
    bodyParser = require('body-parser'),
    port = process.env.PORT || 3355;

    const server = app.listen(port, (err) => {
        if(err) throw(err);
        console.log(`Server is running on the port ${port}`);
    });



