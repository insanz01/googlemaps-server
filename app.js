const express = require('express');
const bodyParser = require('body-parser');

const app = express();

const PORT = 4000;

// parse application/json
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());

const routes = require('./routes');
routes(app);

app.listen(PORT, () => {
	console.log(`Server started on port ${PORT}`)
});