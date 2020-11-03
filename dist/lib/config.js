"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.get = exports.set = void 0;
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
 * Sets your api credentials
 * @param config NfonConfigInterface
 */
const set = (config) => {
    apiAccessKeyId = config.accessKeyId;
    apiSecretAccessKeyId = config.secretAccessKeyId;
};
exports.set = set;
/**
 * Gets the current configuration
 */
const get = () => {
    return {
        apiHost,
        apiPort,
        apiAccessKeyId,
        apiSecretAccessKeyId
    };
};
exports.get = get;
//# sourceMappingURL=config.js.map