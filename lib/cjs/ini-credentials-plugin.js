"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.InitCredentialsPlugin = void 0;
const ini_credentials_1 = require("./ini-credentials");
class InitCredentialsPlugin {
    constructor() {
        this.version = "1";
    }
    init(host) {
        host.registerCredentialProviderSource(new ini_credentials_1.IniCredentials());
    }
}
exports.InitCredentialsPlugin = InitCredentialsPlugin;
//# sourceMappingURL=ini-credentials-plugin.js.map