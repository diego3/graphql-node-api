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

    type Mutation {
        createUser(name:String!, email:String!) : User
    }
`;

const resolvers = {
    Query:{
        AllUsers: () => users
    },
    Mutation:{
        createUser: (parent, args) => {
            let newUser = Object.assign({id: users.length + 1}, args);
            users.push(newUser);
            return newUser;
        }
    }
};


export default makeExecutableSchema({typeDefs, resolvers});