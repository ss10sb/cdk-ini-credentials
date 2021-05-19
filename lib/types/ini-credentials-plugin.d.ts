import { Plugin, PluginHost } from "aws-cdk";
export declare class InitCredentialsPlugin implements Plugin {
    readonly version = "1";
    init(host: PluginHost): void;
}
