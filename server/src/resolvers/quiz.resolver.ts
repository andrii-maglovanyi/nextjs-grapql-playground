import { AuthenticationError } from "apollo-server-koa";

import admin from "../services/firebase-admin";

type Quiz = {
  id: string;
  question: string;
  answer1: string;
  answer2: string;
  answer3: string;
  answer4: string;
  correctAnswer: number;
};

type Result = {
  result: boolean;
};

export default {
  Mutation: {
    checkAnswer: async (
      parent,
      { id, num },
      { idToken, models }
    ): Promise<Result> => {
      if (!idToken) {
        throw new AuthenticationError("No idToken provided.");
      }

      const decodedToken = await admin.auth().verifyIdToken(idToken);

      const quiz = await models.Quiz.findOne({
        where: { id, correctAnswer: num },
      });

      if (quiz) {
        await models.UserProgress.findOrCreate({
          where: {
            completed: 1,
            topic_id: quiz.topicId, // eslint-disable-line @typescript-eslint/camelcase
            user_id: decodedToken.uid, // eslint-disable-line @typescript-eslint/camelcase
          },
        });
      }

      return { result: !!quiz };
    },
  },
  Query: {
    quiz: async (parent, { id }, { models }): Promise<Quiz> =>
      await models.Quiz.findByPk(id),
  },
};
