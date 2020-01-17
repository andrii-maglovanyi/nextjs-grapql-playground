import { resolve } from "path";

import "./globalConfig";

import init from "./src/app";

if (process.env.NODE_ENV !== "production") {
  process.env.GOOGLE_APPLICATION_CREDENTIALS = resolve(
    process.env.SERVICE_ACCOUNT_KEY_FILE_PATH
  );

  const port = process.env.API_PORT || 4000;
  init().then((app) => {
    app.listen({ port }, () =>
      console.log(`🛠️ Development server is ready at http://localhost:${port}`)
    );
  });
}

export default init;
