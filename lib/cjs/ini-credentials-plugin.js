"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.IniCredentialsPlugin = void 0;
const ini_credentials_1 = require("./ini-credentials");
class IniCredentialsPlugin {
    constructor() {
        this.version = "1";
    }
    init(host) {
        host.registerCredentialProviderSource(new ini_credentials_1.IniCredentials());
    }
}
exports.IniCredentialsPlugin = IniCredentialsPlugin;
//# sourceMappingURL=ini-credentials-plugin.js.map