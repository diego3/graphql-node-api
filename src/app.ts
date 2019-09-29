import * as express from 'express';
import graphqlHTTP = require('express-graphql');
import schema from './graphql/schema';


class App {

    public express: express.Application;


    constructor(){
        this.express = express();
        this.middleware();
    }

    private middleware():void {
        // this.express.use('/hello', (req: express.Request, res: express.Response, next: express.NextFunction) => {
        //     res.send({
        //         hello: "Hello World!"
        //     });
        // });

        this.express.use('/graphql', graphqlHTTP({
            schema: schema
        }));
    }

}

export default new App().express;