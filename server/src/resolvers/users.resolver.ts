import { AuthenticationError } from "apollo-server-koa";

import admin from "../services/firebase-admin";
import logger from "../services/logger";

type Progress = Array<{ id: string }>;

type User = {
  id: string;
  progress: Progress;
};

export default {
  Mutation: {
    signUp: async (parent, args, { idToken, models }): Promise<User> => {
      try {
        if (!idToken) {
          throw new AuthenticationError("No idToken provided.");
        }

        const decodedToken = await admin.auth().verifyIdToken(idToken);
        const user = await models.User.findByPk(decodedToken.uid);

        if (user) {
          return user;
        }

        return await models.User.create({
          id: decodedToken.uid,
        });
      } catch (error) {
        logger.error(error.message);
        throw error;
      }
    },
  },
  Query: {
    progress: async (
      parent,
      args,
      { idToken, models }
    ): Promise<Progress | null> => {
      try {
        if (!idToken) {
          throw new AuthenticationError("No idToken provided.");
        }

        const decodedToken = await admin.auth().verifyIdToken(idToken);

        return await models.UserProgress.findAll({
          attributes: [["topic_id", "id"]],
          where: { user_id: decodedToken.uid }, // eslint-disable-line @typescript-eslint/camelcase
        });
      } catch (error) {
        logger.error(error.message);
        throw error;
      }
    },
  },
};
