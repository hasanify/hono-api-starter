import { apiReference } from "@scalar/hono-api-reference";

import type { AppOpenAPI } from "@/lib/types";

// eslint-disable-next-line no-restricted-imports
import packageJSON from "../../package.json" assert { type: "json" };

const configureOpenAPI = (app: AppOpenAPI) => {
  app.doc("/doc", {
    openapi: "3.0.0",
    info: {
      title: "Starter Template",
      version: packageJSON.version,
    },
  });

  app.get("/reference", apiReference({
    spec: {
      url: "/doc",
    },
    theme: "kepler",
    layout: "classic",
    defaultHttpClient: {
      targetKey: "javascript",
      clientKey: "fetch",
    },
  }));
};

export default configureOpenAPI;
