const express = require('express');
const routerConfig = require('./routes');
const {
    PORT
} = require('./helper/settings');

const app = express();
const port = PORT || 3000;

app.use(express.json());

routerConfig.loadIn();

app.use('/', routerConfig.routes);

app.get('/', (req, res) => res.json('Health check ok'));

app.listen(port, () => console.log('App running on port', port));