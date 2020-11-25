const { ApolloServer, gql } = require('apollo-server');

const studentsData = [
    {
        "id": 1,
        "name": "Ammar",
        "email": "ammar@gmail.com",
        "age": 22
    },
    {
        "id": 2,
        "name": "Ahmad",
        "email": "ahmad@gmail.com",
        "age": 25
    },
    {
        "id": 3,
        "name": "Zain",
        "email": "zain@gmail.com",
        "age": 18
    }
]

const typeDefs = gql`
  type Student {
    id: Int
    name: String
    email: String
    age: Int
  }

  type Query {
    students: [Student]
  }
`;

const resolvers = {
    Query: {
        students: () => studentsData
    },
};

const server = new ApolloServer({ typeDefs, resolvers });

server.listen().then(({ url }) => {
  console.log(`🚀  Server ready at ${url}`);
});