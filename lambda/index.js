// import DynamoDB from 'aws-sdk/clients/dynamodb';
import { DynamoDBClient, GetItemCommand, DescribeTableCommand, PutItemCommand  } from "@aws-sdk/client-dynamodb";
const dynamodb = new DynamoDBClient(); // {region: 'us-east-2'}

const TABLENAME = 'samepage'

export const handler = async (event) => {
  
  // {{lambda url}}/key
  // const key = event.rawPath.split('/')[1]
  // payload for PUTs is password, text
  // payload for POSTs is password, text
  
  // console.log({event})
  // console.log({http: event.requestContext.http})
  // console.log({payload: event.payload})
  // console.log({operation: event.operation})

  console.log('putting item')
  // Could throw ConditionalCheckFailedException if password doesn't match
  const putresults = await dynamodb.send(new PutItemCommand({ 
      "TableName": TABLENAME,
      "Item": {
        "key": {
          "S": "testkey"
        },
        "text": {
          "S": "this should stick"
        },
      },
      "ConditionExpression": 'password = :password',
      "ExpressionAttributeValues": {
        ":password": { "S": "passw0rd" }
      }
  }))
  console.log({putresults})
  
  console.log("getting item")
  const dbresponse = await dynamodb.send(new GetItemCommand({
    "Key": {
      "key": {
        "S": "testkey"
      }
    },
    "TableName": TABLENAME,
    "ConsistentRead": true
  }));
  console.log({dbresponse})
    
    // TODO implement
  const response = {
    statusCode: 200,
    body: JSON.stringify('Hello from Lambda!'),
  };
  return response;
};


