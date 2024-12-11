// QUERY TYPES
export const typeDefs = `#graphql
  input UserID {
    uid: ID
  }

  type User {
    id: ID
    name: String
    email: String! # Can't return null
  }

  type Role {
    name: String
  }

  type Query {
    users: [User]
    user: [User]
  }
`;
    // user(id: UserID!): User