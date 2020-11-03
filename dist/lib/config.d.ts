/**
 * @param accessKeyId NFON AccessKeyId
 * @param secretAccessKeyId NFON SecretAccessKeyID
 */
export interface NfonConfigInterface {
    accessKeyId: string;
    secretAccessKeyId: string;
}
/**
 * Sets your api credentials
 * @param config NfonConfigInterface
 */
declare const set: (config: NfonConfigInterface) => void;
/**
 * Gets the current configuration
 */
declare const get: () => {
    apiHost: string;
    apiPort: number;
    apiAccessKeyId: string;
    apiSecretAccessKeyId: string;
};
export { set, get };
