/**
 * Sends an GET request to the NFON REST API path '/api/version' and receives the current version of the NFON API
 */
declare const version: () => Promise<any>;
/**
 * Sends an POST request to the api
 * @param path NFON REST API path
 * @param data The data that should be send with this request
 */
declare const POST: (path: string, data: any) => Promise<any>;
/**
 * Sends an GET request to the api
 * @param path NFON REST API path
 */
declare const GET: (path: string) => Promise<any>;
/**
 * Sends an PUT request to the api
 * @param path NFON REST API path
 * @param data The data that should be send with this request
 */
declare const PUT: (path: string, data: any) => Promise<any>;
/**
 * Sends an DELETE request to the api
 * @param path NFON REST API path
 */
declare const DELETE: (path: string) => Promise<any>;
export { version, POST, GET, PUT, DELETE };
