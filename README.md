# Serverless API Actions with Node.JS
AWS Lambda functions with Amazon DynamoDB.
> Client <--> API <--> Lambda <--> DynamoDB.
 - Insert
 - Update
 - Delete
 - List
 - Get

## Step 1
Clone repository and install dependencies `npm install` or short key `npm i`.
```
- git clone https://github.com/CloudMFEC/serverless-actions.git
- cd serverless-actions
- npm install
```

If you need to change repository's name just use this below.
```
- git clone https://github.com/CloudMFEC/serverless-actions.git [YOUR_NAME]
- cd [YOUR_NAME]
- npm install
```

## Step 2
Deploy this code to cloud provider (this configuration inf `serverless.yml` for aws).
Use `serverless deploy` or short key `sls deploy` in root directory.
```
- serverless deploy
```
