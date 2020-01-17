const Router = require("koa-router");

const init = require("./server/dist").default;
const { nextApp, handler } = require("./web/index");

const router = new Router();

const port = process.env.API_PORT || 8080;

init().then(async app => {
  try {
    await nextApp.prepare();

    router.get("*", async ctx => {
      await handler(ctx.req, ctx.res);
      ctx.respond = false;
    });

    app.use(router.routes());
    app.listen(port, () => console.log(`🚀 App is ready on port ${port}`));
  } catch (e) {
    console.error(e);
    process.exit();
  }
});
