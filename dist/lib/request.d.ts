declare const send: (method: 'POST' | 'GET' | 'PUT' | 'DELETE', path: string, data?: any) => Promise<unknown>;
export { send };
