import { CredentialProviderSource, Mode } from "aws-cdk";
import * as aws from "aws-sdk";
export declare class IniCredentials implements CredentialProviderSource {
    name: string;
    constructor();
    isAvailable(): Promise<boolean>;
    canProvideCredentials(accountId: string): Promise<boolean>;
    getProvider(accountId: string, mode: Mode): Promise<aws.Credentials>;
}
