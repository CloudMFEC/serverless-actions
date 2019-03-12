/**
 * This lambda is for create data into Amazon DynamoDB.
 * @method POST
 * @param {String} TableName
 * @param {Object} Item
 */

const AWS = require('aws-sdk');

const keys = require('../config/keys');
const isEmpty = require('./isEmpty');
const uuid = require('uuid');

module.exports = async ({ TableName, Item }) => {

    // Initialize response data.
    var response = {
        statusCode: 0,
        statusDescription: '',
        data: null
    };

    if (isEmpty(Item)) {

        // Item is empty.
        response.statusCode = 400;
        response.statusDescription = 'Item is required.';
        response.data = null;
        return response;

    }

    else {

        // Generate primary key by uuid library.
        if (TableName === keys.CUSTOMER_TABLE)
            Item = { ...Item, customer_id: uuid() };
        else if (TableName === keys.ORDER_TABLE)
            Item = { ...Item, order_id: uuid() };
        else if (TableName === keys.PRODUCT_TABLE)
            Item = {
                ...Item,
                product_id: uuid(),
                product_pricing: parseInt(Item.product_pricing)
            };

        // Must configure credentials and before.
        var dynamodb = new AWS.DynamoDB.DocumentClient({
            region: keys.REGION
        });

        // Configuration parameters is required.
        const params = { Item, TableName };

        return new Promise(resolve => {
            dynamodb.put(params, (err, data) => {
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
};
