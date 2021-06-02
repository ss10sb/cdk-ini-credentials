import {IniCredentials} from "./ini-credentials";
import {Plugin, PluginHost} from "aws-cdk";

export class IniCredentialsPlugin implements Plugin {
    public readonly version = "1";

    public init(host: PluginHost): void {
        host.registerCredentialProviderSource(new IniCredentials());
    }
}