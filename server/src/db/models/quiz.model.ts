import { Sequelize, Model, DataTypes } from "sequelize";

export class Quiz extends Model {
  public id!: number;
  public question!: string;

  public answer1!: string;
  public answer2!: string;
  public answer3!: string;
  public answer4!: string;

  public correctAnswer!: number;

  public readonly createdAt!: Date;
  public readonly updatedAt!: Date;
}

export default (sequelize: Sequelize): void =>
  Quiz.init(
    {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: DataTypes.INTEGER.UNSIGNED,
        unique: true,
      },
      question: {
        allowNull: false,
        type: DataTypes.STRING(200),
        unique: true,
      },
      answer1: {
        allowNull: false,
        type: DataTypes.STRING(200),
        unique: true,
      },
      answer2: {
        allowNull: false,
        type: DataTypes.STRING(200),
        unique: true,
      },
      answer3: {
        allowNull: false,
        type: DataTypes.STRING(200),
        unique: true,
      },
      answer4: {
        allowNull: false,
        type: DataTypes.STRING(200),
        unique: true,
      },
      correctAnswer: {
        allowNull: false,
        type: DataTypes.INTEGER.UNSIGNED,
      },
      topicId: {
        field: "topic_id",
        references: {
          model: "Topic",
          key: "id",
        },
        type: DataTypes.INTEGER.UNSIGNED,
      },
    },
    {
      sequelize,
      tableName: "quizzes",
    }
  );
