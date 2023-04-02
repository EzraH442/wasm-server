let express = require('express');
let app = express();

express.static.mime.types['wasm'] = 'application/wasm';
app.use(express.static(__dirname + "/static"))
port = 8080;
app.listen(8080);