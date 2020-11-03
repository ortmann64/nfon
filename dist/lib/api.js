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
const version = () => new Promise((resolve, reject) => {
    request.send('GET', '/api/version').then((response) => resolve(response)).catch(error => reject(error));
});
exports.version = version;
const POST = (path, data) => new Promise((resolve, reject) => {
    request.send('POST', path, data).then((response) => resolve(response)).catch(error => reject(error));
});
exports.POST = POST;
const GET = (path) => new Promise((resolve, reject) => {
    request.send('GET', path).then((response) => resolve(response)).catch(error => reject(error));
});
exports.GET = GET;
const PUT = (path, data) => new Promise((resolve, reject) => {
    request.send('PUT', path, data).then((response) => resolve(response)).catch(error => reject(error));
});
exports.PUT = PUT;
const DELETE = (path) => new Promise((resolve, reject) => {
    request.send('DELETE', path).then((response) => resolve(response)).catch(error => reject(error));
});
exports.DELETE = DELETE;
//# sourceMappingURL=api.js.map