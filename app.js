// app.js

const express = require('express');
const connectDB = require('./config/db');
var cors = require('cors');

const app = express();
var bodyParser = require('body-parser');

// configure the app to use bodyParser()
app.use(bodyParser.urlencoded({
    extended: true
}));
app.use(bodyParser.json());

var router = express.Router();   
// Connect Database
connectDB();
// cors
app.use(cors({ origin: true, credentials: true }));

app.get('/', (req, res) => res.send('Hello worlds!'));
const books = require('./routes/api/books');
app.use('/api/books', books);



const port = process.env.PORT || 8082;

app.listen(port, () => console.log(`Server running on port ${port}`));