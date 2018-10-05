import { CommentModel } from '../models/CommentModel';
import { PostModel } from './../models/PostModel';
import { UserModel } from './../models/UserModel';

export interface ModelsInterface {

    User: UserModel
    Post: PostModel
    Comment: CommentModel
}