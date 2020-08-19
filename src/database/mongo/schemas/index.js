const path = require('path');
const fs = require('fs');

exports.loadIn = function loadIn(database) {
    const normalizedPath = path.join(__dirname);

    fs.readdirSync(normalizedPath).forEach((file) => {
        if (file !== 'index.js') {
            require(`./${file}`).loadIn(database);
        }
    });
};