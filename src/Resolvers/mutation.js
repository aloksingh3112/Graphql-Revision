export const Mutation={
    createUser(parent,args,ctx,info){
         return {
           id:args.id,
           name:args.name,
           quantity:args.quantity
         }
    }
}