import * as Sequelize from 'sequelize'
import { ModelsInterface } from './ModelsInterface';

export interface DbConnectionInterface extends ModelsInterface{

    sequelize: Sequelize.Sequelize
}