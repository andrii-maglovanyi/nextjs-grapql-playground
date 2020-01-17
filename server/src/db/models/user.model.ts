import { Sequelize, Model, DataTypes } from "sequelize";

export class User extends Model {
  public id!: string;
  public email: string;

  public readonly createdAt!: Date;
  public readonly updatedAt!: Date;
}

export default (sequelize: Sequelize): void =>
  User.init(
    {
      id: {
        allowNull: false,
        primaryKey: true,
        type: DataTypes.STRING(32),
        unique: true,
      },
    },
    {
      sequelize,
      tableName: "users",
    }
  );
