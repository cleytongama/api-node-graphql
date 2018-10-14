"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const comment_schema_1 = require("./resources/comment/comment.schema");
const user_schema_1 = require("./resources/user/user.schema");
const post_schema_1 = require("./resources/post/post.schema");
const Query = `
    type Query {
        ${comment_schema_1.commentQueries}
        ${user_schema_1.userQueries}
        ${post_schema_1.postQueries}
    }
`;
exports.Query = Query;
