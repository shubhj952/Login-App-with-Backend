const express = require('express');
const connection = require("./config/mysql.config");
const indexRoute = require('./routes/index.route');
var cors = require('cors');

const app = express();
const PORT = 8000;

app.use(cors())
app.use(express.json());

app.use((req, res, next) => {
    req.conn = connection;
    next();
});

app.use('/', indexRoute);

app.listen(PORT, () => {
    console.log("Server running on port http://localhost:", PORT);
})