import * as express from 'express'
import * as graphqlHTTP from 'express-graphql'
import schema from './graphql/schema';

class App {

    public express: express.Application
    public route = express.Router()
    
    constructor() {
        this.express = express()
        this.middleware()
        this.routes()
    }
    
    private middleware(): void {
        
        this.express.use(this.route)   

        this.express.use('/graphql', graphqlHTTP({
            schema: schema,
            graphiql: process.env.NODE_ENV === 'development'
        }))
    }

    routes(){
        this.route.get('/teste', (req, res, next)=> res.send('Hello Cleyton'))   
    }

}

export default new App().express