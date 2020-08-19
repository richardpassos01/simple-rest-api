const {
    Router
} = require('express');

const routes = Router();
const path = require('path');
const fs = require('fs');

const loadIn = () => {
    const normalizedPath = path.join(__dirname, '../v1/api/domains');

    fs.readdirSync(normalizedPath).forEach((file) => {
        if (file !== 'index.js') {
            require(`../v1/api/domains/${file}`).loadIn(routes);
        }
    });
}

module.exports = {
    routes,
    loadIn
};