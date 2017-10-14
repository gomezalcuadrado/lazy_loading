import 'whatwg-fetch';
import common from './CommonAPI';
import urls from './urls';
import 'babel-polyfill';

export default{
    getExecutions: () => fetch(urls.getExecutions, {
        mode: 'cors',
        headers: {Accept:'application/json'} 
    }).then(common.status).then(r => r.json()),

    processFile: (document, file) => fetch(urls.processFile, {
        mode: 'cors',
        method: 'POST',
        body: JSON.stringify({document, file}),
        headers: {Accept:'application/json'} 
    }).then(common.status).then(r => r.json())
}