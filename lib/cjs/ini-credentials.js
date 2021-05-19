"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.IniCredentials = void 0;
const tslib_1 = require("tslib");
const aws = tslib_1.__importStar(require("aws-sdk"));
class IniCredentials {
    constructor() {
        this.name = 'IniCredentials';
    }
    async isAvailable() {
        return true;
    }
    async canProvideCredentials(accountId) {
        return true;
    }
    async getProvider(accountId, mode) {
        return new aws.SharedIniFileCredentials({ profile: accountId });
    }
}
exports.IniCredentials = IniCredentials;
//# sourceMappingURL=ini-credentials.js.map