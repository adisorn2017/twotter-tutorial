const express = require('express');
const serverStatic = require('serve-static');
const history = require('connect-history-api-fallback');
const enforce = require('express-sslify');

const app = express();

app.use(enforce.HTTPS( { trustProtoHeader: true }));
//for build files
app.use(serverStatic( __dirname + '/dist'));
app.use(history());

//process.env.PORT=> port as provide by Heraku
app.listen( process.env.PORT || 5000);