"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express = require("express");
const graphqlHTTP = require("express-graphql");
const schema_1 = require("./graphql/schema");
class App {
    constructor() {
        this.route = express.Router();
        this.express = express();
        this.middleware();
        this.routes();
    }
    middleware() {
        this.express.use(this.route);
        this.express.use('/graphql', graphqlHTTP({
            schema: schema_1.default,
            graphiql: process.env.NODE_ENV === 'development'
        }));
    }
    routes() {
        this.route.get('/teste', (req, res, next) => res.send('Hello Cleyton'));
    }
}
exports.default = new App().express;
