export const Query={
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

}