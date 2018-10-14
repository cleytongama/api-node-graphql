"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const commentTypes = `
    #comment definition type
    type Comment {
        id: ID!
        comment: String!
        createAt:String!
        updateAt:String!
        user: User!
        post: [Post!]!
    }

    input CommentCreateInput{
        comment: String!
        post: Int!
        user: Int!
    }
`;
exports.commentTypes = commentTypes;
const commentQueries = `
    commentsByPost(post: ID!, first: Int, offset: Int ): [Comment!]!
`;
exports.commentQueries = commentQueries;
const commentMutations = `
    createComment(input: CommentCreateInput!): Comment
    updateComment(id: ID!, input: CommentCreateInput!): Comment
    deleteComment(id: ID!): Boolean
`;
exports.commentMutations = commentMutations;
