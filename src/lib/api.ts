import * as request from './request';

/**
 * Sends an GET request to the NFON REST API path '/api/version' and receives the current version of the NFON API
 */
const version = async (): Promise<any> => await request.send('GET', '/api/version');
/**
 * Sends an POST request to the api
 * @param path NFON REST API path
 * @param data The data that should be send with this request
 */
const POST = async (path: string, data: any): Promise<any> => await request.send('POST', path, data);
/**
 * Sends an GET request to the api
 * @param path NFON REST API path
 */
const GET = async (path: string): Promise<any> => await request.send('GET', path);
/**
 * Sends an PUT request to the api
 * @param path NFON REST API path
 * @param data The data that should be send with this request
 */
const PUT = async (path: string, data: any): Promise<any> => await request.send('PUT', path, data);
/**
 * Sends an DELETE request to the api
 * @param path NFON REST API path
 */
const DELETE = async (path: string): Promise<any> => await request.send('DELETE', path);

export {
  version,
  POST,
  GET,
  PUT,
  DELETE
};