/**
 * The host of the NFON REST API
 */
const apiHost = 'portal-api.nfon.net';
/**
 * The port of the NFON REST API
 */
const apiPort = 8090;
/**
 * Your Access Key ID from NFON
 */
let apiAccessKeyId = '';
/**
 * Your Secret Access Key ID from NFON
 */
let apiSecretAccessKeyId = '';

/**
 * @param accessKeyId NFON AccessKeyId
 * @param secretAccessKeyId NFON SecretAccessKeyID
 */
export interface NfonConfigInterface {
    accessKeyId: string,
    secretAccessKeyId: string
}

/**
 * Sets your api credentials
 * @param config NfonConfigInterface
 */
const set = (config: NfonConfigInterface) => {
    apiAccessKeyId = config.accessKeyId;
    apiSecretAccessKeyId = config.secretAccessKeyId;
};

/**
 * Gets the current configuration
 */
const get = () => {
    return {
        apiHost,
        apiPort,
        apiAccessKeyId,
        apiSecretAccessKeyId
    }
};

export {
    set,
    get
};