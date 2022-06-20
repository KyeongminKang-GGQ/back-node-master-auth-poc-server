import "dotenv/config";

import moduleAlias from "module-alias";
moduleAlias.addAliases({
    "@common": `${__dirname}/common`,
    "@controllers": `${__dirname}/controllers`,
    "@routes": `${__dirname}/routes`,
    "@workers": `${__dirname}/workers`,
    "@storage": `${__dirname}/storage`,
});

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