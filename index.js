const graphql = require('graphql').graphql
const express = require('express');
const graphqlHTTP = require('express-graphql');
const NotificationSchema = require('./schemas/NotificationSchema');

const query = `
  query {
    notifications {
      title,
      timestamp,
      description
      source {
        id,
        name
      }
    }
  }
`;

graphql(NotificationSchema, query).then(function(result) {
  console.log(JSON.stringify(result));
});

const app = express();

app.use(
  '/graphql', 
  graphqlHTTP({
    schema: NotificationSchema,
    graphiql: true
  })
);

app.listen(80, function(err) {
  console.log('GraphQL Server running on localhost:80');  
});
