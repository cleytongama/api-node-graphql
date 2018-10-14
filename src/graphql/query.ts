import { commentQueries } from './resources/comment/comment.schema'
import { userQueries } from './resources/user/user.schema'
import { postQueries } from './resources/post/post.schema'

const Query = `
    type Query {
        ${commentQueries}
        ${userQueries}
        ${postQueries}
    }
`;

export {
    Query
}