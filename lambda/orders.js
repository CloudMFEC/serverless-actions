// Handle all order actions.

const funcs = require('../functions');
const keys = require('../config/keys');

module.exports.onCreateOrder = async (event, context, callback) => {

    var TableName = keys.ORDER_TABLE,
        Item = { ...event.body },
        response = await funcs.CreateData({ TableName, Item });

    callback(null, response);
};

module.exports.onListOrder = async (event, context, callback) => {

    var TableName = keys.ORDER_TABLE,
        response = await funcs.ListData({ TableName });

    callback(null, response);
};
