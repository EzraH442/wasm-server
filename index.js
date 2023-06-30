const express = require('express');
const path = require('path');
const { dateFormat } = require('./dateformat.js');

const port = 8080;
let app = express();

express.static.mime.types['wasm'] = 'application/wasm';

const loggerMiddleware = ((req, res, next) => {
  const time = dateFormat(Date.now(), "yyyy-mm-dd HH:MM:ss")
  console.log(`${time} ${req.ip} requested ${req.path}`)
  next();
})

// app.use([loggerMiddleware, express.static(path.join(__dirname, 'static'))])
app.use('/wasm-test', express.static(path.join(__dirname, 'static')))

app.listen(port, (err) => {
  if (err) {
    console.error(err);
  }
  console.log(`listening on port ${port}`);
});
