const graphql = require('graphql');

const Notifications = [
  {
    "title": "Notification test 1",
    "timestamp": 1477279253,
    "description": "Test description lorem ipsum",
    "source": {
      "id": 1,
      "name": "GovITHub"
    }
  },
  {
    "title": "Notification test 2",
    "timestamp": 1477279253,
    "description": "Test description lorem ipsum #2",
    "source": {
      "id": 2,
      "name": "GovITHub Test"
    }
  }
];

const NotificationSourceType = new graphql.GraphQLObjectType({
  name: 'NotificationSource',
  fields: function() {
    return {
      id: {
        type: graphql.GraphQLInt
      },
      name: {
        type: graphql.GraphQLString
      }
    }
  }
});

const NotificationType = new graphql.GraphQLObjectType({
  name: 'Notification',
  fields: function() {
    return {
      title: {
        type: graphql.GraphQLString
      },
      timestamp: {
        type: graphql.GraphQLInt
      },
      description: {
        type: graphql.GraphQLString
      },
      source: {
        type: NotificationSourceType
      }
    }
  }
});

const QueryType = new graphql.GraphQLObjectType({
  name: 'Query',
  fields: function () {
    return {
      notifications: {
        type: new graphql.GraphQLList(NotificationType),
        resolve: function () {
          return Notifications;
        }
      }
    }
  }
});

module.exports = new graphql.GraphQLSchema({
  query: QueryType
});
