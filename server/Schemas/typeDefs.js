const { gql } = require('apollo-server-express');

const typeDefs = gql`
type User {
    _id: ID!
    username: String!
    email: String!
    bookCount: Int
    savedBooks: [Book]
}

type Book {
    bookId: ID
    authors: [String]
    description: String
    title: String
    image: String
    link: String
}

type Auth {
    token: String
    user: User
}

type Query {
    me: User
}

type Mutation {
    login(emial: String, password: String): Auth addUser(username: String, password: String): Auth
    saveBook(
        authors: [String]!
        descriptioon: [String]!
        title: String!
        bookId: String!
        link: String!
    ): User
    removeBook(bookId: ID): User
}`;

module.exports = typeDefs;