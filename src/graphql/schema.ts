import { makeExecutableSchema } from 'graphql-tools';

const users: any[] = [
    {
        id: 1,
        name: 'Jon',
        email: 'jon@email.com'
    },
    {
        id: 1,
        name: 'Dany',
        email: 'dany@email.com'
    }
];


const typeDefs = `
    type User {
        id: ID!
        name: String!
        email: String!
    }

    type Query {
        AllUsers: [User!]!
    }
`;

const resolvers = {
    Query:{
        AllUsers: () => users
    }
};


export default makeExecutableSchema({typeDefs, resolvers});