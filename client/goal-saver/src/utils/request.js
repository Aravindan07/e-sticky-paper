import 'whatwg-fetch';
import history from './history';

function parseJSON(response) {
    if (response.status === 204 || response.status === 205) {
        return null;
    }
    return response.json();
}

function checkStatus(response) {
    if (response.status >= 200 && response.status < 300) {
        return response;
    }

    if (401 === response.status) {
        history.push('/signin');
    }

    if ([500, 503, 403, 404].includes(response.status)) {
        history.push('/error_page');
    }

    // if(response.status > 300 && response.status <=500) {
    //   return error;
    // }

    const error = new Error(response.statusText);
    error.response = response;
    throw error;
}

function checkResponseContentType(response) {
    if (
        response.headers.get('content-type') &&
        response.headers.get('content-type').includes('application/json')
    ) {
        return parseJSON(response);
    }
    return response;
}

export function makeReqOptions(params = {}) {
    const options = {
        method: 'GET',
        headers: {
            Accept: '*/*',
        },
    };

    if (params.contentType) {
        options.headers['Content-Type'] = params.contentType;
    } else {
        options.headers['Content-Type'] = 'application/json';
    }

    if (params.apiKey) {
        options.headers['X-Api-Key'] = params.apiKey;
    }

    if (params.method) {
        options.method = params.method;
    }

    if (params.credentials) {
        options.credentials = params.credentials;
    }

    options.mode = 'cors';

    if (
        (params.method === 'POST' || params.method === 'PUT' || params.method === 'PATCH') &&
        params.data
    ) {
        if (options.headers['Content-Type'] === 'application/x-www-form-urlencoded') {
            const searchParams = Object.keys(params.data)
                .map((key) => `${encodeURIComponent(key)}=${encodeURIComponent(params.data[key])}`)
                .join('&');
            options.body = searchParams;
        } else if (options.headers['Content-Type'] === 'application/json') {
            options.body = JSON.stringify(params.data);
        } else {
            // this is to handle multipart-formdata and other such content types
            options.body = params.data;
            // options.mode = 'no-cors';
        }
    } else if (params.data) {
        options.queryParams = params.data;
    }
    if (params.payload) {
        options.queryParams = params.payload;
    }
    return options;
}

export default function request(url, options) {
    const requestURL = new URL(url);
    if (options.queryParams) {
        Object.keys(options.queryParams).forEach((key) => {
            requestURL.searchParams.append(key, options.queryParams[key]);
        });
    }
    return fetch(requestURL, options).then(checkStatus).then(checkResponseContentType);
}
