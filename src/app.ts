import configureOpenAPI from "@/lib/configure-open-api";
import createApp from "@/lib/create-app";
import IndexRoute from "@/routes/index.route";

const app = createApp();
const routes = [IndexRoute];

configureOpenAPI(app);
routes.forEach(route => app.route("/", route));

export default app;
