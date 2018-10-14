"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const postTypes = `
    #Post definition type
    type Post {
        id: ID!
        title: String!
        content: String!
        photo: String!
        createAt:String!
        updateAt:String!
        author: User!
        comments: [Comment!]!
    }

    input PostCreateInput{
        title: String!
        content: String!
        photo: String!
        author: Int!

    }
`;
exports.postTypes = postTypes;
const postQueries = `
    posts(first: Int, offset: Int ): [Post!]!
    posts(id: ID!): Post 
`;
exports.postQueries = postQueries;
const postMutations = `
    createPost(input: PostCreateInput!): Post
    updatePost( id: ID!, input: PostCreateInput!): Post
    deletePost(id: ID!): Boolean
`;
exports.postMutations = postMutations;
