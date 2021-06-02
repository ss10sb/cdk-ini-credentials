import { Plugin, PluginHost } from "aws-cdk";
export declare class IniCredentialsPlugin implements Plugin {
    readonly version = "1";
    init(host: PluginHost): void;
}
