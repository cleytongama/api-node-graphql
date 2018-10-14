"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const user_schema_1 = require("./resources/user/user.schema");
const Query = `
    type Query {
        ${user_schema_1.userQueries}
    }
`;
exports.Query = Query;
