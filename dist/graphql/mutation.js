"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const user_schema_1 = require("./resources/user/user.schema");
const Mutation = `
    type Mutation {
        ${user_schema_1.userMutations}
    }
`;
exports.Mutation = Mutation;
