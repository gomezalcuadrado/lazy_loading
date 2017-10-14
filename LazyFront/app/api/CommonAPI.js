import 'whatwg-fetch';

const success = resp => resp.status >= 200 && resp.status < 300;

function getErrorMsg(resp){
return resp.headers.has('errormessage') ? resp.headers.get('errormessage') : '¡Oh Oh! Algo ha salido mal. Ve, disfruta de un descanso y regresa luego :)';
}

export default {
status: resp => success(resp) ? Promise.resolve(resp)
: Promise.reject(getErrorMsg(resp)),

json: response => response?response.json():null,

};