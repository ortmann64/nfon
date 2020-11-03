declare const version: () => Promise<any>;
declare const POST: (path: string, data: any) => Promise<any>;
declare const GET: (path: string) => Promise<any>;
declare const PUT: (path: string, data: any) => Promise<any>;
declare const DELETE: (path: string) => Promise<any>;
export { version, POST, GET, PUT, DELETE };
