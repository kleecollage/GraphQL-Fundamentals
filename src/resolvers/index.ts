import { users } from "../dataSources/users.data";

// RESOLVER
export const resolvers = {
  Query: {
    users: () => users,
    user: (parent, args, { dataSources }, info) => {
      return dataSources.usersAPI.getAllUsers()
    }

    /* user: (parent, args, contextValue, info) => {
      console.log(contextValue)
      const { uid } = args.id
      const user = users.filter((user) => user.id === uid);

      if (!user[0]) {
        throw new GraphQLError(`User ${uid} does not exists`, {
          extensions: {
            code: 'NOT_FOUND_USER',
            stacktrace: ['User not exists in database'],
          },
          path: ['usr'],
        })
      }

      return user[0];

      return
    }, */
  },
};