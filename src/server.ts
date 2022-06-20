import * as http from "http";
import { Application } from "./Application";

// TODO extract ALIAS, PORT to process.env
const PORT = 3003;
const ALIAS = "auth";

(async () => {
    const application = new Application(ALIAS);

    const server = http.createServer(application.express);
    await server.listen(PORT, () => {
        console.log(`Express server listening on port ${PORT} (alias: ${ALIAS}})`);
    });
})();