import { commentMutations } from './resources/comment/comment.schema'
import { userMutations } from './resources/user/user.schema'
import { postMutations } from './resources/post/post.schema'


const Mutation = `
    type Mutation {
        ${commentMutations}
        ${userMutations}
        ${postMutations}
        
    }
`;

export {
    Mutation
}