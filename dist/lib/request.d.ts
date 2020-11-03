/**
 * Prepares and sends the request to the NFON REST API
 * @param method The method which should be used
 * @param path The path to the api
 * @param data The data (optional) which should be send with the request
 */
declare const send: (method: 'POST' | 'GET' | 'PUT' | 'DELETE', path: string, data?: any) => Promise<unknown>;
export { send };
