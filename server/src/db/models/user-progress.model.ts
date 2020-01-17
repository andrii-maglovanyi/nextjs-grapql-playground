import { Sequelize, Model, DataTypes } from "sequelize";

export class UserProgress extends Model {
  public completed: boolean;

  public readonly createdAt!: Date;
  public readonly updatedAt!: Date;
}

export default (sequelize: Sequelize): void =>
  UserProgress.init(
    {
      completed: {
        allowNull: false,
        type: DataTypes.BOOLEAN,
      },
    },
    {
      indexes: [
        {
          unique: true,
          fields: ["topic_id", "user_id"],
        },
      ],
      sequelize,
      tableName: "user_progresses",
    }
  );
