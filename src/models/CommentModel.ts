import * as Sequelize from 'sequelize'
import { BaseModelInterface } from '../interfaces/BaseModelInterface';
import { CommentModel } from './CommentModel';
import { ModelsInterface } from '../interfaces/ModelsInterface';


// Criando uma interface de atributos para comment
export interface CommentAttributes {
    id?: number
    comment?: string
    post?: number
    user?: number
    createdAt?: string
    updatedAt?: string
}
//Criando uma interface para o Comment
export interface CommentInterface extends Sequelize.Instance<CommentAttributes>, CommentAttributes { }

//Criando uma interface para o Model
export interface CommentModel extends BaseModelInterface, Sequelize.Model<CommentInterface, CommentAttributes> { }

export default (sequelize: Sequelize.Sequelize, DataTypes: Sequelize.DatatTypes): CommentModel => {

    const Comment: CommentModel = sequelize.define('Comments', {
        id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            primaryKey: true,
            autoIncrement: true
        },
        comment: {
            type: DataTypes.TEXT,
            allowNull: false
        }
    }, {
            tableName: 'comments'
        })

    Comment.associate = (models: ModelsInterface): void => {
        Comment.belongsTo(models.Post, {
            foreignKey: {
                allowNull: false,
                field: 'post',
                name: 'post'
            }
        })

        Comment.belongsTo(models.User, {
            foreignKey: {
                allowNull: false,
                field: 'user',
                name: 'user'
            }
        })
    }

    return Comment
}