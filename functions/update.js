/**
 * This lambda is for update data in Amazon DynamoDB.
 * @method POST
 * @param {String} TableName
 * @param {Object} Params
 */


const AWS = require('aws-sdk');

const keys = require('../config/keys');
const isEmpty = require('./isEmpty');

module.exports = async ({ TableName, Params }) => {
    // Initialize response data.
    var response = {
        statusCode: 0,
        statusDescription: '',
        data: null,
    };

    if (isEmpty(Params)) {

        // Params is empty.
        response.statusCode = 400;
        response.statusDescription = 'Params is required.';
        response.data = null;
        return response;

    }

    // Must configure credentials and before.
    var dynamodb = new AWS.DynamoDB.DocumentClient({
        region: keys.REGION
    });

    var PRIMARY_KEY;
    if (TableName === keys.CUSTOMER_TABLE) PRIMARY_KEY = 'customer_id';
    else if (TableName === keys.ORDER_TABLE) PRIMARY_KEY = 'order_id';
    else if (TableName === keys.PRODUCT_TABLE) PRIMARY_KEY = 'product_id';

    var key = Object.keys(Params),
        ExpressionAttributeValues = {},
        UpdateExpression = 'set ';

    for (let i = 0; i < key.length; i++) {
        if (key[i] !== PRIMARY_KEY) {
            ExpressionAttributeValues = {
                ...ExpressionAttributeValues,
                [`:${key[i]}`]: Params[key[i]]
            }
            UpdateExpression += `${key[i]} = :${key[i]}`
            if (i !== key.length - 1) UpdateExpression += ', ';
        }
    }

    // Configuration parameters is required.
    const params = {
        TableName,
        Key: { [PRIMARY_KEY]: Params[PRIMARY_KEY] },
        ExpressionAttributeValues,
        UpdateExpression
    };

    return new Promise(resolve => {
        dynamodb.update(params, (err, data) => {
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

}