import crypto from 'crypto';
import https from 'https';
import * as config from './config'

/**
 * Prepares and sends the request to the NFON REST API
 * @param method The method which should be used
 * @param path The path to the api
 * @param data The data (optional) which should be send with the request
 */
const send = (method: 'POST' | 'GET' | 'PUT' | 'DELETE', path: string, data?: any) => new Promise((resolve, reject) => {

  const dataAsString = data ? JSON.stringify(data) : '';
  const contentMD5 = crypto.createHash('md5').update(dataAsString).digest('hex');
  const contentType = 'application/json';
  const requestDate = new Date(Date.now()).toUTCString();
  const key = config.get().apiSecretAccessKeyId;
  const stringToSign = `${method}\n${contentMD5}\n${contentType}\n${requestDate}\n${path}`;

  const signature = crypto.createHmac('sha1', key).update(stringToSign).digest('base64');

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
    }
  };

  const req = https.request(requestConfig, (res) => {
    res.setEncoding('utf8');

    let body = '';

    res.on('data', (chunk) => {
      body = body + chunk;
    });

    res.on('end', () => {
      try {
        body = JSON.parse(body);
      } catch (error) {
        // console.error(error)
      } finally {
        const result = {
          statusCode: res.statusCode,
          statusMessage: res.statusMessage,
          data: body
        }
        resolve(result);
      }
    });

  });

  req.on('error', (error) => {
    reject(error);
  });

  if (data) { req.write(dataAsString); }
  req.end();

})

export {
  send
};