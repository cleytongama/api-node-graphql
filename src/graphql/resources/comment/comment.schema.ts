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
`

const commentQueries = `
    commentsByPost(post: ID!, first: Int, offset: Int ): [Comment!]!
`

const commentMutations = `
    createComment(input: CommentCreateInput!): Comment
    updateComment(id: ID!, input: CommentCreateInput!): Comment
    deleteComment(id: ID!): Boolean
`

export {
    commentTypes,
    commentQueries,
    commentMutations
}