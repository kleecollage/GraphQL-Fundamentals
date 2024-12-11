import { ApolloServer } from '@apollo/server';
import { startStandaloneServer } from '@apollo/server/standalone';
import { MyContext } from './context';
import { UsersAPI } from './dataSources/users2.data';
import { resolvers } from './resolvers';
import { typeDefs } from './typeDefs';

// SERVER
const server = new ApolloServer<MyContext>({
	typeDefs,
	resolvers,
});

const { url } = await startStandaloneServer(server, {
	listen: {
		port: parseInt(process.env.PORT || '4000'),
	},
	context: async () => {
    const { cache } = server

    return {
			dataSources: {
				usersAPI: new UsersAPI({ cache }),
			},
		};
	},
});

console.log('🚀  Server ready at: ', url);
