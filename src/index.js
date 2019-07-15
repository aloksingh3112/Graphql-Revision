import {GraphQLServer} from 'graphql-yoga';
import {Query} from './Resolvers/query';
import {Mutation} from './Resolvers/mutation';



const server=new GraphQLServer({
    typeDefs:'./src/schema.graphql',
    resolvers:{
         Query,
         Mutation

    }
})

server.start(()=>{
    console.log('server is started')
}
)