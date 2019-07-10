import {GraphQLServer} from 'graphql-yoga';

const typeDefs=`
 type Query{
       hello:String,
       hi:Int,
       gg:[Int!],
       product:Product,
       me(name:String):String
   },
   type Mutation{
       createUser(id:ID,name:String,quantity:Int):Product
   },
   type Product{
       id:ID,
       name:String,
       quantity:Int
   }  
`
const resolvers={
    Query:{
        hello(){
            return 'hello world'
        },
        hi(){
            return 2;
        },
        gg(){
            return [4,5,6]
        },
        product(){
            return{
                id:5,
                name:'alok',
                quantity:8
            }
        },
        me(parent,args,ctx,info){
            if(args.name){
                return `hello ${args.name}`
            }
            else{
                return 'hello'
            }
        }

    },
    Mutation:{
        createUser(parent,args,ctx,info){
             return {
               id:args.id,
               name:args.name,
               quantity:args.quantity
             }
        }
    }
}

const server=new GraphQLServer({
    typeDefs,
    resolvers
})

server.start(()=>{
    console.log('server is started')
}
)