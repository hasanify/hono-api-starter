import { createRoute, z } from "@hono/zod-openapi";
import * as HttpStatusCodes from "stoker/http-status-codes";
import { jsonContent } from "stoker/openapi/helpers";

import { createRouter } from "@/lib/create-app";

const router = createRouter().openapi(createRoute({
  tags: ["Index"],
  method: "get",
  path: "/",
  responses: {
    [HttpStatusCodes.OK]: jsonContent(z.object({
      message: z.string(),
    }), "Index Route"),
  },
}), (c) => {
  return c.json({ message: "Hello, Hono! 🔥" });
});

export default router;
