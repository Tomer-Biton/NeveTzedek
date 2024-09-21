import axios from 'axios';

// API URL: https://web.postman.co/workspace/My-Workspace~8cd81012-dae2-4059-87ea-454d51a84a66/collection/34628109-c78b12e7-1fe2-4701-8feb-738025cdc02b?action=share&source=copy-link&creator=34628109

const data = JSON.stringify({

  "collection": "<COLLECTION_NAME>",
  "database": "<DATABASE_NAME>",
  "dataSource": "NeveTzedek",
  "projection": {
    "_id": 1
  }
});

const config = {
  method: 'post',
  url: process.env.MONGO_URI,
  headers: {
    'Content-Type': 'application/json',
    'Access-Control-Request-Headers': '*',
    'Authorization': 'Bearer <ACCESS_TOKEN>',
  },
  data: data
};

axios(config)
  .then(function (response) {
    console.log(JSON.stringify(response.data));
  })
  .catch(function (error) {
    console.log(error);
  });
