// Handle all product actions.

const funcs = require('../functions');
const keys = require('../config/keys');

module.exports.onCreateProduct = async (event, context, callback) => {

    var TableName = keys.PRODUCT_TABLE,
        Item = { ...event.body },
        response = await funcs.CreateData({ TableName, Item });

    callback(null, response);
};

module.exports.onListProduct = async (event, context, callback) => {

    var TableName = keys.PRODUCT_TABLE,
        response = await funcs.ListData({ TableName });

    callback(null, response);
};
