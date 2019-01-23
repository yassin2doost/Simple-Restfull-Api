const 
    mongoose = require('mongoose'),
    Schema = mongoose.Schema;

const UserSchema = new Schema({
    username: { type: String, required: true, unique:true, trim: true, lowercase:true,index:true },
    password: { type: String, required: true}
}, {timestamps: true});

module.exports = mongoose.model('User', UserSchema);