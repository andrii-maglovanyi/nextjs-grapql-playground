import { Sequelize, Model, DataTypes } from "sequelize";

export class Topic extends Model {
  public id!: number;
  public name: string;
  public description: string;

  public readonly createdAt!: Date;
  public readonly updatedAt!: Date;
}

export default (sequelize: Sequelize): void =>
  Topic.init(
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
        type: DataTypes.STRING(5000),
      },
      subjectId: {
        field: "subject_id",
        references: {
          model: "Subject",
          key: "id",
        },
        type: DataTypes.INTEGER.UNSIGNED,
      },
    },
    {
      sequelize,
      tableName: "topics",
    }
  );
