'use strict';
const Lambda = require('./lambda');

// Lambda for create customer.
module.exports.onCreateCustomer = (event, context, callback) => Lambda.Customers.onCreateCustomer(event, context, callback);

// Lambda for list all customers.
module.exports.onListCustomer = (event, context, callback) => Lambda.Customers.onListCustomer(event, context, callback);

// Lambda for create order.
module.exports.onCreateOrder = (event, context, callback) => Lambda.Orders.onCreateOrder(event, context, callback);

// Lambda for list all orders.
module.exports.onListOrder = (event, context, callback) => Lambda.Orders.onListOrder(event, context, callback);

// Lambda for create product.
module.exports.onCreateProduct = (event, context, callback) => Lambda.Products.onCreateProduct(event, context, callback);

// Lambda for list all products.
module.exports.onListProduct = (event, context, callback) => Lambda.Products.onListProduct(event, context, callback);
