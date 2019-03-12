const AWS = require('aws-sdk');

const keys = require('../config/keys');

AWS.config.update({ region: keys.REGION });

module.exports = async () => {
    console.log("Update data");
};