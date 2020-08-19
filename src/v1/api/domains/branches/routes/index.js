const path = require('path');
const fs = require('fs');

const loadIn = (router) => {
    const normalizedPath = path.join(__dirname);

    fs.readdirSync(normalizedPath).forEach((file) => {
        if (file !== 'index.js') {
            require(`./${file}`).loadIn(router);
        }
    });
};

module.exports = {
    loadIn
};