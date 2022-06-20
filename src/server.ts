import "dotenv/config";

import * as http from "http";
import { Application } from "./Application";

const PORT = process.env.PORT;
const ALIAS = process.env.ALIAS;

(async () => {
    const application = new Application(ALIAS);

    const server = http.createServer(application.express);
    await server.listen(PORT, () => {
        console.log(`Express server listening on port ${PORT} (alias: ${ALIAS})`);
    });

    application.initialize();
})();