// Handle all customer actions.

const funcs = require('../functions');
const keys = require('../config/keys');

module.exports.onCreateCustomer = async (event, context, callback) => {

    var TableName = keys.CUSTOMER_TABLE,
        Item = { ...event.body },
        response = await funcs.CreateData({ TableName, Item });

    callback(null, response);
};

module.exports.onListCustomer = async (event, context, callback) => {

    var TableName = keys.CUSTOMER_TABLE,
        response = await funcs.ListData({ TableName });

    callback(null, response);
};

module.exports.onGetCustomer = async (event, context, callback) => {

    var TableName = keys.CUSTOMER_TABLE,
        Key = { ...event.body },
        response = await funcs.GetData({ TableName, Key });

    callback(null, response);
};

module.exports.onDeleteCustomer = async (event, context, callback) => {

    var TableName = keys.CUSTOMER_TABLE,
        Key = { ...event.body },
        response = await funcs.DeleteData({ TableName, Key });

    callback(null, response);
};

module.exports.onUpdateCustomer = async (event, context, callback) => {

    var TableName = keys.CUSTOMER_TABLE,
        Params = { ...event.body },
        response = await funcs.UpdateData({ TableName, Params });

    callback(null, response);
};
