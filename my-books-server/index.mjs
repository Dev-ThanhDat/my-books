import { ApolloServer } from '@apollo/server';
import { startStandaloneServer } from '@apollo/server/standalone';
import dotenv from 'dotenv';
import { dbConnect } from './config/connect.config.js';
import { resolvers } from './graphsql/resolver.js';
import { typeDefs } from './graphsql/schema.js';

dotenv.config();
dbConnect();

const server = new ApolloServer({
  typeDefs,
  resolvers
});

const { url } = await startStandaloneServer(server);
console.log(`🚀 Server ready at ${url}`);
