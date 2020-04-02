import {path} from '../constants';

const get = (url) => {
    return fetch(path + '/api' + url,{
        method: 'GET'
    }).then(res => res.json())
        .catch(err => console.error(err))
}

export default {
    getHeroes: () => get('/heroStats'),
}
