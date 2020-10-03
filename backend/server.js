const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const cors = require('cors');

// Our DB Configuration
require('./src/database');

const PORT = 8080;

app.use(cors());
app.use(bodyParser.json());

// will redirect all the non-api routes to react frontend
/*app.use(function(req, res) {
    res.sendFile(path.join(__dirname, '../client','build','index.html'));
});*/

app.get('/', (req, res) => {
    res.send("Hello World ! ");
});

app.listen(PORT, function() {
    console.log("Server is running on Port: " + PORT);
});