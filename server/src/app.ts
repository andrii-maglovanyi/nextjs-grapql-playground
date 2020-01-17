import { ApolloServer } from "apollo-server-koa";
import * as Koa from "koa";
import * as cors from "@koa/cors";
import { fileLoader, mergeResolvers, mergeTypes } from "merge-graphql-schemas";

import logger from "./services/logger";
import models, { sequelize } from "./db/models";

const initCors = (app: Koa): void => {
  app.use(
    cors({
      credentials: true,
      origin: process.env.WEB_ORIGIN,
    })
  );
};

const initApolloServer = (app: Koa): void => {
  const resolvers = mergeResolvers(
    fileLoader(__dirname.concat("/resolvers/*.*"))
  );
  const typeDefs = mergeTypes(
    fileLoader(__dirname.concat("/schema/*.graphql"))
  );

  const getIdToken = (request): string =>
    request.headers?.authorization?.split(" ").pop();

  const server = new ApolloServer({
    typeDefs,
    resolvers,
    context: ({ ctx }): object => ({
      models,
      idToken: getIdToken(ctx.request),
    }),
  });

  server.applyMiddleware({ app, path: "/api" });
};

const initUnhandledExceptions = (app: Koa): void => {
  app.use(async (ctx, next) => {
    try {
      await next();
    } catch (error) {
      ctx.status = error.status || 500;
      ctx.body = error.message;
      ctx.app.emit("error", error, ctx);
    }
  });

  app.on("error", (error, ctx) => {
    logger.error(error.message);
    ctx.throw(500, "Server error...");
  });
};

const init = async (): Promise<Koa> => {
  const app = new Koa();

  initCors(app);

  initUnhandledExceptions(app);

  initApolloServer(app);

  await sequelize.sync();

  return app;
};

export default init;
