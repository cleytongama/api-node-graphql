import * as Sequelize from "sequelize";
import { genSaltSync, hashSync, compareSync } from 'bcryptjs'

import { BaseModelInterface } from '../interfaces/BaseModelInterface';
import { ModelsInterface } from "../interfaces/ModelsInterface";

export interface UserAttributes {
    id?: number
    name?: string
    email?: string
    password?: string
    photo?: string
    createdAt?: string
    updateAt?: string
}

export interface UserInstance extends Sequelize.Instance<UserAttributes>, UserAttributes {
    isPassword(encodePassword: string, password: string): boolean
}

export interface UserModel extends BaseModelInterface, Sequelize.Model<UserInstance, UserAttributes> { }

export default (sequelize: Sequelize.Sequelize, DataTypes: Sequelize.DataTypes): UserModel => {

    const User: UserModel = sequelize.define('User', {
        id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            primaryKey: true,
            autoIncrement: true
        },
        name: {
            type: DataTypes.STRING(128),
            allowNull: false
        },
        email: {
            type: DataTypes.STRING(128),
            allowNull: false,
            unique: true
        },
        password: {
            type: DataTypes.STRING(128),
            allowNull: false,
            validate: {
                notEmpty: true
            }
        },
        photo: {
            type: DataTypes.BLOB(),
            allowNull: true,
            defaultValue: true
        }
    }, {
            tableName: 'users',
            hooks: {
                beforeCreate: (user: UserInstance, options: Sequelize.CreateOptions): void => {
                    const salt = genSaltSync()
                    user.password = hashSync(user.password, salt)
                }
            }
        })

    User.associate = (models: ModelsInterface): void => {

    }
    User.prototype.isPassword = (encodePassword: string, password: string): boolean => {
        return compareSync(password, encodePassword)
    }

    return User
}