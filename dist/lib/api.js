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
Object.defineProperty(exports, "__esModule", { value: true });
exports.DELETE = exports.PUT = exports.GET = exports.POST = exports.version = void 0;
const request = __importStar(require("./request"));
/**
 * Sends an GET request to the NFON REST API path '/api/version' and receives the current version of the NFON API
 */
const version = async () => await request.send('GET', '/api/version');
exports.version = version;
/**
 * Sends an POST request to the api
 * @param path NFON REST API path
 * @param data The data that should be send with this request
 */
const POST = async (path, data) => await request.send('POST', path, data);
exports.POST = POST;
/**
 * Sends an GET request to the api
 * @param path NFON REST API path
 */
const GET = async (path) => await request.send('GET', path);
exports.GET = GET;
/**
 * Sends an PUT request to the api
 * @param path NFON REST API path
 * @param data The data that should be send with this request
 */
const PUT = async (path, data) => await request.send('PUT', path, data);
exports.PUT = PUT;
/**
 * Sends an DELETE request to the api
 * @param path NFON REST API path
 */
const DELETE = async (path) => await request.send('DELETE', path);
exports.DELETE = DELETE;
//# sourceMappingURL=api.js.map