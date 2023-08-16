import { DataTypes, Optional, Model } from 'sequelize'
import {  sequelize } from '../database/seeders'

export interface Category{
    id: number
    name: string
    position: number
}

export interface CategoryCreateAttributes extends Optional<Category, 'id'>{}

export interface CategoryInstance extends Model<Category, CategoryCreateAttributes>, Category { }

export const Category = sequelize.define<CategoryInstance, Category>('Category',{
    id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: DataTypes.INTEGER
      },
      name: {
        allowNull: false,
        type: DataTypes.STRING
      },
      position: {
        allowNull: false,
        type: DataTypes.INTEGER
      }
})