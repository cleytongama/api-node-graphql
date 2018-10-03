import { ModelsInterface } from './../interfaces/ModelsInterface';
import { BaseModelInterface } from './../interfaces/BaseModelInterface';
import * as Sequelize from 'sequelize'

export interface PostAttributes {
    id?: number
    title?: string
    content?: string
    photo?: string
    author?: string
    createdAt?: string
    updatedAt?: string
}

export interface PostInterface extends Sequelize.Instance<PostAttributes>, PostAttributes { }

export interface PostModel extends BaseModelInterface, Sequelize.Model<PostInterface, PostAttributes> { }

export default (sequelize: Sequelize.Sequelize, DataTypes: Sequelize.DataTypes): PostModel => {

    const Post: PostModel = sequelize.define('Post', {
        id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            primaryKey: true,
            autoIncrement: true
        },
        title: {
            type: DataTypes.STRING,
            allowNull: false
        },
        content: {
            type: DataTypes.TEXT,
            allowNull: false
        },
        photo: {
            type: DataTypes.BLOB({
                length: 'long'
            }),
            allowNull: false
        }
    }, {
            tableName: 'posts'
        })

    Post.associate = (models: ModelsInterface): void => {
        Post.belongsTo(models.User, {
            foreignKey: {
                allowNull: false,
                field: 'author',
                name: 'author'
            }
        })
    }

    return Post
}