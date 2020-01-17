import { Sequelize, Model, DataTypes } from "sequelize";

import { types, Type } from "../constants";

export class Subject extends Model {
  public id!: number;
  public name: string;
  public description: string;
  public type: Type;

  public readonly createdAt!: Date;
  public readonly updatedAt!: Date;
}

export default (sequelize: Sequelize): void =>
  Subject.init(
    {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: DataTypes.INTEGER.UNSIGNED,
        unique: true,
      },
      name: {
        allowNull: false,
        type: DataTypes.STRING(100),
        unique: true,
      },
      description: {
        allowNull: false,
        type: DataTypes.STRING(10000),
      },
      type: {
        allowNull: false,
        type: DataTypes.ENUM(...types),
      },
      degree: {
        allowNull: false,
        type: DataTypes.INTEGER.UNSIGNED,
      },
    },
    {
      sequelize,
      tableName: "subjects",
    }
  );
