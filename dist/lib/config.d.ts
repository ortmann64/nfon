/**
 * @param accessKeyId NFON AccessKeyId
 * @param secretAccessKeyId NFON SecretAccessKeyID
 */
export interface NfonConfigInterface {
    accessKeyId: string;
    secretAccessKeyId: string;
}
/**
 * Configure with your credentials
 * @param config NfonConfigInterface
 */
declare const set: (config: NfonConfigInterface) => void;
declare const get: () => {
    apiHost: string;
    apiPort: number;
    apiAccessKeyId: string;
    apiSecretAccessKeyId: string;
};
export { set, get };
