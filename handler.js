'use strict';

const funcs = require('./functions');
const keys = require('./config/keys');

module.exports.onCreateCustomer = async (event, context, callback) => {

    var TableName = keys.CUSTOMER_TABLE,
        Item = { ...event.body },
        response = await funcs.CreateData({ TableName, Item });

    callback(null, response);
};

module.exports.onCreateOrder = async (event, context, callback) => {

    var TableName = keys.ORDER_TABLE,
        Item = { ...event.body },
        response = await funcs.CreateData({ TableName, Item });

    callback(null, response);
};

module.exports.onCreateProduct = async (event, context, callback) => {

    var TableName = keys.PRODUCT_TABLE,
        Item = { ...event.body },
        response = await funcs.CreateData({ TableName, Item });

    callback(null, response);
};

module.exports.onListCustomer = async (event, context, callback) => {

    var TableName = keys.CUSTOMER_TABLE,
        response = await funcs.ListData({ TableName });

    callback(null, response);
};

module.exports.onListOrder = async (event, context, callback) => {

    var TableName = keys.ORDER_TABLE,
        response = await funcs.ListData({ TableName });

    callback(null, response);
};

module.exports.onListProduct = async (event, context, callback) => {

    var TableName = keys.PRODUCT_TABLE,
        response = await funcs.ListData({ TableName });

    callback(null, response);
};
