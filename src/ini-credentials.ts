import {CredentialProviderSource, Mode} from "aws-cdk";
import * as aws from "aws-sdk";

export class IniCredentials implements CredentialProviderSource {
    name: string;

    constructor() {
        this.name = 'IniCredentials';
    }

    public async isAvailable(): Promise<boolean> {
        return true;
    }

    public async canProvideCredentials(accountId: string): Promise<boolean> {
        return true;
    }

    public async getProvider(accountId: string, mode: Mode): Promise<aws.Credentials> {
        return new aws.SharedIniFileCredentials({profile: accountId});
    }
}