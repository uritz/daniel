require('dotenv').config();

const express = require('express');
var app = express();
// const insightService = require('./api/services/insightService');

var session = require('express-session')

let router = express.Router();
// router.use(require('body-parser').json({ limit: '500mb' }));
// router.use(require('body-parser').urlencoded({ limit: '500mb', extended: true, parameterLimit: 500000 }));

// insightService(router);

app.use(require('cookie-parser')());

app.get('/', function(req, res) {
    res.sendFile('vp_dash.html', { root: __dirname + "/static/" });
});

app.use("/api", router);
app.use('/', express.static('static'));
app.use('/static', express.static('static'));


const PORT = process.env.PORT || 3000;
var server = app.listen(PORT, err => {
    if (err)
        throw err;
    console.log("%c Server running on port " + PORT, "color: green");
    var path = require('path');
    global.appRoot = path.resolve(__dirname);
});