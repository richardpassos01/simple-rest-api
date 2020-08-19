const env = require('env-var');

module.exports = {
    PORT: env
        .get('PORT')
        .asIntPositive(),

    MONGO: {
        SRV: env
            .get('MONGO_SRV')
            .required(true)
            .asString()
    }
}