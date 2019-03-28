const Mongoose = require('mongoose');
Mongoose.set('useCreateIndex', true);
Mongoose.connect('mongodb://nsniloy:Venomous2008@ds127376.mlab.com:27376/nitolniloy',{ useNewUrlParser: true });
const db = Mongoose.connection;

db.on('error', console.error.bind(console, 'connection error'));
db.once('open', function callback() {
    console.log("Connection with database succeeded.");
});

module.exports.Mongoose = Mongoose;
module.exports.db = db;
