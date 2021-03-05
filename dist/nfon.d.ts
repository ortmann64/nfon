import * as config from "./lib/config";
import * as api from './lib/api';
declare const nfon: {
    config: (config: config.NfonConfigInterface) => void;
    api: typeof api;
};
export = nfon;
