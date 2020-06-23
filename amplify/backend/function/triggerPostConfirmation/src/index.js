/* Amplify Params - DO NOT EDIT
You can access the following resource attributes as environment variables from your Lambda function
var environment = process.env.ENV
var region = process.env.REGION

Amplify Params - DO NOT EDIT */
const aws = require('aws-sdk');
var region = process.env.REGION
aws.config.update({region: region});
var ddb = new aws.DynamoDB({apiVersion: '2012-08-10'});
var ddb_table_name = 'User-6mrorgwcf5ee7nlefub3gyp3ti-staging'
var ddb_primary_key = 'id';


function write(params, context){
  console.log(params)

  ddb.putItem(params, function(err, data) {
    if (err) {
      console.log("Error", err);
    } else {
      console.log("Success", data);
    }
  });
}

exports.handler = function(event, context) {
  if (!event.Records) {
    var params = {
      TableName: ddb_table_name,
      Item: aws.DynamoDB.Converter.marshall({
        id: createUUID(),
        name: event.request.userAttributes.email,
        email: event.request.userAttributes.email
      })
    };

    //eslint-disable-line
    if (Object.keys(event).length > 0) {
      write(params, context);
    }
  }
  context.done(null, event); // SUCCESS with message
};

function createUUID() {
  var dt = new Date().getTime()
  var uuid = 'xxxxxxxx-xxxx-4xxxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function (c) {
    var r = (dt + Math.random()*16)%16 | 0
    dt = Math.floor(dt/16)
    return (c == 'x' ? r : (r&0x3|0x8)).toString(16)
  })
  return uuid
}
