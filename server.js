const express = require('express');
const app = express();
const http = require('http');
const bodyParser = require('body-parser');

app.use(bodyParser.urlencoded({limit: '50mb', extended: true}));
app.use(bodyParser.json({limit: '50mb', extended: true},));
app.use(express.static('public'))

const options = {
    explorer : true,
    apis: ['./routes/*.js'],
};

const router = require('./routes');
let server = http.createServer(app);
// const corsOptions = {
//   origin: function (origin, callback) {
//     if (whitelist.indexOf(origin) !== -1) {
//       callback(null, true)
//     } else {
//       callback(new Error('Not allowed by CORS'))
//     }
//   }
// }
app.enable("trust proxy"); // only if you're behind a reverse proxy (Heroku, Bluemix, AWS ELB, Nginx, etc)

// app.use(cors());
app.use('/',router.adminRoute);

//app.use(errors());
const port = 3000;
server.listen(port,_ => console.log('Example app listening on port :' + port));

// socket connections handler
