"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.send = void 0;
const crypto_1 = __importDefault(require("crypto"));
const https_1 = __importDefault(require("https"));
const config = __importStar(require("./config"));
const send = (method, path, data) => new Promise((resolve, reject) => {
    const dataAsString = data ? JSON.stringify(data) : '';
    const contentMD5 = crypto_1.default.createHash('md5').update(dataAsString).digest('hex');
    const contentType = 'application/json';
    const requestDate = new Date(Date.now()).toUTCString();
    const key = config.get().apiSecretAccessKeyId;
    const stringToSign = `${method}\n${contentMD5}\n${contentType}\n${requestDate}\n${path}`;
    const signature = crypto_1.default.createHmac('sha1', key).update(stringToSign).digest('base64');
    const requestConfig = {
        method: method,
        host: config.get().apiHost,
        port: config.get().apiPort,
        path: path,
        headers: {
            'Authorization': `NFON-API ${config.get().apiAccessKeyId}:${signature}`,
            'Content-MD5': contentMD5,
            'Content-Length': Buffer.byteLength(dataAsString),
            'Content-Type': contentType,
            'x-nfon-date': requestDate
        },
    };
    const req = https_1.default.request(requestConfig, (res) => {
        res.setEncoding('utf8');
        let body = '';
        res.on('data', (chunk) => {
            body = body + chunk;
        });
        res.on('end', () => {
            try {
                body = JSON.parse(body);
            }
            catch (error) {
                // console.error(error)
            }
            finally {
                const result = {
                    statusCode: res.statusCode,
                    statusMessage: res.statusMessage,
                    data: body
                };
                resolve(result);
            }
        });
    });
    req.on('error', (error) => {
        reject(error);
    });
    if (data) {
        req.write(dataAsString);
    }
    req.end();
});
exports.send = send;
//# sourceMappingURL=request.js.map