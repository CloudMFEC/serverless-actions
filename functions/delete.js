/**
 * This lambda is for delete data in Amazon DynamoDB.
 * @method POST
 * @param {String} TableName
 * @param {Object} Key
 */

const AWS = require('aws-sdk');

const keys = require('../config/keys');
const isEmpty = require('./isEmpty');

module.exports = async ({ TableName, Key }) => {

    // Initialize response data.
    var response = {
        statusCode: 0,
        statusDescription: '',
        data: null,
    };

    if (isEmpty(Key)) {

        // Key is empty.
        response.statusCode = 400;
        response.statusDescription = 'Key is required.';
        response.data = null;
        return response;

    }

    // Must configure credentials and before.
    var dynamodb = new AWS.DynamoDB.DocumentClient({
        region: keys.REGION
    });

    // Configuration parameters is required.
    const params = { TableName, Key };

    return new Promise(resolve => {
        dynamodb.delete(params, (err, data) => {
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