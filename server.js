const express = require("express");
const bodyParser = require('body-parser');
const app = express();
const port = 3040;

app.use(express.static('public'));
app.use(bodyParser.json());

require('./db')();
require('./route/signup-route')(app);

app.listen(port, () => {
    console.log(`Server running on port ${port}`);
});
