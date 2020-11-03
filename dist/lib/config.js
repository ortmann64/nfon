"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.get = exports.set = void 0;
const apiHost = 'portal-api.nfon.net';
const apiPort = 8090;
let apiAccessKeyId = '';
let apiSecretAccessKeyId = '';
/**
 * Configure with your credentials
 * @param config NfonConfigInterface
 */
const set = (config) => {
    apiAccessKeyId = config.accessKeyId;
    apiSecretAccessKeyId = config.secretAccessKeyId;
};
exports.set = set;
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