/**
 * This lambda is for list data into Amazon DynamoDB.
 * @method POST
 * @param {String} TableName
 */

const AWS = require('aws-sdk');

const keys = require('../config/keys');

module.exports = async ({ TableName }) => {
    // Initialize response data.
    var response = {
        statusCode: 0,
        statusDescription: '',
        data: null
    };

    // Must configure credentials and before.
    var dynamodb = new AWS.DynamoDB.DocumentClient({
        region: keys.REGION
    });

    // Configuration parameters is required.
    const params = { TableName };

    return new Promise(resolve => {
        dynamodb.scan(params, (err, data) => {
            if (err) {
                // If error.
                response.statusCode = err.statusCode;
                response.statusDescription = err.message;
                response.data = null;

                resolve(response);
            } else {
                // If successfully.
                response.statusCode = 200;
                response.statusDescription = 'Ok';
                response.data = data;

                resolve(response);
            }
        });

    });

};
